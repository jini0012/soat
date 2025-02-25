"use client";
import { useState } from "react";
import { GeneralUser } from "@/types/admin";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";
import Modal from "../Modal";

export default function GeneralUserForm({
  user,
  userRadioOptions,
  userRadioState,
  onRadioChange,
  onClose,
  onApply,
}: {
  user: GeneralUser;
  userRadioOptions: { value: string; label: string }[];
  userRadioState: string; // 여기도 수정
  onRadioChange: (value: string) => void;
  onClose: () => void;
  onApply: () => void;
}) {
  const [isFormOpen, setIsFormOpen] = useState(true); //회원정보 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false); //변경여부 모달 상태 관리
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); //변경사항 저장 확인 모달 상태 관리

  return (
    <>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-40">
          {/* 헤더도 딤드 처리 */}
          <div className="fixed inset-0 z-30 bg-black/30"></div>
          <div className="bg-white w-[330px] h-[70%] max-h-[560px] p-4 rounded shadow-lg z-50">
            <div className="relative flex justify-center w-full">
              <h2 className="font-semibold text-center">
                <span>{user.name}</span>님의 회원정보
              </h2>
              <CloseButton
                onClick={() => {
                  setIsFormOpen(false);
                  onClose();
                }}
                className="absolute right-0"
              />
            </div>

            <section className="mt-4 text-xs">
              <h3 className="sr-only">회원정보</h3>
              <dl className="flex flex-wrap gap-x-1 gap-y-1">
                {[
                  { label: "이름", value: user.name },
                  { label: "이메일", value: user.email },
                  { label: "휴대폰번호", value: "-" },
                  { label: "회원유형", value: "-" },
                  { label: "가입날짜", value: user.joinDate },
                ].map(({ label, value }, index) => (
                  <div className="flex w-full items-center" key={index}>
                    <dt className="mr-2 w-[80px]">{label}</dt> <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-5 ">
              <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300 ">
                예매 내역
              </h3>
              <div className="h-[70px] flex justify-center items-center">
                <p className="text-xs text-gray-500">예매 내역이 없습니다.</p>
              </div>
            </section>

            <section className="mt-5 ">
              <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300 ">
                계정 상태
              </h3>
              <Radio
                className="text-xs mt-1"
                checked={userRadioState}
                onChange={onRadioChange}
                items={userRadioOptions}
              />
              <p className="text-xs text-gray-500 font-light mt-2 mb-4">
                (현재 상태 : <span>{userRadioState}</span>)
              </p>
              <Button
                highlight
                size="small"
                onClick={() => {
                  onApply(); // 상태 변경 함수 실행
                  setIsModalOpen(true); // 모달 열기
                }}
              >
                상태 변경 적용
              </Button>
            </section>
          </div>
        </div>
      )}
      {/* 계정 상태 변경 여부 모달 */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000]">
            <p className="text-xs">계정 상태를 변경하시겠습니까?</p>
            <div className="flex justify-center gap-2">
              <Button
                size="small"
                onClick={() => setIsModalOpen(false)}
                className="mt-2 w-[60px]"
              >
                아니오
              </Button>
              <Button
                highlight
                size="small"
                onClick={() => {
                  setIsApplyModalOpen(true);
                  setIsModalOpen(false);
                }}
                className="mt-2 w-[60px]"
              >
                예
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {/* 변경 완료 모달 */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000] flex flex-col items-center">
            <p className="text-xs">성공적으로 변경되었습니다.</p>
            <Button
              highlight
              size="small"
              onClick={() => setIsApplyModalOpen(false)}
              className="mt-2 w-[60px]"
            >
              닫기
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
