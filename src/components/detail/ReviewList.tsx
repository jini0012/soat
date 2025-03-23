"use client";
import React, { useState, useEffect } from "react";
import DetailPost from "./DetailPost";
import { useParams } from "next/navigation";

// API로부터 가져올 리뷰 데이터 타입 정의
interface ReviewData {
  id: string;
  ratings: number;
  date: string;
  username: string;
  content: string;
  likeCount: number;
  isLiked?: boolean;
  isUserReview?: boolean; // 현재 사용자가 작성한 리뷰인지
}

export default function ReviewList() {
  const params = useParams();
  const performId = params.performId;

  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isReviewAlign, setReviewAlign] = useState("LASTEST");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteStatus, setDeleteStatus] = useState<{
    loading: boolean;
    error: string;
  }>({ loading: false, error: "" });

  // 리뷰 데이터 가져오기
  const fetchReviews = async () => {
    if (!performId) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/reviews?performanceId=${performId}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "리뷰를 불러오는데 실패했습니다.");
      }

      const data = await response.json();
      setReviews(data.reviews || []);
    } catch (err) {
      console.error("리뷰 로딩 중 오류:", err);
      setError("리뷰를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [performId]);

  // 정렬 기능
  useEffect(() => {
    if (reviews.length === 0) return;

    const sortedReviews = [...reviews];

    if (isReviewAlign === "LASTEST") {
      sortedReviews.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (isReviewAlign === "RATING") {
      sortedReviews.sort((a, b) => b.ratings - a.ratings);
    } else if (isReviewAlign === "EMPATHY") {
      sortedReviews.sort((a, b) => b.likeCount - a.likeCount);
    }

    setReviews(sortedReviews);
  }, [isReviewAlign]);

  // 좋아요 처리 핸들러
  const handleLike = async (reviewId: string) => {
    try {
      // 현재 리뷰 찾기
      const reviewIndex = reviews.findIndex((r) => r.id === reviewId);
      if (reviewIndex === -1) return;

      const review = reviews[reviewIndex];
      const newIsLiked = !review.isLiked;

      // 낙관적 업데이트 (UI 먼저 변경)
      const updatedReviews = [...reviews];
      updatedReviews[reviewIndex] = {
        ...review,
        isLiked: newIsLiked,
        likeCount: newIsLiked
          ? review.likeCount + 1
          : Math.max(0, review.likeCount - 1),
      };

      setReviews(updatedReviews);

      // API 호출
      const response = await fetch("/api/reviews", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewId: reviewId,
          action: newIsLiked ? "like" : "unlike",
        }),
      });

      if (!response.ok) {
        setReviews(reviews); // 원래 상태로 복원
        console.error("좋아요 처리 실패");
        return;
      }
    } catch (error) {
      console.error("좋아요 처리 오류:", error);
      setReviews(reviews); // 오류 시 원래 상태로 복원
    }
  };

  // 리뷰 삭제 핸들러
  const handleDelete = async (reviewId: string) => {
    if (!confirm("리뷰를 삭제하시겠습니까?")) {
      return;
    }

    setDeleteStatus({ loading: true, error: "" });

    try {
      const response = await fetch(`/api/reviews?reviewId=${reviewId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "리뷰 삭제에 실패했습니다.");
      }

      // 삭제 성공 시 리뷰 목록 갱신
      fetchReviews();
      setDeleteStatus({ loading: false, error: "" });
    } catch (error) {
      console.error("리뷰 삭제 오류:", error);
      setDeleteStatus({
        loading: false,
        error: error instanceof Error ? error.message : "리뷰 삭제 오류",
      });
    }
  };

  // 로딩 중 표시
  if (loading) {
    return <div className="text-center py-10">리뷰를 불러오는 중...</div>;
  }

  // 에러 표시
  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  // 리뷰가 없는 경우
  if (reviews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        아직 작성된 리뷰가 없습니다.
      </div>
    );
  }

  return (
    <div className="mt-[50px]">
      {deleteStatus.error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          {deleteStatus.error}
        </div>
      )}

      <ul className="flex gap-[20px] justify-self-end mb-8">
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
          평점순
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
          공감순
        </li>
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
          최신글순
        </li>
      </ul>
      <section className="flex flex-col gap-y-3 mb-20">
        <h2 className="sr-only">한줄평 목록</h2>
        {reviews.map((data) => (
          <div key={data.id} className="relative">
            <DetailPost
              id={data.id}
              ratings={data.ratings}
              date={data.date}
              author={data.username}
              content={data.content}
              likeCount={data.likeCount}
              isLiked={data.isLiked || false}
              onLike={handleLike}
            />
            {/* 삭제 버튼 - 본인이 작성한 리뷰에만 표시 */}
            {data.isUserReview && (
              <button
                onClick={() => handleDelete(data.id)}
                className="absolute bottom-3 right-10 p-2 text-gray-500 hover:text-red-500"
                aria-label="리뷰 삭제"
                disabled={deleteStatus.loading}
              >
                삭제
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
