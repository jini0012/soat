"use client";
import { useRef, useEffect, useState } from "react";
import { Performance } from "@/types/admin";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";

export default function PerformanceForm({
  performance,
  performanceRadioOptions,
  performanceRadioState,
  saleRadioOptions,
  saleRadioState,
  onSaleRadioChange,
  onPerformanceRadioChange,
  onClose,
  onApply,
}: {
  performance: Performance;
  performanceRadioOptions: { value: string; label: string }[];
  performanceRadioState: string;
  saleRadioOptions: { value: string; label: string }[];
  saleRadioState: string;
  onSaleRadioChange: (value: string) => void;
  onPerformanceRadioChange: (value: string) => void;
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
      className="w-[400px] h-[75%] max-h-[560px] p-4"
      onClose={onClose}
    >
      <div className="relative flex justify-center w-full">
        <h2 className="font-semibold text-center">공연 정보</h2>
        <CloseButton
          onClick={() => {
            dialogRef.current?.close();
          }}
          className="absolute right-0 top-0"
        />
      </div>

      {/* 공연 정보 내용 */}
      <section className="mt-4 text-xs">
        <h3 className="sr-only">공연정보</h3>
        <dl className="flex flex-wrap gap-x-1 gap-y-1">
          {[
            { label: "공연명", value: performance.title },
            { label: "카테고리", value: performance.category },
            { label: "팀명", value: performance.team },
            { label: "관리자명", value: "-" },
            { label: "등록일", value: "-" },
            {
              label: "신고여부",
              value: performance.reportedStatus ? (
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
        </dl>
      </section>
      <section className="mt-5">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300">
          판매 상태
        </h3>
        <Radio
          className="text-xs mt-1"
          checked={saleRadioState}
          onChange={onSaleRadioChange}
          items={saleRadioOptions}
        />
        <p className="text-[10px] text-gray-500 font-light mt-2 mb-4">
          (현재 상태 : <span>{saleRadioState}</span>)
        </p>
        <Button highlight size="small" onClick={onApply}>
          상태 변경 적용
        </Button>
      </section>
      <section className="mt-5">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300">
          공연 표시 여부
        </h3>
        <Radio
          className="text-xs mt-1"
          checked={performanceRadioState}
          onChange={onPerformanceRadioChange}
          items={performanceRadioOptions}
        />
        <p className="text-[10px] text-gray-500 font-light mt-2 mb-4">
          (현재 상태 : <span>{performanceRadioState}</span>)
        </p>
        <Button highlight size="small" onClick={onApply}>
          상태 변경 적용
        </Button>
      </section>
    </dialog>
  );
}
