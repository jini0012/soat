"use client";
import React, { useState } from "react";
import Modal from "./../Modal";
import { Button } from "../controls/Button";
import NaverMapModal from "./NaverMap";

export default function ShowInfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // 장소 정보 (실제 정보로 업데이트 필요)
  const locationName = "예술의전당";
  const locationAddress = "서울특별시 서초구 남부순환로 2406"; // 실제 주소로 변경 필요

  const handleCopyUrl = () => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          setModalMessage("공연정보가 클립보드에 복사되었습니다!");
          setIsModalOpen(true);
        })
        .catch((error) => {
          setModalMessage(error + "클립보드 복사에 실패했습니다.");
          setIsModalOpen(true);
        });
    }
  };

  const handleMapButtonClick = () => {
    setIsMapModalOpen(true);
  };

  return (
    <section className="flex flex-col md:flex-row py-8 md:py-16 gap-6 md:gap-12 px-4 md:px-0">
      <div className="w-full md:w-80">
        <div className="relative w-full pt-[150%] md:w-80 md:h-[460px]">
          <img
            src="images/derme.jpg"
            alt="포스터"
            className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="border-b border-gray-200 pb-4 mb-6 md:mb-8">
            <div className="flex justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  2025 주인님 단독공연
                </h2>
                <p className="text-lg md:text-xl text-gray-500">
                  2025. 01. 21. - 2025. 01. 25
                </p>
              </div>
              <button onClick={handleCopyUrl}>
                <img
                  src="images/icons/share-icon.svg"
                  alt="공유하기"
                  className="ml-4 w-6 md:w-auto"
                />
              </button>
            </div>
          </div>

          <ul className="space-y-4 md:space-y-6">
            <li>
              <p className="flex items-center gap-2 text-lg md:text-2xl text-neutral-700">
                <span className="font-semibold">장소 :</span>
                {locationName} (8석)
                <button
                  onClick={handleMapButtonClick}
                  className="flex items-center hover:opacity-75 transition-opacity"
                >
                  <img
                    src="images/icons/map-icon.svg"
                    alt="지도보기"
                    className="w-5 md:w-6 h-5 md:h-6 ml-1 md:ml-2"
                  />
                </button>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 text-lg md:text-2xl text-neutral-700">
                <span className="font-semibold">예매가 :</span>
                1,000,000 원
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 text-lg md:text-2xl text-neutral-700">
                <span className="font-semibold">카테고리 :</span>
                코미디 (8석)
              </p>
            </li>
          </ul>
        </div>

        <Button
          highlight
          size="full"
          className="text-white px-6 md:px-20 py-3 md:py-4 rounded-lg text-xl md:text-2xl mt-8 md:mt-0"
        >
          예매하기
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-sm text-center py-8 mx-4 md:mx-0"
      >
        <div className="flex flex-col items-center">
          <p className="text-lg">{modalMessage}</p>
          <Button
            highlight
            className="mt-4 px-6 py-2"
            onClick={() => setIsModalOpen(false)}
          >
            확인
          </Button>
        </div>
      </Modal>

      <NaverMapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        locationName={locationName}
        locationAddress={locationAddress}
      />
    </section>
  );
}
