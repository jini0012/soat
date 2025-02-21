import { Button } from "../controls/Button";
import React from "react";
import BookSection from "./BookSection";
import ButtonRow from "./ButtonRow";
import TheaterSeatSelector from "../seats/TheaterSeatsSelector";
import type { TheaterLayoutData } from "../seats/TheaterLayoutManager";

export default function SeatSelection({
  setProcess,
  layoutData,
  selectedSeats,
  setSelectedSeats,
}: {
  setProcess: (process: string) => void;
  layoutData: TheaterLayoutData;
  selectedSeats: Set<string>;
  setSelectedSeats: (selectedSeats: Set<string>) => void;
}) {
  const maxSelectableSeats = 4;

  // 좌석 선택/해제 핸들러
  const handleSeatToggle = (seatId: string) => {
    const newSelected = new Set(selectedSeats);

    if (newSelected.has(seatId)) {
      newSelected.delete(seatId);
      setSelectedSeats(newSelected);
    } else {
      if (newSelected.size >= maxSelectableSeats) {
        alert(`최대 ${maxSelectableSeats}개의 좌석만 선택할 수 있습니다.`);
        return;
      }
      newSelected.add(seatId);
      setSelectedSeats(newSelected);
    }
  };

  // 예매 처리 함수
  const handleBooking = () => {
    if (selectedSeats.size === 0) {
      alert("좌석을 선택해주세요.");
      return;
    } else {
      setProcess("purchaserInfo");
    }
  };

  return (
    <>
      <BookSection>
        <h3 className="font-bold text-xl">1. 일자 및 좌석 선택</h3>
        <ul className="flex gap-x-3">
          <li>
            <Button size="small">2월 10일</Button>
          </li>
          <li>
            <Button size="small" highlight>
              2월 11일
            </Button>
          </li>
        </ul>
        <div className="w-full h-fit rounded-md shadow-sm border-2">
          <TheaterSeatSelector
            layoutData={layoutData}
            selectedSeats={selectedSeats}
            onSeatToggle={handleSeatToggle}
          />
        </div>
      </BookSection>
      <ul className="w-full max-w-2xl">
        <li>
          <Button highlight className="w-full" onClick={handleBooking}>
            다음
          </Button>
        </li>
      </ul>
    </>
  );
}
