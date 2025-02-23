"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../../controls/Button";
import { CalendarValue } from "@/types/enrollment";
import { Value } from "react-calendar/dist/esm/shared/types.js";
import Modal from "@/components/Modal";
import EnrollModal from "../EnrollModal";
import "./enrollCalendar.css";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addPerformance } from "@/redux/slices/enrollSlice";

export default function EnrollCalendar() {
  const [value, setValue] = useState<CalendarValue>(null);
  const [isOpenEnrollModal, setIsOpenEnrollModal] = useState<boolean>(false);
  const [isRange, setIsRange] = useState<boolean>(false);
  const { performances } = useSelector((state: RootState) => state.enroll);
  const dispatch = useDispatch();

  const handleCloseEnrollModal = () => {
    setIsOpenEnrollModal(false);
  };

  const handleOpenEnrollModal = () => {
    setIsOpenEnrollModal(true);
  };

  const handleConfirm = (
    selectedDates: string[],
    time: string,
    casting: string[]
  ) => {
    dispatch(addPerformance({ dates: selectedDates, time, casting }));
  };

  const updateValue = (date: Value) => {
    setValue(date);
  };

  const handleDateChange = (value: Value) => {
    if (!value) {
      return;
    }
    updateValue(value);
  };

  const handleDayClick = (
    //이벤트가 등록된 타일을 클릭하면
    value: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const formattedDate = format(new Date(value), "yyyy-MM-dd");
    if (!performances[formattedDate]) {
      return;
    }
  };

  const handleToggleRangeButton = () => {
    //범위 선택 여부
    setIsRange((prev) => !prev);
  };

  return (
    <>
      <Calendar
        locale="ko-KR"
        onClickDay={handleDayClick}
        formatDay={(locale, date) => `${date.getDate()}`}
        value={value}
        onChange={handleDateChange}
        selectRange={isRange}
        returnValue={isRange ? "range" : "start"}
        tileContent={({ date, view }) => {
          const formattedDate = format(new Date(date), "yyyy-MM-dd");
          return view === "month" && performances[formattedDate] ? (
            <div className="events"></div>
          ) : null;
        }}
        tileClassName={({ date }) => (date.getDay() === 6 ? "saturday" : null)}
      />
      <div className="flex">
        <ul className="flex gap-4 items-end text-xs">
          <li className="relative after:content-[''] after:bg-flesh-200 after:w-4 after:block after:absolute after:aspect-[1/1] after:top-[-20px] after:left-[50%] after:-translate-x-1/2">
            시작 날짜
          </li>
          <li className="relative after:content-[''] after:bg-flesh-500 after:w-4 after:block after:absolute after:aspect-[1/1] after:top-[-20px] after:left-[50%] after:-translate-x-1/2">
            종료 날짜
          </li>
        </ul>
        <Button
          type="button"
          className="ml-auto text-xs"
          onClick={handleToggleRangeButton}
        >
          범위 선택
        </Button>
        <Button
          className="ml-auto"
          type="button"
          onClick={handleOpenEnrollModal}
        >
          추가
        </Button>
      </div>
      <Modal isOpen={isOpenEnrollModal} onClose={handleCloseEnrollModal}>
        <EnrollModal
          onClose={handleCloseEnrollModal}
          onConfirm={handleConfirm}
          selectedDates={value}
        />
      </Modal>
    </>
  );
}
