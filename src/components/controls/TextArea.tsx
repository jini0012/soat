"use client";
import React, { ForwardedRef, forwardRef } from "react";
import { focusRings } from "@/styles/constants";
import { TextAreaProps } from "@/types/controls";

const TextArea = forwardRef(function Textarea(
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const {
    label,
    value,
    onChange,
    placeholder,
    className = "",
    disabled,
    resize,
    rows,
    max,
    onInput,
  } = props;

  const resizeClass = resize ? "resize" : "resize-none";

  if (label) {
    return (
      <label className={`w-full ${className}`}>
        {label}
        <textarea
          ref={ref}
          className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background  ${focusRings.default} ${className}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          maxLength={max}
          onInput={onInput}
        />
      </label>
    );
  } else {
    return (
      <textarea
        ref={ref}
        className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background  ${focusRings.default} ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={max}
        onInput={onInput}
      />
    );
  }
});

TextArea.displayName = "TextArea";
export default TextArea;

/* export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
  className,
  disabled,
  resize,
  rows,
  max,
  onInput,
}: TextAreaProps) {
  const resizeClass = resize ? "resize" : "resize-none";

  if (label) {
    return (
      <label className={`w-full ${className}`}>
        {label}
        <textarea
          className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background  ${focusRings.default} ${className}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          maxLength={max}
          onInput={onInput}
        />
      </label>
    );
  } else {
    return (
      <textarea
        className={`${resizeClass} border-2 rounded-lg px-4 py-2 w-full focus-visible:outline-none bg-background  ${focusRings.default} ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={max}
        onInput={onInput}
      />
    );
  }
}
 */
