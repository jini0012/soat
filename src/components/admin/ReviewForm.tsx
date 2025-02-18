"use client";
import { useRef, useEffect } from "react";
import { Review } from "@/types/admin";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";

export default function ReviewForm({
  review,
  reviewRadioOptions,
  reviewRadioState = "표시", // 기본값 설정
  onReviewRadioChange,
  onClose,
  onApply,
}: {
  review: Review;
  reviewRadioOptions: { value: string; label: string }[];
  reviewRadioState: string;
  onReviewRadioChange: (value: string) => void;
  onClose: () => void;
  onApply: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="w-[400px] h-[65%] max-h-[560px] p-4"
      onClose={onClose}
    >
      <div className="relative flex justify-center w-full">
        <h2 className="font-semibold text-center">한줄평 정보</h2>
        <CloseButton
          onClick={() => {
            dialogRef.current?.close();
          }}
          className="absolute right-0 top-0"
        />
      </div>

      {/* 리뷰 정보 내용 */}
      <section className="mt-4 text-xs">
        <h3 className="sr-only">한줄평 정보</h3>
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {[
            { label: "공연명", value: review.title },
            { label: "팀명", value: "-" },
            { label: "한줄평 작성자", value: review.reviewer },
            { label: "작성일", value: review.reviewDate },
            {
              label: "신고여부",
              value: review.reportedStatus ? (
                <div className="flex items-center gap-x-2">
                  <span>신고됨</span>
                  <Button
                    className="h-[20px] text-[9px] flex items-center"
                    size="small"
                    onClick={() => alert("상세보기 클릭")}
                  >
                    상세보기
                  </Button>
                </div>
              ) : (
                "정상"
              ),
            },
          ].map(({ label, value }, index) => (
            <div className="flex w-full items-center" key={index}>
              <dt className="mr-2 w-[80px]">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300">
          한줄평 내용
        </h3>
        <div className="w-full bg-gray-200 p-2 rounded-sm text-xs">
          한줄평 내용을 담을 거예요
        </div>
      </section>

      <section className="mt-5">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300">
          한줄평 상태
        </h3>
        <Radio
          className="text-xs mt-1"
          checked={reviewRadioState}
          onChange={onReviewRadioChange}
          items={reviewRadioOptions}
        />
        <p className="text-[10px] text-gray-500 font-light mt-2 mb-4">
          (현재 상태 : <span>{reviewRadioState}</span>)
        </p>
        <Button highlight size="small" onClick={onApply}>
          상태 변경 적용
        </Button>
      </section>
    </dialog>
  );
}
