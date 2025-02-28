import { TextInput } from "@/components/controls/Inputs";
import React from "react";
import { EnrollFormItemsProps } from "../../types/enrollment";

import { focusRings } from "@/styles/constants";
import KakaoAddressSearch from "../controls/KakaoAddressSearch";
import { KakaoAddressData } from "@/types/kakao";
export default function EnrollFormItemsUI({
  title,
  category,
  bookingStartDate,
  address,
  detailAddress,
  postCode,
  onChange,
  handleSearchAddress,
}: EnrollFormItemsProps) {
  return (
    <>
      <TextInput
        label="공연명"
        value={title}
        onChange={(value) => onChange("title", value)}
      />
      <TextInput
        label="카테고리"
        value={category}
        onChange={(value) => onChange("category", value)}
      />
      <TextInput
        label="예매시작일"
        type="date"
        value={bookingStartDate}
        onChange={(value) => onChange("bookingStartDate", value)}
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
        onChange={(e) => onChange("detailAddress", e.target.value)}
      />
    </>
  );
}
