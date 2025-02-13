"use client";
import React from "react";
import { focusRings } from "@/styles/constants";
import { TextAreaProps } from "@/types/controls";

export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
  className,
  disabled,
  resize,
  rows,
}: TextAreaProps) {
  const resizeClass = resize ? "resize" : "resize-none";

  if (label) {
    return (
      <label className={`w-full ${className}`}>
        {label}
        <textarea
          className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background ${className} ${focusRings.default}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        />
      </label>
    );
  } else {
    return (
      <textarea
        className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background ${className} ${focusRings.default}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
      />
    );
  }
}
