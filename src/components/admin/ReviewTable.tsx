"use client";
import { useState } from "react";
import { Review } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import ReviewForm from "./ReviewForm";

export default function ReviewTable({ data }: { data: Review[] }) {
  const headers = ["공연명", "작성자", "작성일", "신고여부"];

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Review;
  } = {
    공연명: "title",
    작성자: "reviewer",
    작성일: "reviewDate",
    신고여부: "reportedStatus",
  };

  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [reviewRadioStates, setReviewRadioStates] = useState<
    Record<string, string>
  >({}); // 모든 한줄평의 표시 상태
  const [reviewRadioState, setReviewRadioState] = useState<string>("표시"); // 선택된 한줄평의 표시 상태

  // Apply(상태변경적용 버튼)를 눌렀는지 여부를 추적
  const [applied, setApplied] = useState<boolean>(false);

  const handleRowClick = (review: Review) => {
    setSelectedReview(review);
    // 선택된 한줄평에 대한 정보를 가져오기
    setReviewRadioState(reviewRadioStates[review.title] || "표시");
    // 새로운 한줄평을 클릭할 때마다 applied 상태 초기화
    setApplied(false);
  };

  const handleReviewRadioChange = (value: string) => {
    setReviewRadioState(value);
  };

  const handleClose = () => {
    if (!applied && selectedReview) {
      setReviewRadioState(reviewRadioStates[selectedReview.title] || "표시");
    }

    setApplied(false);
    setSelectedReview(null); //선택했던 리뷰를 모달이 닫힌 후에는 다시 초기화. 다른 리뷰를 다시 선택할 수 있도록 함
  };

  const handleApply = () => {
    if (selectedReview) {
      // Apply 버튼을 누르면 확정된 상태 업데이트
      setReviewRadioStates((prevStates) => ({
        ...prevStates,
        [selectedReview.title]: reviewRadioState,
      }));

      // applied 플래그를 true로 설정
      setApplied(true);

      console.log(`상태 변경: ${reviewRadioState}`);
      // API 연동 필요
    }
  };

  return (
    <>
      <div className="relative">
        <table className="w-full table-fixed border-collapse">
          <TableHeader headers={headers} />
          <tbody>
            {data.length > 0 ? (
              data.map((review, index) => (
                <TableRow
                  key={index}
                  rowData={review}
                  headers={headers}
                  fieldMapping={fieldMapping}
                  onClick={() => handleRowClick(review)}
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
      </div>

      {selectedReview && (
        <ReviewForm
          review={selectedReview}
          reviewRadioOptions={[
            { value: "표시", label: "표시" },
            { value: "숨김", label: "숨김" },
          ]}
          reviewRadioState={reviewRadioState}
          onReviewRadioChange={handleReviewRadioChange}
          onClose={handleClose}
          onApply={handleApply}
        />
      )}
    </>
  );
}
