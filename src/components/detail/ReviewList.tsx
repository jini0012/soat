"use client";
import React, { useState, useEffect } from "react";
import DetailPost from "./DetailPost";

const demoData = [
  {
    id: "review-001",
    ratings: 5,
    date: "2021-10-10",
    author: "집나온쿼카",
    content: "사장님이 맛있고 음식이 친절해요!",
    likeCount: 12,
    isLiked: false,
  },
  {
    id: "review-002",
    ratings: 4,
    date: "2022-10-10",
    author: "스테이크러버지니",
    content:
      "사장님 요리보단 바이올린만 하셔야 할듯....오히려 브로맨스가 제일 재밌었음 주인님 케미 미쳐요!",
    likeCount: 23,
    isLiked: false,
  },
  {
    id: "review-003",
    ratings: 4,
    date: "2024-10-10",
    author: "카리나는신이에요!",
    content: "귤에붙어있는 하얀거 이름은 귤락입니다!",
    likeCount: 23,
    isLiked: false,
  },
  {
    id: "review-004",
    ratings: 5,
    date: "2025-10-10",
    author: "이멤버리멤버",
    content: "쏘앳 좋아요!",
    likeCount: 1632,
    isLiked: true,
  },
];

export default function ReviewList() {
  const [reviews, setReviews] = useState(demoData);
  const [isReviewAlign, setReviewAlign] = useState("LASTEST");

  useEffect(() => {
    if (isReviewAlign === "LASTEST") {
      setReviews(
        [...demoData].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    } else if (isReviewAlign === "RATING") {
      setReviews([...demoData].sort((a, b) => b.ratings - a.ratings));
    } else if (isReviewAlign === "EMPATHY") {
      setReviews([...demoData].sort((a, b) => b.likeCount - a.likeCount));
    }
  }, [isReviewAlign]);
  return (
    <div className="mt-[50px]">
      <ul className="flex gap-[20px] justify-self-end mb-8">
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
      <section className="flex flex-col gap-y-3 mb-20">
        <h2 className="sr-only">한줄평 목록</h2>
        {reviews.map((data) => (
          <DetailPost
            id={data.id}
            key={data.date + data.author}
            ratings={data.ratings}
            date={data.date}
            author={data.author}
            content={data.content}
            likeCount={data.likeCount}
            isLiked={data.isLiked}
          />
        ))}
      </section>
    </div>
  );
}
