"use client";

import React from "react";
import { ReactElement } from "react";
import { focusRings } from "@/styles/constants";
import {
  CheckboxProps,
  InputContainerProps,
  JoinInputProps,
  RadioProps,
  SearchInputProps,
  TextInputProps,
} from "@/types/controls";

// Input을 감쌀 경우 사용하는 컨테이너
function InputContainer({ input, children, className }: InputContainerProps) {
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
  readOnly,
}: TextInputProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const Input = (
    <input
      className={`${
        !children ? `border-2 rounded-lg ${focusRings.default}` : "border-none"
      } px-4 py-2 flex-1 w-full focus-visible:outline-none bg-background ${className}`}
      value={value}
      onChange={handleOnChange}
      type={type}
      placeholder={placeholder}
      aria-label={label || ariaLabel}
      readOnly={readOnly}
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
  children,
  invalid,
  value,
  onChange,
  type,
  disabled,
  validation,
}: JoinInputProps) {
  if (invalid) {
    className = "border-flesh-500";
  } else if (!!value) {
    className = "border-black";
  } else {
    className = "border-gray-300";
  }

  return (
    <>
      <fieldset className="h-[43px]">
        <label
          className={`text-sm h-[23px] flex mb-[5px] gap-3 border-b whitespace-nowrap w-full items-center focus-within:border-black ${
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
            className={`focus:outline-none w-full placeholder:text-sm ${
              disabled && "bg-white"
            }`}
            aria-label={label}
            disabled={disabled}
          />
          {children}
        </label>
        <span
          className={`text-flesh-400 ${
            validation?.includes("이메일") ? "text-[10px]" : "text-xs"
          }`}
        >
          {validation ? validation : "\u00A0"}
        </span>
      </fieldset>
    </>
  );
}
export function SearchInput({
  label,
  placeholder,
  className,
  inputClassName,
  children,
  value,
  onChange,
  onSearch,
  type = "text",
}: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <fieldset>
      <label
        className={`flex mb-[5px] gap-3 border-b whitespace-nowrap w-full items-center focus-within:border-black ${
          className ? className : ""
        }`}
      >
        {label}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`focus:outline-none w-full placeholder:text-sm text-black border-b-[2px] border-flesh-500 ${
            inputClassName ? inputClassName : ""
          }`}
          aria-label={label}
        />
        {children}
      </label>
    </fieldset>
  );
}
export function Checkbox({
  checked,
  onChange,
  className,
  children,
}: CheckboxProps) {
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
}: RadioProps) {
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
