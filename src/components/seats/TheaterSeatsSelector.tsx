"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import type { TheaterLayoutData } from "./TheaterLayoutManager";

interface TheaterSeatSelectorProps {
  layoutData: TheaterLayoutData;
  maxSelectableSeats?: number;
  selectedSeats: Set<string>; // 외부에서 관리되는 선택된 좌석 상태
  occupiedSeats?: string[];
  onSeatToggle: (seatId: string) => void; // 좌석 선택/해제 핸들러
}

function TheaterSeatSelector({
  layoutData,
  maxSelectableSeats = 4,
  selectedSeats,
  occupiedSeats = [],
  onSeatToggle,
}: TheaterSeatSelectorProps): JSX.Element {
  // 좌석 번호 생성 (통로 고려)
  const getSeatNumber = useCallback(
    (rowLetter: string, physicalIndex: number): string => {
      const aisles = new Set(layoutData.rowConfigs[rowLetter].aisles);
      let realSeatNumber = physicalIndex + 1;
      for (const aisle of Array.from(aisles).sort((a, b) => a - b)) {
        if (physicalIndex > aisle) {
          realSeatNumber--;
        }
      }
      return `${rowLetter}${realSeatNumber}`;
    },
    [layoutData]
  );

  // 좌석 상태에 따른 스타일 결정
  const getSeatStyle = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) {
      return "bg-gray-300 text-gray-500 cursor-not-allowed";
    }
    if (selectedSeats.has(seatId)) {
      return "bg-flesh-500 text-white hover:bg-flesh-600 hover:text-white";
    }
    return "bg-white hover:bg-gray-100";
  };

  return (
    <div className="space-y-6 p-4">
      {/* 좌석 상태 안내 */}
      <div className="flex gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border"></div>
          <span>선택 가능</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-flesh-500"></div>
          <span>선택됨</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300"></div>
          <span>선택 불가</span>
        </div>
      </div>

      {/* 좌석 배치도 */}
      <div className="bg-gray-100 p-2 rounded-lg overflow-x-auto flex flex-col justify-center items-center">
        <div className="w-fit space-y-4 flex flex-col justify-center items-center m-auto">
          {/* 무대 */}
          <div className="w-full bg-gray-300 h-8 rounded-lg flex items-center justify-center text-sm text-gray-600">
            무대
          </div>
          {Array.from({ length: layoutData.rows }).map((_, rowIndex) => {
            const rowLetter = String.fromCharCode(65 + rowIndex);
            const rowConfig = layoutData.rowConfigs[rowLetter];
            const totalPositions = rowConfig.seats + rowConfig.aisles.length;

            return (
              <div key={rowLetter} className="flex items-center gap-4">
                {/* 좌석 표시 */}
                <div className="flex gap-1">
                  {Array.from({ length: totalPositions }).map(
                    (_, physicalIndex) => {
                      const isAisle = rowConfig.aisles.includes(physicalIndex);
                      if (isAisle) {
                        return (
                          <div
                            key={`${rowLetter}-${physicalIndex}`}
                            className="w-6 h-6"
                          />
                        );
                      }

                      const seatId = getSeatNumber(rowLetter, physicalIndex);
                      return (
                        <Button
                          key={`${rowLetter}-${physicalIndex}`}
                          variant="outline"
                          className={`w-6 h-6 text-[10px] p-0 ${getSeatStyle(
                            seatId
                          )}`}
                          onClick={() => onSeatToggle(seatId)}
                          disabled={occupiedSeats.includes(seatId)}
                        >
                          {seatId}
                        </Button>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 선택된 좌석 정보 */}
      <div className="space-y-2">
        <div className="text-sm font-medium">선택된 좌석</div>
        <div className="flex flex-wrap gap-2">
          {Array.from(selectedSeats).map((seatId) => (
            <div
              key={seatId}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {seatId}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          선택된 좌석 수: {selectedSeats.size}개
        </div>
      </div>
    </div>
  );
}

export default TheaterSeatSelector;
