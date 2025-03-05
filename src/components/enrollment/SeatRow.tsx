"use client";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  addAisles,
  addIsAllAisle,
  removeAisles,
  removeIsAllAisle,
  updateSeats,
} from "@/redux/slices/seatSlice";
import { useIsAllAisles } from "@/hooks/useIsAllAisles";
interface SeatRowProps {
  seatLabel: string;
}
export default function SeatRow({ seatLabel }: SeatRowProps) {
  const rowConfigs = useSelector(
    (state: RootState) => state.seat.rowsConfigs[seatLabel]
  );
  const isAllAisle = useSelector((state: RootState) => state.seat.isAllAisle);
  const seats = rowConfigs.seats;
  const aisles = rowConfigs.aisles;
  const totalMaxNumber = 20;
  const setAisles = useMemo(() => new Set(aisles), [aisles]);
  const isSeats = useMemo(() => {
    return Array.from({ length: seats + aisles.length }, (_, idx) =>
      setAisles.has(idx) ? false : true
    );
  }, [seats, aisles, setAisles]);
  const dispatch = useDispatch();

  const isAllAisleFunc = useIsAllAisles();

  const handleOnClickSeatMinusBtn = () => {
    if (isSeats.length <= 1 || seats <= 1) {
      //seats의 최소 수
      return;
    }
    const lastIndex = isSeats.length - 1;
    if (setAisles.has(lastIndex)) {
      //마지막 seats를 제거할 때 통로였다면
      dispatch(removeAisles({ rowLabel: seatLabel, aisleNumber: lastIndex }));
    } else {
      //통로가 아니라면 , 즉 좌석이라면
      dispatch(updateSeats({ rowLabel: seatLabel, newSeats: seats - 1 }));
    }
    if (isAllAisleFunc(seatLabel, lastIndex)) {
      dispatch(addIsAllAisle(lastIndex));
    }
  };

  const handleOnClickSeatPlsuBtn = () => {
    if (seats >= totalMaxNumber) {
      return;
    }
    const newSeatNum = seats + 1;
    if (isAllAisle.includes(newSeatNum)) {
      dispatch(removeIsAllAisle(newSeatNum));
    }
    dispatch(updateSeats({ rowLabel: seatLabel, newSeats: newSeatNum }));
  };

  const handleOnToggleSeatItem = (index: number) => {
    if (!setAisles.has(index)) {
      //토글한 값이 false이면  즉 통로가 되면
      // 맨 뒤에 새 좌석 추가
      dispatch(addAisles({ rowLabel: seatLabel, aisleNumber: index }));
      if (isAllAisleFunc(seatLabel, index)) {
        dispatch(addIsAllAisle(index));
      }
    } else {
      if (isAllAisle.includes(index)) {
        dispatch(removeIsAllAisle(index));
      }
      dispatch(removeAisles({ rowLabel: seatLabel, aisleNumber: index }));
    }
  };

  const renderSeats = () => {
    let seatNum = 0;
    return isSeats.map((seat, index) => {
      const isAisle = isAllAisle.includes(index);

      if (!isAisle) {
        seatNum++;
      }

      return (
        <SeatItem
          key={`${seatLabel}-${index}`}
          rowID={seatLabel}
          seatNumber={seat ? seatNum : null}
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
