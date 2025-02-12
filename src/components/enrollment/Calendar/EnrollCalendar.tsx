import React, { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../../controls/Button";
import { CalendarValue, EnrollCalendarProps } from "@/types/enrollment";
import "./enrollCalendar.css";

export default function EnrollCalendar({ openModal }: EnrollCalendarProps) {
  const [value, onChange] = useState<CalendarValue>(new Date());

  return (
    <>
      <Calendar
        locale="ko"
        formatDay={(locale, date) => `${date.getDate()}`}
        value={value}
        onChange={onChange}
        tileClassName={({ date }) => (date.getDay() === 6 ? "saturday" : null)}
      />
      <Button className="ml-auto" type="button" onClick={openModal}>
        추가
      </Button>
    </>
  );
}
