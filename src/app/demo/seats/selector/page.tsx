"use client";

import { Button } from "@/components/controls/Button";
import TheaterSeatSelector from "@/components/seats/TheaterSeatsSelector";
import { useState } from "react";

const demoLayout = {
  rows: 5,
  rowConfigs: {
    A: {
      seats: 10,
      aisles: [],
    },
    B: {
      seats: 10,
      aisles: [],
    },
    C: {
      seats: 10,
      aisles: [],
    },
    D: {
      seats: 10,
      aisles: [],
    },
    E: {
      seats: 10,
      aisles: [],
    },
  },
  totalSeats: 50,
  performanceName: "SCREEN 1",
  lastModified: "2025-02-20T06:36:26.398Z",
};
export default function SeatsGeneratorDemo() {
  const [selectedSeats, setSelectedSeats] = useState(new Set<string>());

  const handleSeatToggle = (seatId: string) => {
    setSelectedSeats((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(seatId)) {
        newSelected.delete(seatId);
      } else {
        newSelected.add(seatId);
      }
      return newSelected;
    });
  };

  return (
    <>
      <TheaterSeatSelector
        layoutData={demoLayout}
        selectedSeats={selectedSeats}
        onSeatToggle={handleSeatToggle}
      />
      <Button
        onClick={() => {
          console.log(selectedSeats);
        }}
      >
        좌석 정보 콘솔에 출력
      </Button>
    </>
  );
}
