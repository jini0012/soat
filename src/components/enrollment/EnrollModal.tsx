"use client";
import React, { useState } from "react";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";
import { EnrollModalProps } from "@/types/enrollment";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Value } from "react-calendar/dist/esm/shared/types.js";

export default function EnrollModal({
  selectedDates,
  onClose,
  onConfirm,
}: EnrollModalProps) {
  const [time, setTime] = useState<string>("");
  const [casting, setCasting] = useState<string[]>([]);
  const { title } = useSelector((state: RootState) => state.enroll);

  const addCasting = () => {
    setCasting((prev) => [...prev, ""]);
  };

  const handleChangeCasting = (value: string, index: number) => {
    setCasting((prev) => {
      const newCasting = [...prev];
      newCasting[index] = value;
      return newCasting;
    });
  };

  const delCasting = () => {
    if (casting.length < 1) {
      return;
    }
    setCasting((prev) => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (casting.some((cast) => cast.trim() === "")) {
      alert("캐스팅을 모두 작성해주세요.");
      return;
    }
    onConfirm(time, casting);
    onClose();
  };

  const generateDateRange = (startDate: Value, endDate: Value) => {
    if (!startDate && !endDate) {
      return;
    }
    const start = new Date(startDate as Date);
    const end = new Date(endDate as Date);
    const dates = [];

    while (start <= end) {
      dates.push(format(start, "yyyy-MM-dd"));
      start.setDate(start.getDate() + 1);
    }
    return dates;
  };

  const renderDates = () => {
    if (!selectedDates) {
      return;
    }

    if (Array.isArray(selectedDates)) {
      console.log("배열", selectedDates);
      const generatedDates = generateDateRange(
        selectedDates[0],
        selectedDates[1]
      );

      return generatedDates?.map((date, idx) => {
        return (
          <p
            className="bg-flesh-600 py-1 px-2 mr-2 text-background rounded-lg text-md whitespace-nowrap"
            key={idx}
          >
            {date}
          </p>
        );
      });
    }

    const date = format(new Date(selectedDates), "yyyy-MM-dd");
    return (
      <p className="bg-flesh-600 py-1 px-2 mr-2 text-background rounded-lg text-md whitespace-nowrap">
        {date}
      </p>
    );
  };

  return (
    <>
      <h3 className="sr-only">공연 등록하기</h3>
      <TextInput label="공연명" value={title} readOnly />
      <span>공연날짜</span>
      <div className="flex px-4 py-2 flex-1 w-full focus-visible:outline-none bg-background border-2 rounded-lg overflow-x-scroll">
        {renderDates()}
      </div>
      <TextInput label="공연시간" type="time" value={time} onChange={setTime} />
      <div className="flex mt-4 gap-4 justify-end ">
        <p className="mr-auto">캐스팅</p>
        <Button
          className=""
          type="button"
          onClick={delCasting}
          disabled={casting.length == 0}
        >
          제거
        </Button>
        <Button highlight type="button" onClick={addCasting}>
          추가
        </Button>
      </div>
      <section className="h-[200px] overflow-y-auto">
        {casting.map((cast, index) => (
          <TextInput
            label={`캐스팅${index + 1}`}
            key={index}
            value={cast}
            onChange={(newCasting) => handleChangeCasting(newCasting, index)}
          />
        ))}
      </section>

      <footer className="flex justify-between mt-4">
        <Button type="button" onClick={onClose}>
          취소
        </Button>
        <Button highlight type="button" onClick={handleConfirm}>
          등록
        </Button>
      </footer>
    </>
  );
}
