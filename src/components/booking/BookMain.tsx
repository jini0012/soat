"use client";
import Captcha from "./Captcha";
import { useState } from "react";
import SeatSelection from "./SeatSelection";
import PurchaserInfo from "./PurchaserInfo";
import PurchaseMethod from "./PurchaseMethod";
import BookComplete from "./BookComplete";

export default function BookMain({ showId }: { showId: string }) {
  const [process, setProcess] = useState("captcha");
  const [captchaToken, setCaptchaToken] = useState("");

  return (
    <main className="p-6 w-full flex flex-col items-center gap-y-8">
      {process === "captcha" && (
        <Captcha verifyCallback={setCaptchaToken} setProcess={setProcess} />
      )}
      {process === "seat" && <SeatSelection setProcess={setProcess} />}
      {process === "purchaserInfo" && <PurchaserInfo setProcess={setProcess} />}
      {process === "purchaseMethod" && (
        <PurchaseMethod setProcess={setProcess} />
      )}
      {process === "bookComplete" && <BookComplete />}
    </main>
  );
}
