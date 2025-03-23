import { NextResponse } from "next/server";
import { adminDb } from "@/app/api/firebaseAdmin";
import { PerformanceData } from "@/app/api/performance/route";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title || title.trim() === "") {
    return NextResponse.json(
      { message: "검색 정보를 가져올 수 없습니다." },
      { status: 400 }
    );
  }

  try {
    const performancesRef = adminDb.collection("performances");

    const snapshot = await performancesRef
      .where("title", ">=", title)
      .where("title", "<=", title + "\uf8ff")
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        { message: "검색 결과가 없습니다." },
        { status: 404 }
      );
    }

    const performances: PerformanceData[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as PerformanceData[];
    return NextResponse.json(performances);
  } catch (error) {
    console.error("검색 오류 :", error);
    return NextResponse.json(
      { message: "검색 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
