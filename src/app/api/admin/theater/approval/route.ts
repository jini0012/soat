import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminStorage } from "@/app/api/firebaseAdmin";
import NextCrypto from "next-crypto";
import { NewTheaterAdmin } from "@/types/admin";

const SECRET_KEY = process.env.NEXT_CRYPTO_SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("NEXT_CRYPTO_SECRET_KEY 환경 변수가 설정되지 않았습니다.");
}

const crypto = new NextCrypto(SECRET_KEY);

export async function getTheaterWaitingList() {
  try {
    const waitingTheatersDoc = await adminDb
      .collection("sellerUsers")
      .where("isApproval", "==", false)
      .get();

    const waitingTheaters = waitingTheatersDoc.docs.map((doc) => doc.data());

    // 계좌 정보 암호화 해제
    const decryptedWaitingTheaters = await Promise.all(
      waitingTheaters.map(async (theater) => {
        const decryptedTheater = { ...theater };
        decryptedTheater.bankAccount.accountNum = await crypto.decrypt(
          decryptedTheater.bankAccount.accountNum
        );
        return decryptedTheater;
      })
    );

    return decryptedWaitingTheaters as NewTheaterAdmin[];
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Admin 권한 개발 후 주석 해제

// export async function GET(request: NextRequest) {
//   const waitingTheaters = await getTheaterWaitingList();

//   if (!waitingTheaters) {
//     return NextResponse.json(
//       { error: "극장 목록을 불러오는 데 실패했습니다." },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json(waitingTheaters);
// }
