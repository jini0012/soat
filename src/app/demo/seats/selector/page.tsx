"use client";

import TheaterSeatSelector from "@/components/seats/TheaterSeatsSelector";

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
  return <TheaterSeatSelector layoutData={demoLayout} />;
}
