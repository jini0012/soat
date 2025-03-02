"use client";
import { Button } from "@/components/controls/Button";
import { resetDirty } from "@/redux/slices/enrollSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function EnrollFooter() {
  const dispatch = useDispatch();
  const onClickTempStore = () => {
    dispatch(resetDirty());
  };
  return (
    <footer className="fixed left-0 bottom-0 bg-flesh-200 w-full h-[120px] flex justify-end items-center pr-[60px] gap-14">
      <Button onClick={onClickTempStore} type="button">
        임시 저장
      </Button>
      <Button type="submit">공연 등록</Button>
    </footer>
  );
}
