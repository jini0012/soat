"use client";
import { Button } from "@/components/controls/Button";
import { resetDirty, setStep } from "@/redux/slices/enrollSlice";
import { RootState } from "@/redux/store";
import { EnrollStep } from "@/types/enrollment";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function EnrollFooter() {
  const step = useSelector((state: RootState) => state.enroll.step);
  const dispatch = useDispatch();
  const onClickTempStore = () => {
    dispatch(resetDirty());
  };

  const handleOnClickSeatButton = () => {
    dispatch(setStep(EnrollStep.EnrollSeats));
  };

  const handleOnClickPrevButton = () => {
    dispatch(setStep(EnrollStep.EnrollPerformance));
  };
  return (
    <footer className="fixed left-0 bottom-0 bg-flesh-200 w-full h-[120px] flex justify-end items-center pr-[60px] gap-14">
      <Button onClick={onClickTempStore} type="button">
        임시 저장
      </Button>
      {step === EnrollStep.EnrollSeats && (
        <Button type="button" onClick={handleOnClickPrevButton}>
          이전으로
        </Button>
      )}
      {step === EnrollStep.EnrollPerformance ? (
        <Button type="button" onClick={handleOnClickSeatButton}>
          좌석 배치하기
        </Button>
      ) : (
        <Button type="button">공연 등록</Button>
      )}
    </footer>
  );
}
