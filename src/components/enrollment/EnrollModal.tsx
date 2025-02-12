import React from "react";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";

export default function EnrollModal() {
  return (
    <>
      <h3 className="sr-only">공연 등록하기</h3>
      <TextInput label="공연명" value={""} readOnly />
      <TextInput label="공연날짜" value={""} readOnly />
      <TextInput label="공연시간" value={""} />
      <Button type="button">추가</Button>
      <TextInput label="캐스팅" value={""} />
      <Button>취소</Button>
      <Button>등록</Button>
    </>
  );
}
