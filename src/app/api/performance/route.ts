// /api/performance/route.ts

import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/app/api/firebaseAdmin";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const order = searchParams.get("order") || "createdAt";

  const performancesSnapshot = await adminDb
    .collection("performances")
    .orderBy(order)
    .get();

  const performances = performancesSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      account: undefined,
    };
  });

  return NextResponse.json(performances);
}
