import React from "react";
import { PerformanceData } from "@/app/api/performance/route";

export default function ShowDetailSection({
  performanceData,
}: {
  performanceData: PerformanceData;
}) {
  const content = performanceData.content || "";

  return (
    <div
      className="px-[10px] mb-[50px] prose"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
