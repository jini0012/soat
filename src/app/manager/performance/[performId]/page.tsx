import PerformanceManagerDetail from "@/components/manager/PerformanceManagerDetail";
import axios from "axios";
import React from "react";
interface myPerformanceProps {
  params: { performId: string };
}

export default async function page({ params }: myPerformanceProps) {
  const API_URL = process.env.NEXTAUTH_URL;
  const res = await axios.get(`${API_URL}/api/performance/${params.performId}`);
  const performanceData = res.data.performance;
  const performanceTitle = performanceData.title;
  const performanceTimes = performanceData.performances;
  const seatData = performanceData.seats;

  return (
    <section>
      <h2>{performanceTitle}</h2>
      <PerformanceManagerDetail
        performanceTimes={performanceTimes}
        rows={seatData.rows}
        rowsConfigs={seatData.rowsConfigs}
        totalSeats={seatData.totalSeat}
        isAllAisle={seatData.isAllAisle}
      />
    </section>
  );
}
