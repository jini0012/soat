"use client";
import React from "react";
import { focusRings } from "@/styles/constants";

export function Select({
  label,
  value,
  onChange,
  options,
  className,
  align,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
  align?: "v" | "h";
}) {
  if (label) {
    return (
      <label
        className={`w-full ${className} ${
          align === "v"
            ? "flex flex-col"
            : "flex items-center gap-x-4 whitespace-nowrap"
        }`}
      >
        {label}
        <select
          className={`border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background ${className} ${focusRings.default}`}
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
  } else {
    return (
      <select
        className={`border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background ${className} ${focusRings.default}`}
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
}
