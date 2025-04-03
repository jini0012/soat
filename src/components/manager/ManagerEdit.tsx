"use client";
import React, { useState, useEffect } from "react";
import { JoinInput } from "@/components/controls/Inputs";
import { Button } from "../controls/Button";
import axios from "axios";

export default function ManagerEdit() {
  const [teamName, setTeamName] = useState<string>("");
  const [businessNum, setBusinessNum] = useState<string>("");
  const [managerName, setManagerName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/account/me");
        const { user } = response.data;
        const businessNumData: string = user.businessNum;
        setTeamName(user.teamName);
        setBusinessNum(
          `${businessNumData.slice(0, 3)}-${businessNumData.slice(
            3,
            5
          )}-${businessNumData.slice(5, 10)}`
        );
        setManagerName(user.managerName);
        setEmail(user.email);
      } catch (error) {
        console.error("사용자 정보 조회 오류:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <form
        action=""
        className="m-auto w-full bg-white sm:max-w-[525px] flex flex-col px-16 py-14 gap-[10px] sm:gap-[20px] sm:px-0 relative sm:space-y-2"
      >
        <div className="grid gap-2 grid-cols-2 items-center justify-items-center">
          <img
            src="https://placehold.co/100x100"
            alt=""
            className="rounded-full row-span-2 size-full min-w-[96px] max-w-48 aspect-ratio-[1/1] object-cover"
          />
          <Button
            type="button"
            highlight
            className="font-normal max-w-32 text-sm sm:max-w-48 sm:text-base sm:font-bold "
          >
            프로필 이미지 변경하기
          </Button>
          <span className="text-xs self-start sm:text-sm">
            파일 확장자 어쩌구 저쩌구
          </span>
        </div>
        <JoinInput
          label="상호명"
          value={teamName}
          onChange={setTeamName}
          disabled
          vertical
        />
        <JoinInput
          label="사업자번호"
          value={businessNum}
          onChange={setBusinessNum}
          disabled
          vertical
        />
        <JoinInput
          label="대표자(관리자) 성명"
          value={managerName}
          onChange={setManagerName}
          disabled
          vertical
        />
        <JoinInput
          label="주소"
          value={address}
          onChange={setAddress}
          disabled
          vertical
        />
        <JoinInput
          label="현재 가입된 이메일"
          value={email}
          onChange={setEmail}
          disabled
          vertical
        >
          <Button
            size="small"
            type="button"
            highlight
            className="absolute left-44 sm:left-32 font-normal sm:font-bold"
          >
            이메일(아이디) 변경하기
          </Button>
        </JoinInput>
        <ul className="mt-7 flex justify-end gap-2">
          <li>
            <Button
              size="full"
              className="max-w-24 max-h-[30px] text-sm px-[7.5px] sm:text-base sm:max-w-40 sm:max-h-12 font-normal sm:font-bold"
              type="button"
            >
              뒤로가기
            </Button>
          </li>
          <li>
            <Button
              size="full"
              className="max-w-24 max-h-[30px] text-sm px-[7.5px] sm:text-base sm:max-w-40 sm:max-h-12 font-normal sm:font-bold"
              type="submit"
              highlight
            >
              수정완료
            </Button>
          </li>
        </ul>
      </form>
    </>
  );
}
