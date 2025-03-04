"use client";
import React from "react";
import { focusRings } from "@/styles/constants";
import { SelectInputProps, SelectProps } from "@/types/controls";

// SelectInput 컴포넌트 - select 엘리먼트만을 담당
function SelectInput({
  value,
  onChange,
  options,
  className,
}: SelectInputProps) {
  return (
    <select
      className={`border-2 bg-chevron-down-dark dark:bg-chevron-down-light bg-no-repeat bg-[right_0.5rem_center] bg-[length:0.5rem_0.25rem] rounded-lg px-4 py-2 w-full appearance-none focus-visible:outline-none bg-background ${className} ${focusRings.default}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Select 컴포넌트 - 레이블을 포함한 전체 구조를 담당
export function Select({
  label,
  value,
  onChange,
  options,
  className,
  align,
}: SelectProps) {
  if (!label) {
    return (
      <SelectInput
        value={value}
        onChange={onChange}
        options={options}
        className={className}
      />
    );
  }

  return (
    <label
      className={`w-full ${className} ${
        align === "v"
          ? "flex flex-col"
          : "flex items-center gap-x-4 whitespace-nowrap"
      }`}
    >
      {label}
      <SelectInput
        value={value}
        onChange={onChange}
        options={options}
        className={className}
      />
    </label>
  );
}

export function JoinSelect({
  label,
  value,
  onChange,
  options,
  className,
}: SelectProps) {
  return (
    <label
      className={`text-sm flex border-b sm:mb-[5px] gap-3 whitespace-nowrap w-full focus-within:border-black sm:text-base ${
        className ? className : ""
      } `}
    >
      {label}
      <select
        className={`w-full outline-none`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
