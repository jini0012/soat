"use client";
import React, { useState } from "react";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";
import { EnrollModalProps } from "@/types/enrollment";

export default function EnrollModal({
  title,
  selectedDate,
  onClose,
  onConfirm,
}: EnrollModalProps) {
  const [time, setTime] = useState<string>("");
  const [casting, setCasting] = useState<string[]>([""]);

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
    if (casting.length <= 1) {
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

  return (
    <>
      <h3 className="sr-only">공연 등록하기</h3>
      <TextInput label="공연명" value={title} readOnly />
      <TextInput label="공연날짜" value={selectedDate} readOnly />
      <TextInput label="공연시간" type="time" value={time} onChange={setTime} />
      <div className="flex mt-4 gap-4 justify-end">
        <Button
          className=""
          type="button"
          onClick={delCasting}
          disabled={casting.length <= 1}
        >
          제거
        </Button>
        <Button type="button" onClick={addCasting}>
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
        <Button type="button" onClick={handleConfirm}>
          등록
        </Button>
      </footer>
    </>
  );
}
