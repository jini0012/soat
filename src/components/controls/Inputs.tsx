"use client";

import React from "react";
import { ReactElement } from "react";

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
      } flex flex-1 w-full pr-1 items-center rounded-lg border-2 overflow-hidden has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-flesh-400 transition`}
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
        !children
          ? "border-2 rounded-lg focus-visible:ring-2 focus-visible:ring-flesh-400 transition"
          : "border-none"
      } px-4 py-2 flex-1 w-full focus-visible:outline-none `}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
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
