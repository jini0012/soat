"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useIsAllAisles = () => {
  const rowConfigs = useSelector((state: RootState) => state.seat.rowsConfigs);

  const isAllAisle = (targetSeatLabel: string, targetAisles: number) => {
    return Object.keys(rowConfigs)
      .filter((seatLabel) => seatLabel !== targetSeatLabel)
      .filter((seatLabel) => rowConfigs[seatLabel].seats >= targetAisles)
      .every((key) => {
        const rowConfig = rowConfigs[key];
        return rowConfig.aisles.includes(targetAisles);
      });
  };

  return isAllAisle;
};
