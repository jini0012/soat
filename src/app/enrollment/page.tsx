import React from "react";

import EnrollFormItems from "../../components/enrollment/EnrollFormItems";
import EnrollPoster from "../../components/enrollment/EnrollPoster";
import EnrollCalendar from "../../components/enrollment/Calendar/EnrollCalendar";
import { Button } from "@/components/controls/Button";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});

export default function EnrollmentPage() {
  return (
    <section className="max-w-[1920px] m-auto mb-[140px] px-[80px]">
      <h2 className="sr-only">공연 정보 등록페이지</h2>
      <form>
        <div className="flex flex-row gap-16">
          <section className="w-[21.6%] h-full">
            <h3 className="sr-only">공연 포스터</h3>
            <EnrollPoster />
          </section>
          <section className="w-[45.3%] h-full">
            <h3 className="sr-only">공연 정보</h3>
            <EnrollFormItems />
          </section>
          <section
            id="calendar-container"
            className="w-[28.125%] h-full border rounded-[10px] flex flex-col p-4"
          >
            <h3 className="sr-only">공연 날짜</h3>
            <EnrollCalendar />
          </section>
        </div>
        <section className="w-full mt-16 min-h-[600px]">
          <h3 className="mb-4 text-base">공연 세부 정보</h3>
          <Editor />
        </section>
      </form>
      <footer className="fixed left-0 bottom-0 bg-flesh-200 w-full h-[120px] flex justify-end items-center pr-[60px] gap-14">
        <Button type="button">임시 저장</Button>
        <Button type="submit">공연 등록</Button>
      </footer>
    </section>
  );
}
