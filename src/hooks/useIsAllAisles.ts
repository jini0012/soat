"use client";

import { addIsAllAisle } from "@/redux/slices/seatSlice";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useIsAllAisles = () => {
  const rowConfigs = useSelector((state: RootState) => state.seat.rowsConfigs);
  const dispatch = useDispatch();
  const validateRemainingAisles = () => {
    const targetSeats = Object.values(rowConfigs).slice(0, -1);

    const aislesSet = new Set(
      targetSeats
        .map((rowConfig) => rowConfig.aisles)
        .reduce((acc, aisles) => acc.concat(aisles), [])
    );

    aislesSet.forEach((aisle) => {
      const isAllAisle = targetSeats
        .filter((rowConfig) => rowConfig.seats >= aisle)
        .every((rowConfig) => rowConfig.aisles.includes(aisle));
      if (isAllAisle) {
        dispatch(addIsAllAisle(aisle));
      }
    });
  };

  const isAisleInAllRows = (targetSeatLabel: string, targetAisles: number) => {
    return Object.keys(rowConfigs)
      .filter((seatLabel) => seatLabel !== targetSeatLabel)
      .filter((seatLabel) => rowConfigs[seatLabel].seats >= targetAisles)
      .every((key) => {
        const rowConfig = rowConfigs[key];
        return rowConfig.aisles.includes(targetAisles);
      });
  };

  return { validateRemainingAisles, isAisleInAllRows };
};
