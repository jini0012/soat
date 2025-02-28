"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  setAddress,
  setBookingStartDate,
  setCategory,
  setDetailAddress,
  setPostCode,
  setPrice,
  setTitle,
} from "@/redux/slices/enrollSlice";
import { KakaoAddressData } from "@/types/kakao";
import { TextInput } from "../controls/Inputs";
import KakaoAddressSearch from "../controls/KakaoAddressSearch";
import { focusRings } from "@/styles/constants";

export default function EnrollFormItems() {
  const {
    title,
    category,
    bookingStartDate,
    address,
    detailAddress,
    postCode,
    price,
  } = useSelector((state: RootState) => state.enroll);
  const dispatch = useDispatch();

  const handleSearchAddress = (data: KakaoAddressData) => {
    const address = data.roadAddress + data.buildingName;
    dispatch(setAddress(address));
    dispatch(setPostCode(data.zonecode));
  };

  const handleOnChangeTitle = (newTitle: string) => {
    dispatch(setTitle(newTitle));
  };

  const handleOnChangeCategory = (newCategory: string) => {
    dispatch(setCategory(newCategory));
  };

  const handleOnChangePrice = (newPrice: string) => {
    // 숫자 변환 후 상태 업데이트
    dispatch(setPrice(Number(newPrice)));
  };

  const handleOnChangeBookingStartDate = (newDate: string) => {
    dispatch(setBookingStartDate(newDate));
  };

  const handleOnChangeDetailAddress = (newDetailAddress: string) => {
    dispatch(setDetailAddress(newDetailAddress));
  };
  return (
    <>
      <TextInput label="공연명" value={title} onChange={handleOnChangeTitle} />
      <TextInput
        label="카테고리"
        value={category}
        onChange={handleOnChangeCategory}
      />
      <TextInput
        label="가격"
        value={price.toString()}
        onChange={handleOnChangePrice}
      />
      <TextInput
        label="예매시작일"
        type="date"
        value={bookingStartDate}
        onChange={handleOnChangeBookingStartDate}
      />
      <label className="block" htmlFor="detailLocation">
        위치
      </label>
      <input
        className={`border-2 rounded-lg px-4 py-2 flex-1 focus-visible:outline-none bg-background ${focusRings.default} mr-4 mb-2 w-[10rem]`}
        placeholder="우편번호"
        value={postCode}
        readOnly
      />
      <KakaoAddressSearch
        onComplete={(data: KakaoAddressData) => handleSearchAddress(data)}
      />
      <TextInput
        className="mb-2"
        type="text"
        placeholder="주소"
        value={address}
        readOnly
      />
      <input
        className={`border-2 rounded-lg px-4 py-2 flex-1 w-full focus-visible:outline-none bg-background ${focusRings.default}`}
        type="text"
        id="detailLocation"
        placeholder="상세 주소"
        value={detailAddress}
        onChange={(e) => handleOnChangeDetailAddress(e.target.value)}
      />
    </>
  );
}
