"use client";
import { useRef, useEffect, useState } from "react";
import { GeneralUser } from "@/types/admin";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";

export default function GeneralUserForm({
  user,
  radioOptions,
  radioState,
  onRadioChange,
  onClose,
  onApply,
}: {
  user: GeneralUser;
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

  return (
    <dialog
      ref={dialogRef}
      className="w-[400px] h-[70%] max-h-[560px] p-4"
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
          <p className="text-[10px] text-gray-500">예매 내역이 없습니다.</p>
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
    </dialog>
  );
}
