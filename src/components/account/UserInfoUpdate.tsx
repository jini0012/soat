"use client";
import React, { useState } from "react";
import { Button } from "../controls/Button";
import { JoinInput } from "@/components/controls/Inputs";
import { Checkbox } from "@/components/controls/Inputs";
import Modal from "../Modal";
import { CloseButton } from "@/components/controls/Button";
import { validations } from "@/utils/validations";

export default function UserInfoUpdate() {
  const [isUpdateType, setIsUpdateType] = useState<string>("password");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  const [isAccountDeleteAgree, setIsAccountDeleteAgree] =
    useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const isNewPasswordValid =
    validations.password.safeParse(newPassword).success;

  return (
    <>
      <h2 className="text-xl font-bold mb-3 sm:text-3xl sm:mb-6">
        회원 정보 수정
      </h2>
      <ul className="flex justify-center w-full sm:max-w-[525px] text-xs sm:text-base sm:font-bold">
        <li className="flex-1">
          <button
            className={`w-full py-3 sm:py-5 sm:px-6 rounded-t-lg border-x border-t transition-colors 
            ${
              isUpdateType === "password"
                ? "bg-white border-gray-300 relative z-20"
                : "bg-gray-100 border-gray-200"
            }`}
            onClick={() => setIsUpdateType("password")}
            type="button"
          >
            비밀번호 변경
          </button>
        </li>
        <li className="flex-1">
          <button
            className={`w-full py-3 sm:py-5 sm:px-6 rounded-t-lg border-x border-t transition-colors
            ${
              isUpdateType === "accountDelete"
                ? "bg-white border-gray-300 relative z-20"
                : "bg-gray-100 border-gray-200 "
            }`}
            onClick={() => setIsUpdateType("accountDelete")}
            type="button"
          >
            회원 탈퇴
          </button>
        </li>
      </ul>
      <form
        className="w-full bg-white sm:max-w-[525px] flex flex-col border rounded-xl border-gray-300 px-5 py-[30px] gap-[10px] relative sm:gap-5  -mt-[4px]"
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpenModal(true);
        }}
      >
        <JoinInput
          label="현재 비밀번호"
          value={password}
          onChange={setPassword}
        />
        {isUpdateType === "password" ? (
          <>
            <JoinInput
              label="새 비밀번호"
              value={newPassword}
              onChange={setNewPassword}
              placeholder="8~24자의 영문, 숫자, 특수문자"
              validation={validations.password}
            />
            <JoinInput
              label="비밀번호 확인"
              value={newPasswordConfirm}
              onChange={setNewPasswordConfirm}
              validation={validations.passwordConfirm(newPassword)}
            />
            <Button
              type="submit"
              highlight
              className="absolute bottom-[-50px] right-0 px-[14px] py-[7.5px] text-xs sm:text-base sm:max-w-40 sm:max-h-12 sm:bottom-[-60px]"
              disabled={
                !password ||
                !isNewPasswordValid ||
                newPassword !== newPasswordConfirm
              }
            >
              비밀번호 변경하기
            </Button>
          </>
        ) : (
          <>
            <h3 className="sm:text-lg sm:font-bold">[회원 탈퇴 안내]</h3>
            <p className="text-xs sm:text-base">
              그동안 <span className="text-flesh-500">SO@</span>을 이용해 주셔서
              감사합니다.
            </p>
            <p className="text-xs sm:text-base">
              회원 탈퇴 시 아래 내용이 적용 됩니다.
            </p>
            <ol className="list-decimal px-[14px] text-xs flex flex-col gap-1 sm:text-base">
              <li>
                예매 내역 및 공연 기록이 삭제되지 않으며, 환불이 필요한 경우
                기존 정책에 따라 처리됩니다.
              </li>
              <li>탈퇴 후에는 같은 계정으로 다시 가입할 수 없습니다.</li>
              <li>
                보유 중인 할인 쿠폰 및 포인트는 모두 소멸되며 복구가 불가능
                합니다.
              </li>
              <li>
                탈퇴 후에는 공연 관리자와의 소통 내역을 조회할 수 없습니다.
              </li>
            </ol>
            <Checkbox
              checked={isAccountDeleteAgree}
              onChange={setIsAccountDeleteAgree}
              className="text-xs sm:text-base"
            >
              <span>위 내용을 확인하였으며, 회원 탈퇴에 동의합니다.</span>
            </Checkbox>
            <Button
              type="submit"
              highlight
              className="absolute bottom-[-50px] right-0 px-[14px] py-[7.5px] text-xs sm:text-base sm:max-w-40 sm:max-h-12 sm:bottom-[-60px]"
              disabled={!password || !isAccountDeleteAgree}
            >
              회원 탈퇴 하기
            </Button>
          </>
        )}
      </form>

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="max-w-[300px] flex flex-col justify-center items-center relative h-[210px] gap-5"
      >
        <>
          <CloseButton
            onClick={() => setIsOpenModal(false)}
            className="absolute top-4 right-4"
          />
          <p className="text-base">
            {isUpdateType === "password"
              ? "비밀번호 변경이 완료되었습니다."
              : "회원 탈퇴가 완료되었습니다."}
          </p>
          <Button
            href="/"
            highlight
            onClick={() => setIsOpenModal(false)}
            size="full"
            className="max-w-20 flex justify-center text-xs font-normal px-[28.5px] py-[7.5px]"
          >
            확인
          </Button>
        </>
      </Modal>
    </>
  );
}
