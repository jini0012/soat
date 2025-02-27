import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "../../firebaseAdmin";
import { hash } from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { userType, email, password } = formData;

    // 기본적인 공통 필수값 검증
    if (!email || !password || !userType) {
      return NextResponse.json(
        { error: "필수 입력값이 누락되었습니다." },
        { status: 400 }
      );
    }

    // 사용자 타입별 필수값 검증
    if (userType === "seller") {
      const { teamName, managerName, phoneNumber } = formData;
      if (!teamName || !managerName || !phoneNumber) {
        return NextResponse.json(
          { error: "판매자 정보 중 필수 입력값이 누락되었습니다." },
          { status: 400 }
        );
      }
    } else {
      const { username, phoneNumber } = formData;
      if (!username || !phoneNumber) {
        return NextResponse.json(
          { error: "사용자 정보 중 필수 입력값이 누락되었습니다." },
          { status: 400 }
        );
      }
    }

    // 회원 유형에 따른 컬렉션 결정
    const collectionName = userType === "seller" ? "sellerUsers" : "buyerUsers";

    // 해당 컬렉션 내에서만 이메일 중복 확인
    const userSnapshot = await adminDb
      .collection(collectionName)
      .where("email", "==", email)
      .get();

    if (!userSnapshot.empty) {
      return NextResponse.json(
        { error: "이미 가입된 이메일입니다." },
        { status: 409 }
      );
    }

    // 이메일 인증 확인
    const emailVerificationSnapshot = await adminDb
      .collection("emailVerification")
      .doc(email)
      .get();

    if (!emailVerificationSnapshot.exists) {
      return NextResponse.json(
        { error: "이메일 인증이 필요합니다." },
        { status: 403 }
      );
    }

    const emailVerificationData = emailVerificationSnapshot.data();

    if (!emailVerificationData) {
      return NextResponse.json(
        { error: "이메일 인증 데이터가 없습니다." },
        { status: 403 }
      );
    }

    if (emailVerificationData.status !== "verified") {
      return NextResponse.json(
        { error: "이메일 인증이 완료되지 않았습니다." },
        { status: 403 }
      );
    } else if (
      new Date(emailVerificationData.createdAt) <
      new Date(Date.now() - 1000 * 60 * 60)
    ) {
      // 1시간 이내에 인증 완료되지 않은 경우
      return NextResponse.json(
        { error: "이메일 인증 시간이 만료되었습니다." },
        { status: 403 }
      );
    } else {
      // 인증 확인 완료
      // 이메일 인증 데이터 삭제
      await adminDb.collection("emailVerification").doc(email).delete();
    }

    // 비밀번호 해싱
    const hashedPassword = await hash(password, 12);

    // 기본 사용자 데이터
    const { userType: _userType, ...restFormData } = formData;

    const userData = {
      ...restFormData,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const userRef = await adminDb.collection(collectionName).add(userData);

    // 응답에서 비밀번호 제외
    const { password: _, ...userDataWithoutPassword } = userData;

    return NextResponse.json(
      {
        message: "회원가입이 완료되었습니다.",
        userId: userRef.id,
        user: userDataWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("회원가입 오류:", error);
    return NextResponse.json(
      { error: "회원가입 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
