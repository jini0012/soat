"use client";
import React, { useState } from "react";
import { EnrollFormData } from "../../types/enrollment";
import EnrollFormItems from "../../components/enrollment/EnrollFormItems";
import EnrollPoster from "../../components/enrollment/EnrollPoster";
import EnrollCalendar from "../../components/enrollment/Calendar/EnrollCalendar";
import { Button } from "@/components/controls/Button";
import EnrollModal from "@/components/enrollment/EnrollModal";
import Modal from "@/components/Modal";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});

export default function EnrollmentPage() {
  const [formData, setFormData] = useState<EnrollFormData>({
    type: "",
    title: "",
    category: "",
    bookingStartDate: "",
    location: "",
    poster: null,
  });

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

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
    <section className="max-w-[1920px] m-auto mb-[140px] px-[80px]">
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
          <section className="w-[28.125%] border rounded-[10px] flex flex-col p-4">
            <h3 className="sr-only">공연 날짜</h3>
            <EnrollCalendar openModal={handleOpenModal} />
          </section>
        </div>
        <section className="w-full mt-16 min-h-[600px]">
          <h3 className="mb-4 text-base">공연 세부 정보</h3>
          <Editor />
        </section>
      </form>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <EnrollModal />
      </Modal>
      <footer className="fixed left-0 bottom-0 bg-flesh-200 w-full h-[120px] flex justify-end items-center pr-[60px] gap-14">
        <Button type="button">임시 저장</Button>
        <Button type="submit">공연 등록</Button>
      </footer>
    </section>
  );
}
