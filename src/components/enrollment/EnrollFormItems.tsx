"use client";
import React from "react";
import EnrollFormItemsUI from "./EnrollFormItemsUI";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { updateStringFormField } from "@/redux/slices/enrollSlice";
import { EnrollFormData } from "@/types/enrollment";

export default function EnrollFormItems() {
  const { title, type, category, bookingStartDate, location } = useSelector(
    (state: RootState) => state.enroll
  );
  const dispatch = useDispatch();

  const handleOnChangeInputs = (
    field: keyof Omit<EnrollFormData, "performances" | "poster">,
    value: string
  ) => {
    dispatch(updateStringFormField({ field, value }));
  };

  return (
    <EnrollFormItemsUI
      title={title}
      type={type}
      category={category}
      bookingStartDate={bookingStartDate}
      location={location}
      onChange={handleOnChangeInputs}
    />
  );
}
