"use client";

import React from "react";
import { ReactElement } from "react";
import { focusRings } from "@/styles/constants";

// Input을 감쌀 경우 사용하는 컨테이너
function InputContainer({
  input,
  children,
  className,
}: {
  input: ReactElement;
  children: ReactElement;
  className?: string;
}) {
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-1 w-full pr-1 items-center rounded-lg border-2 overflow-hidden ${
        focusRings.container
      }`}
    >
      {input}
      {children}
    </div>
  );
}

export function TextInput({
  label,
  value,
  onChange,
  type,
  placeholder,
  className,
  align,
  children,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email" | "number" | "tel"; // 추가할 타입이 있다면 여기에 추가
  placeholder?: string;
  className?: string;
  align?: "v" | "h";
  children?: ReactElement;
}) {
  const Input = (
    <input
      className={`${
        !children ? `border-2 rounded-lg ${focusRings.default}` : "border-none"
      } px-4 py-2 flex-1 w-full focus-visible:outline-none bg-background`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      aria-label={label}
    />
  );

  if (label) {
    return (
      <label
        className={`relative whitespace-nowrap w-full flex ${
          align === "h" ? "flex-row items-center gap-x-4" : "flex-col"
        } ${className}`}
      >
        {label}
        {children ? (
          <InputContainer input={Input} children={children} />
        ) : (
          Input
        )}
      </label>
    );
  } else {
    if (children) {
      return (
        <InputContainer
          input={Input}
          children={children}
          className={className}
        />
      );
    } else {
      return Input;
    }
  }
}

export function Checkbox({
  checked,
  onChange,
  className,
  children,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`w-full flex items-center ${className}`}
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onChange(!checked)
      }
    >
      <input
        type="checkbox"
        className={`bg-cover w-4 h-4 mr-2 appearance-none bg-checkbox-unchecked checked:bg-checkbox-checked ${focusRings.default}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <>{children}</>
    </label>
  );
}
