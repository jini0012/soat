import React, { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../../controls/Button";
import { CalendarValue, EnrollCalendarProps } from "@/types/enrollment";
import "./enrollCalendar.css";
import { Value } from "react-calendar/dist/esm/shared/types.js";

export default function EnrollCalendar({
  openModal,
  setSelectedDate,
}: EnrollCalendarProps) {
  const [value, setValue] = useState<CalendarValue>(new Date());

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
    console.log(value);
    if (!value || Array.isArray(value)) return; // 다중 선택 방지
    updateValue(value);
    handleSelectedDate(value);
  };
  return (
    <>
      <Calendar
        locale="ko"
        formatDay={(locale, date) => `${date.getDate()}`}
        value={value}
        onChange={handleDateChange}
        tileClassName={({ date }) => (date.getDay() === 6 ? "saturday" : null)}
      />
      <Button className="ml-auto" type="button" onClick={openModal}>
        추가
      </Button>
    </>
  );
}
