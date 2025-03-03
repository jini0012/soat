"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import EnrollPerformance from "./EnrollPerformance";
import EnrollSeat from "./EnrollSeat";
import { EnrollStep } from "@/types/enrollment";

export default function EnrollMains() {
  const step = useSelector((state: RootState) => state.enroll.step);
  return (
    <>
      {step === EnrollStep.EnrollPerformance && <EnrollPerformance />}
      {step === EnrollStep.EnrollSeats && <EnrollSeat />}
    </>
  );
}
