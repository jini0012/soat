import { useState } from "react";

import { Button } from "../controls/Button";
import { Checkbox, Radio, TextInput } from "../controls/Inputs";
import { Select } from "../controls/Select";
import BookSection from "./BookSection";

export default function BookComplete() {
  const [purchaseMethod, setPurchaseMethod] = useState("bank");

  return (
    <>
      <BookSection>
        <h3 className="sr-only">예매 완료</h3>
        <p className="font-bold text-xl">예매가 완료되었습니다!</p>
        <dl>
          <dt className="font-bold">예매 번호</dt>
          <dd className="mb-2">A32BC76G2FF45</dd>
          <dt className="font-bold">공연명</dt>
          <dd className="mb-2">2025 주인님 단독 공연</dd>
          <dt className="font-bold">공연 장소</dt>
          <dd className="mb-2">인천광역시 어쩌구 멘토님 집</dd>
          <dt className="font-bold">관람 일시</dt>
          <dd className="mb-2">2025년 1월 22일 오후 8시</dd>
          <dt className="font-bold">좌석번호</dt>
          <dd className="mb-2">B4 / B5</dd>
          <dt className="font-bold">입금 기한</dt>
          <dd className="mb-2">2025년 1월 21일 오후 11시 59분까지</dd>
        </dl>
      </BookSection>
      <BookSection>
        <h3 className="font-bold text-xl">결제하기</h3>
        <Radio
          align="h"
          checked={purchaseMethod}
          onChange={setPurchaseMethod}
          items={[{ value: "bank", label: "무통장 입금" }]}
        />
      </BookSection>
      <ul className="w-full grid grid-cols-2 gap-x-2 mt-12">
        <li>
          <Button size="full">티켓 확인</Button>
        </li>
        <li>
          <Button size="full" highlight>
            닫기
          </Button>
        </li>
      </ul>
    </>
  );
}
