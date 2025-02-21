import { TextInput } from "@/components/controls/Inputs";
import React from "react";
import { EnrollFormItemsProps } from "../../types/enrollment";
import { Button } from "../controls/Button";

export default function EnrollFormItemsUI({
  type,
  title,
  category,
  bookingStartDate,
  location,
  onChange,
  handleOnClickType,
}: EnrollFormItemsProps) {
  return (
    <>
      <div className="flex gap-4">
        <Button
          highlight={type === "regular"}
          type="button"
          onClick={() => handleOnClickType("regular")}
        >
          정기공연
        </Button>
        <Button
          highlight={type === "irregular"}
          type="button"
          onClick={() => handleOnClickType("irregular")}
        >
          비정기공연
        </Button>
      </div>

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
