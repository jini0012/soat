"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SeatRow from "./SeatRow";
import ControlRowButton from "./ControlRowButton";
import { RowConfigs } from "@/types/enrollment";

const seatLabels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]; //고정된 값으로 재랜더링 필요 x

export interface TheaterLayoutData {
  rows: number;
  rowConfigs: RowConfigs;
  totalSeats: number;
}

export default function EnrollSeat() {
  const [rowsNumber, setRowsNumber] = useState<number>(5);

  const renderRows = () => {
    return Array.from({ length: rowsNumber }, (_, rowsNumber: number) => {
      return <SeatRow key={rowsNumber} seatLabel={seatLabels[rowsNumber]} />;
    });
  };

  const handleOnClickAddRowsBtn = () => {
    if (rowsNumber === 26) {
      return;
    }
    setRowsNumber((prev) => prev + 1);
  };
  const handleOnClickRemoveRowsBtn = () => {
    if (rowsNumber <= 1) {
      return;
    }
    setRowsNumber((prev) => prev - 1);
  };
  return (
    <>
      <Card className="w-full max-w-4xl mx-auto mb-[140px]">
        <CardHeader>
          <CardTitle>좌석 배치 하기</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* 행 관리 */}
            <ControlRowButton
              rowNums={rowsNumber}
              onMinus={handleOnClickRemoveRowsBtn}
              onPlus={handleOnClickAddRowsBtn}
            />
            {/* 통로 설정 안내 */}
            <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
              빈 칸을 클릭하면 통로로 설정됩니다. 통로 설정 시 좌석 번호가
              자동으로 조정됩니다.
            </div>

            {/* 스크린 */}
            <div className="w-full bg-gray-300 h-8 rounded-lg flex items-center justify-center text-sm text-gray-600">
              무대
            </div>
            {/*좌석 배치 */}
            <div className="bg-gray-100 p-6 rounded-lg ">
              <div className="space-y-4 overflow-x-scroll">{renderRows()}</div>
            </div>
            <div className="text-sm text-gray-600">전체 좌석 수: {} 개</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
