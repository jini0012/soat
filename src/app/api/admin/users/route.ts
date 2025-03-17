import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminStorage } from "@/app/api/firebaseAdmin";

export async function buyerUsersList() {
  try {
    const buyerUsers = await adminDb.collection("buyerUsers").get();
    const buyerUsersData = buyerUsers.docs.map((doc) => doc.data());

    const sensoredBuyerUsersData = buyerUsersData.map((buyerUser) => {
      return {
        ...buyerUser,
        password: undefined,
      };
    });

    return sensoredBuyerUsersData;
  } catch (error) {
    console.error(error);
    throw new Error("구매자 정보를 가져오는데 실패했습니다.");
  }
}

export async function sellerUsersList() {
  try {
    const sellerUsers = await adminDb.collection("sellerUsers").get();
    const sellerUsersData = sellerUsers.docs.map((doc) => doc.data());

    const sensoredSellerUsersData = sellerUsersData.map((sellerUser) => {
      return {
        ...sellerUser,
        password: undefined,
      };
    });

    return sensoredSellerUsersData;
  } catch (error) {
    console.error(error);
    throw new Error("판매자 정보를 가져오는데 실패했습니다.");
  }
}
