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
  ariaLabel,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email" | "number" | "tel"; // 추가할 타입이 있다면 여기에 추가
  placeholder?: string;
  className?: string;
  align?: "v" | "h";
  children?: ReactElement;
  ariaLabel?: string;
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
      aria-label={label || ariaLabel}
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

export function JoinInput({
  label,
  placeholder,
  className,
  validation,
  children,
  invalid,
  disabled,
  value,
  onChange,
  type,
}: {
  label: string;
  placeholder?: string;
  className?: string;
  validation?: string;
  children?: ReactElement;
  invalid?: boolean;
  disabled?: boolean;
  value?: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email" | "number" | "tel";
}) {
  if (invalid) {
    className = "border-flesh-400";
  } else if (!!value) {
    className = "border-black";
  } else {
    className = "border-gray-300";
  }

  return (
    <>
      <fieldset>
        <label
          className={` flex mb-[5px] gap-3 border-b whitespace-nowrap w-full items-center focus-within:border-black ${
            className ? className : ""
          } `}
        >
          {label}
          <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            className="focus:outline-none w-full placeholder:text-sm"
            disabled={disabled}
            aria-label={label}
          />
          {children}
        </label>
        {/* invalid 문구가 없을때에도 공백을 넣어 빈 공간 유지 */}
        <span className="text-flesh-400 text-xs">
          {invalid ? validation : "\u00A0"}
        </span>
      </fieldset>
    </>
  );
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

export function Radio({
  checked,
  onChange,
  className,
  items,
  align,
}: {
  checked: string;
  onChange: (checked: string) => void;
  className?: string;
  items: { value: string; label: string }[];
  align?: "v" | "h";
}) {
  let alignClass = "flex-row gap-x-4";
  if (align === "v") {
    alignClass = "flex-col";
  }

  return (
    <ul className={`w-full flex ${alignClass} ${className}`}>
      {items.map((item) => (
        <li key={item.value}>
          <label
            className="flex items-center"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && onChange(item.value)
            }
            aria-label={item.label}
          >
            <input
              type="radio"
              className={`bg-cover w-4 h-4 mr-2 appearance-none bg-radio-false checked:bg-radio-true ${focusRings.default}`}
              checked={checked === item.value}
              onChange={() => onChange(item.value)}
              tabIndex={-1}
            />
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}
