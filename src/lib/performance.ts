// lib/performance.ts
import { adminDb } from "@/app/api/firebaseAdmin";
import { PerformanceData } from "@/app/api/performance/route";

export async function getPerformanceById(performId: string) {
  try {
    console.log(`Fetching performance with ID: ${performId}`);
    const performRef = adminDb.collection("performances").doc(performId);
    const performDoc = await performRef.get();

    if (!performDoc.exists) {
      console.error(`Performance with ID ${performId} does not exist`);
      return null;
    }

    const performData = performDoc.data() as PerformanceData;

    return performData;
  } catch (error) {
    console.error(`Error fetching performance with ID ${performId}:`, error);
    return null;
  }
}
