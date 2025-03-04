"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import SeatItem from "./SeatItem";
interface SeatRowProps {
  seatLabel: string;
}
export default function SeatRow({ seatLabel }: SeatRowProps) {
  const [seats, setSeats] = useState<number>(10);
  const [aisleCount, setAisleCount] = useState<number>(0);
  const [isSeats, setIsSeats] = useState<boolean[]>(
    Array(seats + aisleCount).fill(true)
  );
  const totalMaxNumber = 20;
  const handleOnClickSeatMinusBtn = () => {
    if (isSeats.length <= 1 || seats <= 1) {
      //seats의 최소 수
      return;
    }
    if (isSeats.at(-1) === false) {
      //마지막 seats를 제거할 때 통로였다면
      setAisleCount((prev) => prev - 1);
    } else {
      //통로가 아니라면 , 즉 좌석이라면
      setSeats((prev) => prev - 1);
    }

    setIsSeats((prev) => {
      return prev.slice(0, -1);
    });
  };

  const handleOnClickSeatPlsuBtn = () => {
    if (seats >= totalMaxNumber) {
      return;
    }
    setSeats((prev) => prev + 1);
    setIsSeats((prev) => [...prev, true]);
  };

  const handleOnToggleSeatItem = (index: number) => {
    const newIsSeats = [...isSeats];
    newIsSeats[index] = !newIsSeats[index]; // 토글

    if (!newIsSeats[index]) {
      //토글한 값이 false이면  즉 통로가 되면
      // 맨 뒤에 새 좌석 추가
      setAisleCount((prev) => prev + 1); // 통로 수 ++
      newIsSeats.push(true);
    } else {
      setAisleCount((prev) => prev - 1); // 통로 수 --
      newIsSeats.pop();
    }

    setIsSeats(newIsSeats);
  };

  const renderSeats = () => {
    return isSeats.map((seat, index) => {
      return (
        <SeatItem
          key={`${seatLabel}-${index}`}
          rowID={seatLabel}
          seatNumber={seat ? index + 1 : null}
          isSeat={seat}
          onToggle={() => handleOnToggleSeatItem(index)}
        />
      );
    });
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 w-fit">
        <span className="font-bold w-6">{seatLabel}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleOnClickSeatMinusBtn}
          disabled={isSeats.length <= 1}
        >
          <Minus className="w-3 h-3" />
        </Button>
        <span className="w-[2rem] flex-shrink-0 text-center">{seats}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleOnClickSeatPlsuBtn}
          disabled={seats >= totalMaxNumber}
        >
          <Plus className="w-3 h-3" />
        </Button>
        {renderSeats()}
      </div>
    </div>
  );
}
