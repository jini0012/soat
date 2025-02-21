"use client";
import React, { useState } from "react";
import DetailPost from "./DetailPost";

const demoData = [
  {
    ratings: 5,
    date: "2021-10-10",
    author: "집나온쿼카",
    content: "사장님이 맛있고 음식이 친절해요!",
  },
  {
    ratings: 4,
    date: "2021-10-10",
    author: "스테이크러버지니",
    content:
      "사장님 요리보단 바이올린만 하셔야 할듯....오히려 브로맨스가 제일 재밌었음 주인님 케미 미쳐요!",
  },
];

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
      <section className="flex flex-col gap-y-3">
        <h2 className="sr-only">한줄평 목록</h2>
        {demoData.map((data) => (
          <DetailPost
            key={data.date + data.author}
            ratings={data.ratings}
            date={data.date}
            author={data.author}
            content={data.content}
          />
        ))}
      </section>
    </div>
  );
}
