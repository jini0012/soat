"use client";

import Captcha from "./Captcha";
import { useEffect, useState } from "react";
import SeatSelection from "./SeatSelection";
import PurchaserInfo from "./PurchaserInfo";
import PurchaseMethod from "./PurchaseMethod";
import BookComplete from "./BookComplete";
import type { TheaterLayoutData } from "@/components/seats/TheaterLayoutManager";

export default function BookMain({ showId }: { showId: string }) {
  const [process, setProcess] = useState("captcha");
  const [captchaToken, setCaptchaToken] = useState("");
  const [layoutData, setLayoutData] = useState({} as TheaterLayoutData);
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  useEffect(() => {
    // 테스트용 레이아웃 데이터
    if (showId === "test") {
      setLayoutData({
        rows: 5,
        rowConfigs: {
          A: {
            seats: 10,
            aisles: [5],
          },
          B: {
            seats: 10,
            aisles: [5],
          },
          C: {
            seats: 8,
            aisles: [0, 5],
          },
          D: {
            seats: 8,
            aisles: [0, 5],
          },
          E: {
            seats: 8,
            aisles: [0, 5],
          },
        },
        totalSeats: 44,
        performanceName: "SCREEN 1",
        lastModified: "2025-02-21T06:46:30.316Z",
      });
    }
  }, []);

  return (
    <main className="p-6 w-full flex flex-col items-center gap-y-8">
      {process === "captcha" && (
        <Captcha
          verifyCallback={setCaptchaToken}
          setProcess={setProcess}
          nextProcess="seat"
        />
      )}
      {process === "seat" && (
        <SeatSelection
          setProcess={setProcess}
          layoutData={layoutData}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      )}
      {process === "purchaserInfo" && <PurchaserInfo setProcess={setProcess} />}
      {process === "purchaseMethod" && (
        <PurchaseMethod setProcess={setProcess} />
      )}
      {process === "bookComplete" && <BookComplete />}
    </main>
  );
}
