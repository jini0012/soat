"use client";
import { Button } from "@/components/controls/Button";
import { resetDirty, setStep } from "@/redux/slices/enrollSlice";
import { RootState } from "@/redux/store";
import { EnrollStep } from "@/types/enrollment";
import axios from "axios";
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

  const enrollResult = useSelector((state: RootState) => state.enroll);
  const seatResult = useSelector((state: RootState) => state.seat);
  const result = { ...enrollResult, seats: seatResult };

  const handleSubmit = async () => {
    console.log(result);

    try {
      const response = await axios.put("/api/enrollment", result);

      if (response.status === 201) {
        alert("공연 등록이 완료되었습니다.");
        dispatch(setStep(EnrollStep.EnrollPerformance));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        alert(error.response?.data.error);
      }
    }
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
        <Button type="button" onClick={handleSubmit}>
          공연 등록
        </Button>
      )}
    </footer>
  );
}
