"use client";
import React, { useState } from "react";
import { EnrollFormData } from "./modal";
import EnrollFormItems from "./EnrollFormItems";
import EnrollPoster from "./EnrollPoster";
import EnrollCalendar from "./EnrollCalendar";

export default function EnrollmentPage() {
  const [formData, setFormData] = useState<EnrollFormData>({
    type: "",
    title: "",
    category: "",
    bookingStartDate: "",
    location: "",
  });

  const handleOnChangeInputs = (field: keyof EnrollFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <section>
      <h2 className="sr-only">공연 정보 등록페이지</h2>
      <form>
        <div className="flex flex-row gap-16">
          <section className="w-[21.6%]">
            <h3 className="sr-only">공연 포스터</h3>
            <EnrollPoster />
          </section>
          <section className="w-[45.3%]">
            <h3 className="sr-only">공연 정보</h3>
            <EnrollFormItems
              title={formData.title}
              type={formData.type}
              category={formData.category}
              bookingStartDate={formData.bookingStartDate}
              location={formData.location}
              onChange={handleOnChangeInputs}
            />
          </section>
          <section className="w-[28.125%]">
            <h3 className="sr-only">공연 날짜</h3>
            <EnrollCalendar />
          </section>
        </div>
        <section className="bg-gray-700 w-full h-[50vh]">
          <h3 className="sr-only">공연 상세 정보</h3>
        </section>
      </form>
    </section>
  );
}
