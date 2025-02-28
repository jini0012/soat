// lib/performance.ts
import { adminDb } from "@/app/api/firebaseAdmin";

export async function getPerformanceById(performId: string) {
  try {
    console.log(`Fetching performance with ID: ${performId}`);
    const performRef = adminDb.collection("performances").doc(performId);
    const performDoc = await performRef.get();

    if (!performDoc.exists) {
      console.error(`Performance with ID ${performId} does not exist`);
      return null;
    }

    const performData = performDoc.data();

    // 공연 정보에서 민감 정보 제외
    // 주의! 데이터에 민감 정보가 추가될 경우 여기에도 추가해야 함
    const filteredPerformData = {
      ...performData,
      account: undefined,
    };

    return filteredPerformData;
  } catch (error) {
    console.error(`Error fetching performance with ID ${performId}:`, error);
    return null;
  }
}
