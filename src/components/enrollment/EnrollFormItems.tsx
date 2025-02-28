"use client";
import React from "react";
import EnrollFormItemsUI from "./EnrollFormItemsUI";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  setAddress,
  setPostCode,
  updateStringFormField,
} from "@/redux/slices/enrollSlice";
import { EnrollFormData } from "@/types/enrollment";
import { KakaoAddressData } from "@/types/kakao";

export default function EnrollFormItems() {
  const {
    title,
    category,
    bookingStartDate,
    address,
    detailAddress,
    postCode,
  } = useSelector((state: RootState) => state.enroll);
  const dispatch = useDispatch();

  const handleOnChangeInputs = (
    field: keyof Omit<EnrollFormData, "performances" | "poster">,
    value: string
  ) => {
    dispatch(updateStringFormField({ field, value }));
  };

  const onComplete = (data: KakaoAddressData) => {
    const address = data.roadAddress + data.buildingName;
    dispatch(setAddress(address));
    dispatch(setPostCode(data.zonecode));
  };

  return (
    <EnrollFormItemsUI
      title={title}
      category={category}
      bookingStartDate={bookingStartDate}
      address={address}
      detailAddress={detailAddress}
      postCode={postCode}
      onChange={handleOnChangeInputs}
      handleSearchAddress={onComplete}
    />
  );
}
