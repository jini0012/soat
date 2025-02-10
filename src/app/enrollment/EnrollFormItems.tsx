"use client";
import { TextInput } from "@/components/controls/Inputs";
import React from "react";
import { EnrollFormItemsProps } from "./modal";

export default function EnrollFormItems({
  type,
  title,
  category,
  bookingStartDate,
  location,
  onChange,
}: EnrollFormItemsProps) {
  return (
    <>
      <TextInput
        label="공연유형"
        value={type}
        onChange={(value) => onChange("type", value)}
      />
      <TextInput
        label="공연명"
        value={title}
        onChange={(value) => onChange("title", value)}
      />
      <TextInput
        label="카테고리"
        value={category}
        onChange={(value) => onChange("category", value)}
      />
      <TextInput
        label="예매시작일"
        type="date"
        value={bookingStartDate}
        onChange={(value) => onChange("bookingStartDate", value)}
      />
      <TextInput
        label="위치"
        value={location}
        onChange={(value) => onChange("location", value)}
      />
    </>
  );
}
