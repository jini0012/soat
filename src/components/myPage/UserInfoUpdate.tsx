"use client";
import React, { useState } from "react";
import { Button } from "../controls/Button";
import { JoinInput } from "@/components/controls/Inputs";
import { Checkbox } from "@/components/controls/Inputs";

export default function UserInfoUpdate() {
  const [isUpdateType, setIsUpdateType] = useState<string>("password");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  return (
    <>
      <h2 className="text-sm">회원 정보 수정</h2>
      <ul className="flex my-[14px] justify-center w-full gap-1">
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setIsUpdateType("password")}
            highlight={isUpdateType === "password" ? true : false}
            className="w-full h-7 text-xs py-[6.5px] font-normal rounded-[10px]"
          >
            비밀번호 변경
          </Button>
        </li>
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setIsUpdateType("accountDelete")}
            highlight={isUpdateType === "accountDelete" ? true : false}
            className="w-full h-7 text-xs py-[6.5px] font-normal whitespace-nowrap rounded-[10px]"
          >
            회원 탈퇴
          </Button>
        </li>
      </ul>
      <form className="flex flex-col border-2 rounded-lg border-flesh-200 px-5 py-[30px] gap-[10px] relative">
        <JoinInput
          label="현재 비밀번호"
          value={password}
          onChange={setPassword}
        />
        <JoinInput
          label="새 비밀번호"
          value={newPassword}
          onChange={setNewPassword}
          placeholder="8~24자의 영문, 숫자, 특수문자"
        />
        <JoinInput
          label="비밀번호 확인"
          value={newPasswordConfirm}
          onChange={setNewPasswordConfirm}
        />
        <Button
          type="submit"
          highlight
          className="absolute bottom-[-50px] right-0 px-[14px] py-[7.5px] text-xs font-normal"
          disabled={!password || !newPassword || !newPasswordConfirm}
        >
          비밀번호 변경하기
        </Button>
      </form>
    </>
  );
}
