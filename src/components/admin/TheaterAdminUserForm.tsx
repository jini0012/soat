"use client";
import { useRef, useEffect, useState } from "react";
import { TheaterAdminUser } from "@/types/admin";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";
import JoinTypeModal from "./JoinTypeModal";

export default function TheaterAdminUserForm({
  user,
  radioOptions,
  radioState,
  onRadioChange,
  onClose,
  onApply,
}: {
  user: TheaterAdminUser;
  radioOptions: { value: string; label: string }[];
  radioState: string;
  onRadioChange: (value: string) => void;
  onClose: () => void;
  onApply: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const [isOpenJoinTypeModal, setIsOpenJoinTypeModal] = useState(false);

  const handleButtonClick = () => {
    // 라디오 버튼이 체크되어 있으면 모달을 열도록 설정
    if (radioState) {
      setIsOpenJoinTypeModal(true);
    } else {
      alert("라디오 버튼을 선택하세요.");
    }
  };

  const closeJoinTypeModal = () => {
    setIsOpenJoinTypeModal(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-[400px] h-[80%] max-h-[560px] p-4"
      onClose={onClose}
    >
      <div className="relative flex justify-center w-full">
        <h2 className="font-semibold text-center">
          <span>{user.name}</span>님의 회원정보
        </h2>
        <CloseButton
          onClick={() => {
            dialogRef.current?.close();
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
            { label: "가입유형", value: user.joinType, withButton: true }, // 버튼 추가
            { label: "사업자등록번호", value: "-" },
            { label: "팀명", value: "-" },
          ].map(({ label, value, withButton }, index) => (
            <div className="flex w-full items-center" key={index}>
              <dt className="mr-2 w-[80px]">{label}</dt>
              <dd className="flex items-center">
                {value}
                {label === "가입유형" && ( // 가입유형 항목에 버튼 추가
                  <Button
                    className="ml-2 h-[20px] text-[9px] flex items-center"
                    size="small"
                    onClick={handleButtonClick}
                  >
                    변경
                  </Button>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-5 ">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300 ">
          보유 공연 목록
        </h3>
        <div className="h-[70px] flex justify-center items-center">
          <p className="text-[10px] text-gray-500">
            보유 공연 목록이 없습니다.
          </p>
        </div>
      </section>

      <section className="mt-5 ">
        <h3 className="font-semibold text-sm py-2 border-t border-t-gray-300 ">
          계정 상태
        </h3>
        <Radio
          className="text-xs mt-1"
          checked={radioState}
          onChange={onRadioChange}
          items={radioOptions}
        />
        <p className="text-[10px] text-gray-500 font-light mt-2 mb-4">
          (현재 상태 : <span>{radioState}</span>)
        </p>
        <Button highlight size="small" onClick={onApply}>
          상태 변경 적용
        </Button>
      </section>

      {isOpenJoinTypeModal && <JoinTypeModal onClose={closeJoinTypeModal} />}
    </dialog>
  );
}
