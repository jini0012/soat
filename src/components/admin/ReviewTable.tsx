"use client";
import { useState } from "react";
import { Review } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import ReviewForm from "./ReviewForm";

export default function ReviewTable({ data }: { data: Review[] }) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [reviewRadioState, setReviewRadioState] = useState<string>("표시");

  const headers = ["공연명", "작성자", "작성일", "신고여부"];

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Review;
  } = {
    공연명: "title",
    작성자: "reviewer",
    작성일: "reviewDate",
    신고여부: "reportedStatus",
  };

  const handleRowClick = (review: Review) => {
    setSelectedReview(review);
  };

  const handleReviewRadioChange = (value: string) => {
    setReviewRadioState(value);
  };

  const handleApply = () => {
    console.log("상태 적용:", reviewRadioState);
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
          onClose={() => setSelectedReview(null)}
          onApply={handleApply}
        />
      )}
    </>
  );
}
