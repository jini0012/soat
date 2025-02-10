import { useState } from "react";

import { Button } from "../controls/Button";
import { Checkbox, Radio, TextInput } from "../controls/Inputs";
import { Select } from "../controls/Select";
import BookSection from "./BookSection";

export default function PurchaseMethod({
  setProcess,
}: {
  setProcess: (process: string) => void;
}) {
  const [purchaseMethod, setPurchaseMethod] = useState("bank");

  return (
    <>
      <BookSection>
        <h3 className="font-bold text-xl">3. 티켓 정보</h3>
        <p>2024 주인님 단독 공연</p>
        <ul className="list-disc ml-4">
          <li>2025년 2월 4일 / A3</li>
          <li>2025년 2월 4일 / A4</li>
        </ul>
        <p>총 2매, 합계 16,000원</p>
        <p>합계 16,000원</p>
      </BookSection>
      <BookSection>
        <h3 className="font-bold text-xl">4. 결제 수단</h3>
        <Radio
          align="h"
          checked={purchaseMethod}
          onChange={setPurchaseMethod}
          items={[{ value: "bank", label: "무통장 입금" }]}
        />
      </BookSection>
      <ul className="w-full grid grid-cols-2 gap-x-2 mt-12">
        <li>
          <Button size="full" onClick={() => setProcess("purchaserInfo")}>
            뒤로 가기
          </Button>
        </li>
        <li>
          <Button
            size="full"
            highlight
            onClick={() => setProcess("bookComplete")}
          >
            다음
          </Button>
        </li>
      </ul>
    </>
  );
}
