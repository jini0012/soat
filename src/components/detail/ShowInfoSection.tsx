"use client";
import React, { useState } from "react";
import Modal from "./../Modal";
import { Button } from "../controls/Button";

export default function ShowInfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  return (
    <section className="flex py-16 gap-12">
      <div className="w-80">
        <img
          src="images/derme.jpg"
          alt="포스터"
          className="w-80 h-[460px] rounded-xl"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="border-b border-gray-200 pb-4 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  2025 주인님 단독공연
                </h2>
                <p className="text-xl text-gray-500">
                  2025. 01. 21. - 2025. 01. 25
                </p>
              </div>
              <button onClick={handleCopyUrl}>
                <img
                  src="images/icons/share-icon.svg"
                  alt="공유하기"
                  className="ml-4"
                />
              </button>
            </div>
          </div>

          <ul className="space-y-6">
            <li>
              <p className="flex items-center gap-2 text-2xl text-neutral-700">
                <span className="font-semibold">장소 :</span>
                인천 어쩌구 멘토님 집 (8석)
                <button>
                  <img
                    src="images/icons/map-icon.svg"
                    alt="지도보기"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 text-2xl text-neutral-700">
                <span className="font-semibold">예매가 :</span>
                1,000,000 원
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 text-2xl text-neutral-700">
                <span className="font-semibold">카테고리 :</span>
                코미디 (8석)
              </p>
            </li>
          </ul>
        </div>

        <Button
          highlight
          size="full"
          className="text-white px-20 py-4 rounded-lg text-2xl"
        >
          예매하기
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-sm text-center py-8 flex flex-col items-center"
      >
        <>
          <p className="text-lg">{modalMessage}</p>
          <Button
            className="mt-4 px-6 py-2"
            onClick={() => setIsModalOpen(false)}
          >
            확인
          </Button>
        </>
      </Modal>
    </section>
  );
}
