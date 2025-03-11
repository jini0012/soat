import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ShowInfoSection from "@/components/detail/ShowInfoSection";
import ShowDetailSection from "@/components/detail/ShowDetailSection";
import { getPerformanceById } from "@/lib/performance";

interface PageParams {
  params: {
    performId: string;
  };
}

export default async function PerformanceDetailPage({ params }: PageParams) {
  const performId = params.performId;
  const performanceData = await getPerformanceById(performId);

  if (!performanceData) {
    return (
      <>
        <Header />
        <main className="px-[20px] md:px-24">
          <div className="py-12 text-center">
            <h2 className="text-2xl font-bold">공연 정보를 찾을 수 없습니다</h2>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const performanceDataString = JSON.stringify(
    performanceData,
    (key, value) => {
      if (key === "createdAt" || key === "updatedAt") {
        return value?.toDate?.() ? value.toDate().toISOString() : value;
      }
      return value;
    }
  );

  return (
    <>
      <Header />
      <main className="px-[20px] md:px-24">
        <ShowInfoSection performanceDataString={performanceDataString} />
        <ShowDetailSection performanceDataString={performanceDataString} />
      </main>
      <Footer />
    </>
  );
}
