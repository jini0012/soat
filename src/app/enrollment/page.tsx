"use client";
import React, { useState } from "react";
import { EnrollFormData } from "../../types/enrollment";
import EnrollFormItems from "../../components/enrollment/EnrollFormItems";
import EnrollPoster from "../../components/enrollment/EnrollPoster";
import EnrollCalendar from "../../components/enrollment/EnrollCalendar";
import { Button } from "@/components/controls/Button";

export default function EnrollmentPage() {
  const [formData, setFormData] = useState<EnrollFormData>({
    type: "",
    title: "",
    category: "",
    bookingStartDate: "",
    location: "",
    poster: null,
  });

  const handleOnPoster = (file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      poster: file,
    }));
  };
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
            <EnrollPoster onPosterChange={handleOnPoster} />
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
        <section>
          <Button type="submit">등록</Button>
        </section>
      </form>
    </section>
  );
}
