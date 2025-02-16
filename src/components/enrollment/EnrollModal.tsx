"use client";
import React from "react";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";
import { EnrollModalProps } from "@/types/enrollment";

export default function EnrollModal({ title, selectedDate }: EnrollModalProps) {
  return (
    <>
      <h3 className="sr-only">공연 등록하기</h3>
      <TextInput label="공연명" value={title} readOnly />
      <TextInput label="공연날짜" value={selectedDate} readOnly />
      <TextInput label="공연시간" value={""} />
      <Button className="ml-auto mt-4" type="button">
        추가
      </Button>
      <TextInput label="캐스팅" value={""} />

      <footer className="flex justify-between mt-4">
        <Button type="button">취소</Button>
        <Button type="button">등록</Button>
      </footer>
    </>
  );
}
