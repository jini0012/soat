"use client";
import React from "react";
import { Button } from "@/components/ui/button";
interface SeatItemProps {
  rowID: string;
  seatNumber: number | null;
  isSeat: boolean;
  onToggle: () => void;
}
export default function SeatItem({
  rowID,
  seatNumber,
  isSeat,
  onToggle,
}: SeatItemProps) {
  const handleOnclickSeatItem = () => {
    onToggle();
  };
  return (
    <Button
      variant={isSeat ? "outline" : "ghost"}
      className={`w-6 h-6 p-1 text-xs ${!isSeat && "bg-gray-200"}`}
      onClick={handleOnclickSeatItem}
    >
      {seatNumber && rowID + seatNumber}
    </Button>
  );
}
