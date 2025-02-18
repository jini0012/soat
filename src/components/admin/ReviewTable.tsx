"use client";
import { useState } from "react";
import { Review } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import ReviewForm from "./ReviewForm";

export default function ReviewTable({
  data,
}: {
  data: Review[]; //data의 타입 선언 - 배열로 반환
}) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null); // 클릭된 리뷰 정보 상태
  const [reviewRadioState, setReviewRadioState] = useState<string>(""); // 한줄평 상태

  const headers = ["공연명", "작성자", "작성일", "신고여부"]; //테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Review;
  } = {
    공연명: "title", // 한글 헤더와 실제 데이터 필드명 매핑
    작성자: "reviewer",
    작성일: "reviewDate",
    신고여부: "reportedStatus",
  };

  const handleRowClick = (review: Review) => {
    setSelectedReview(review); // 클릭된 리뷰를 상태에 저장
  };

  const handleReviewRadioChange = (value: string) => {
    setReviewRadioState(value); // 라디오 버튼 상태 변경
  };

  const handleApply = () => {
    console.log("상태 적용:", reviewRadioState);
    // 상태 변경 적용 로직을 여기에서 처리
  };

  return (
    <div>
      <table className="w-full table-fixed border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.length > 0 ? (
            data.map((review, index) => (
              <TableRow
                key={index}
                rowData={review}
                headers={headers}
                fieldMapping={fieldMapping} // 필드 매핑 전달
                onClick={() => handleRowClick(review)} // 테이블 행 클릭 시 리뷰 정보 상태에 저장
              />
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-1">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedReview && (
        <ReviewForm
          review={selectedReview}
          reviewRadioOptions={[
            { value: "표시", label: "표시" },
            { value: "숨김", label: "숨김" },
          ]}
          reviewRadioState={reviewRadioState}
          onReviewRadioChange={handleReviewRadioChange}
          onClose={() => setSelectedReview(null)}
          onApply={handleApply}
        />
      )}
    </div>
  );
}
