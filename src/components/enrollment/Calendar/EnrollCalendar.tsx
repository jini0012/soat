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
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { performances } = useSelector((state: RootState) => state.enroll);
  const dispatch = useDispatch();

  const handleCloseEnrollModal = () => {
    setIsOpenEnrollModal(false);
  };

  const handleOpenEnrollModal = () => {
    setIsOpenEnrollModal(true);
  };

  const handleConfirm = (time: string, casting: string[]) => {
    dispatch(addPerformance({ date: selectedDate, time, casting }));
  };
  const updateValue = (date: Date) => {
    setValue(date);
  };

  const handleSelectedDate = (date: Date) => {
    const correction = date.getTimezoneOffset() * 60000; // 분 단위를 밀리초로 변경
    const formattedDate = new Date(date.getTime() - correction)
      .toISOString()
      .split("T")[0];
    setSelectedDate(formattedDate);
  };

  const handleDateChange = (value: Value) => {
    if (!value || Array.isArray(value)) return; // 다중 선택 방지
    updateValue(value);
    handleSelectedDate(value);
  };

  const handleDayClick = (
    value: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const formattedDate = format(new Date(value), "yyyy-MM-dd");
    if (!performances[formattedDate]) {
      return;
    }
    console.log(performances[formattedDate]);
  };
  return (
    <>
      <Calendar
        locale="ko"
        onClickDay={handleDayClick}
        formatDay={(locale, date) => `${date.getDate()}`}
        value={value}
        onChange={handleDateChange}
        tileContent={({ date, view }) => {
          const formattedDate = format(new Date(date), "yyyy-MM-dd");
          return view === "month" && performances[formattedDate] ? (
            <div className="events"></div>
          ) : null;
        }}
        tileClassName={({ date }) => (date.getDay() === 6 ? "saturday" : null)}
      />
      <Button className="ml-auto" type="button" onClick={handleOpenEnrollModal}>
        추가
      </Button>

      <Modal isOpen={isOpenEnrollModal} onClose={handleCloseEnrollModal}>
        <EnrollModal
          onClose={handleCloseEnrollModal}
          onConfirm={handleConfirm}
          selectedDate={selectedDate}
        />
      </Modal>
    </>
  );
}
