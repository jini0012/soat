import { NextResponse, NextRequest } from "next/server";
import { adminDb, adminStorage } from "../firebaseAdmin";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { v4 as uuidv4 } from "uuid";

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "인증되지 않은 요청입니다." },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const userTeam = session.user.teamName;
    const userType = session.user.userType;

    if (userType !== "seller") {
      return NextResponse.json(
        { error: "공연 관리자 회원만 공연을 등록할 수 있습니다." },
        { status: 403 }
      );
    }

    const data = await request.json();
    const bucket = adminStorage.bucket();

    // 포스터 이미지 처리
    let posterUrl = null;
    if (data.poster && data.poster.base64Data) {
      const posterFileName = `performances/${userId}/${uuidv4()}_${
        data.poster.fileName
      }`;
      const posterFile = bucket.file(posterFileName);

      // base64 데이터에서 실제 바이너리 데이터 추출
      const base64Data = data.poster.base64Data.split(";base64,").pop();
      const posterBuffer = Buffer.from(base64Data, "base64");

      await posterFile.save(posterBuffer, {
        metadata: {
          contentType: data.poster.fileType,
        },
      });

      // 파일 공개 URL 설정
      await posterFile.makePublic();
      posterUrl = `https://storage.googleapis.com/${bucket.name}/${posterFileName}`;

      // 원본 base64 데이터 제거하고 URL로 대체
      data.poster = {
        fileName: data.poster.fileName,
        fileSize: data.poster.fileSize,
        fileType: data.poster.fileType,
        url: posterUrl,
      };
    }

    // 콘텐츠 내 이미지 처리
    if (data.content && data.content.content) {
      for (let i = 0; i < data.content.content.length; i++) {
        const paragraph = data.content.content[i];
        if (paragraph.content) {
          for (let j = 0; j < paragraph.content.length; j++) {
            const item = paragraph.content[j];
            if (
              item.type === "customImage" &&
              item.attrs &&
              item.attrs.src &&
              item.attrs.src.startsWith("data:")
            ) {
              // MIME 타입 추출
              const mimeType = item.attrs.src.split(";")[0].split(":")[1];

              // 파일 확장자 결정
              let fileExtension = "png"; // 기본값
              if (mimeType) {
                if (mimeType === "image/jpeg" || mimeType === "image/jpg")
                  fileExtension = "jpg";
                else if (mimeType === "image/png") fileExtension = "png";
                else if (mimeType === "image/gif") fileExtension = "gif";
                else if (mimeType === "image/webp") fileExtension = "webp";
              }

              const contentImageFileName = `performances/${userId}/content/${uuidv4()}.${fileExtension}`;
              const contentImageFile = bucket.file(contentImageFileName);

              // base64 데이터에서 실제 바이너리 데이터 추출
              const contentBase64Data = item.attrs.src.split(";base64,").pop();
              const contentBuffer = Buffer.from(contentBase64Data, "base64");

              await contentImageFile.save(contentBuffer, {
                metadata: {
                  contentType: mimeType || "image/png", // 명시적으로 MIME 타입 설정
                },
              });

              // 파일 공개 URL 설정
              await contentImageFile.makePublic();
              const contentImageUrl = `https://storage.googleapis.com/${bucket.name}/${contentImageFileName}`;

              // base64 데이터를 URL로 대체
              data.content.content[i].content[j].attrs.src = contentImageUrl;
            }
          }
        }
      }
    }

    const performanceRef = await adminDb.collection("performances").add({
      ...data,
      sellerId: userId,
      sellerTeam: userTeam,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ id: performanceRef.id }, { status: 201 });
  } catch (error) {
    console.error("공연 등록 실패:", error);
    return NextResponse.json(
      { error: "공연 등록에 실패했습니다." },
      { status: 500 }
    );
  }
}
