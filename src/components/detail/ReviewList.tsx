"use client";
import React, { useState } from "react";

export default function ReviewList() {
  const [isReviewAlign, setReviewAlign] = useState("LASTEST");
  return (
    <div className="mt-[50px]">
      <ul className="flex gap-[20px] justify-self-end">
        <li
          className={`text-lg cursor-pointer ${
            isReviewAlign === "LASTEST"
              ? "text-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => {
            setReviewAlign("LASTEST");
          }}
        >
          평점순
        </li>
        <li
          className={`text-lg cursor-pointer ${
            isReviewAlign === "RATING"
              ? "text-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => {
            setReviewAlign("RATING");
          }}
        >
          공감순
        </li>
        <li
          className={`text-lg cursor-pointer ${
            isReviewAlign === "EMPATHY"
              ? "text-black font-bold"
              : "text-gray-500"
          }`}
          onClick={() => {
            setReviewAlign("EMPATHY");
          }}
        >
          최신글순
        </li>
      </ul>
    </div>
  );
}
