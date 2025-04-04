"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { JoinInput } from "@/components/controls/Inputs";
import { Button } from "../controls/Button";
import axios from "axios";

export default function ManagerEdit() {
  const [teamName, setTeamName] = useState<string>("");
  const [businessNum, setBusinessNum] = useState<string>("");
  const [managerName, setManagerName] = useState("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/account/me");
        const { user } = response.data;
        const businessNumData: string = user.businessNum;
        setTeamName(user.teamName);
        if (businessNumData) {
          setBusinessNum(
            businessNumData.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3")
          );
        } else {
          setBusinessNum("사업자가 아닙니다.");
        }
        setManagerName(user.managerName);
        setEmail(user.email);
      } catch (error) {
        console.error("사용자 정보 조회 오류:", error);
      }
    };

    fetchUser();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.patch("/api/manager/edit", {
        teamName,
        managerName,
      });
      console.log("수정 완료:", response.data);
      router.push("/manager");
    } catch (error) {
      console.error("수정 오류:", error);
    }
  }

  return (
    <>
      <form
        className="m-auto mt-5 w-full max-w-lg bg-white p-6 space-y-4 rounded-lg border shadow-md relative"
        onSubmit={handleSubmit}
      >
        <JoinInput
          label="팀명"
          value={teamName}
          onChange={setTeamName}
          vertical
        />
        <JoinInput
          label="관리자명"
          value={managerName}
          onChange={setManagerName}
          vertical
        />
        <JoinInput
          label="이메일"
          value={email}
          onChange={setEmail}
          disabled
          vertical
        >
          <Button
            size="small"
            type="button"
            highlight
            className="absolute right-6  font-normal sm:font-bold"
          >
            이메일(아이디) 변경하기
          </Button>
        </JoinInput>

        <JoinInput
          label="사업자등록번호"
          value={businessNum}
          onChange={setBusinessNum}
          disabled
          vertical
        />

        <p className="text-sm sm:text-base text-gray-500">
          * 사업자등록번호는 변경이 불가합니다.
        </p>
        <ul className="mt-7 flex justify-end gap-2">
          <li>
            <Button
              size="full"
              className="max-w-24 max-h-[30px] text-sm px-[7.5px] sm:text-base sm:max-w-40 sm:max-h-12 font-normal sm:font-bold"
              type="button"
              onClick={() => router.back()}
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
              disabled={!teamName || !managerName}
            >
              수정완료
            </Button>
          </li>
        </ul>
      </form>
    </>
  );
}
