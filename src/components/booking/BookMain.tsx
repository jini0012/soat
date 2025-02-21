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
            aisles: [2],
          },
          B: {
            seats: 10,
            aisles: [2],
          },
          C: {
            seats: 10,
            aisles: [2],
          },
          D: {
            seats: 10,
            aisles: [2],
          },
          E: {
            seats: 10,
            aisles: [2],
          },
        },
        totalSeats: 50,
        performanceName: "SCREEN 1",
        lastModified: "2025-02-20T11:09:37.088Z",
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
