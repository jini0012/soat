import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { adminDb } from "@/app/api/firebaseAdmin";

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // 인증 확인
    if (!session || !session.user || session.user.userType !== "seller") {
      return NextResponse.json(
        { error: "판매자 인증이 필요합니다." },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const { teamName, managerName } = await request.json();

    // 필수 항목 확인
    if (!teamName || !managerName) {
      return NextResponse.json(
        { error: "팀명과 관리자명을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const sellerRef = adminDb.collection("sellerUsers").doc(userId);
    const sellerDoc = await sellerRef.get();

    if (!sellerDoc.exists) {
      return NextResponse.json({ error: "사용자 정보 없음" }, { status: 404 });
    }

    // 업데이트
    await sellerRef.update({
      teamName,
      managerName,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "정보가 성공적으로 변경되었습니다." });
  } catch (error) {
    console.error("팀명/관리자명 수정 오류:", error);
    return NextResponse.json(
      { error: "정보 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
