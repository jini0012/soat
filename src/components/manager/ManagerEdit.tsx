"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { JoinInput } from "@/components/controls/Inputs";
import { Button } from "../controls/Button";
import axios from "axios";
import { validations } from "@/utils/validations";

export default function ManagerEdit() {
  const [teamName, setTeamName] = useState<string>("");
  const [businessNum, setBusinessNum] = useState<string>("");
  const [managerName, setManagerName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [originalData, setOriginalData] = useState({
    teamName,
    managerName,
    email,
  });
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(true);
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
        setOriginalData({
          teamName: user.teamName,
          managerName: user.managerName,
          email: user.email,
        });
      } catch (error) {
        console.error("사용자 정보 조회 오류:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const isChanged =
      teamName !== originalData.teamName ||
      managerName !== originalData.managerName;

    const isValid =
      validations.teamName.safeParse(teamName).success &&
      validations.managerName.safeParse(managerName).success;

    setIsEditBtnDisabled(!(isChanged && isValid));
  }, [teamName, managerName]);

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
        className="m-auto mt-5 w-full max-w-lg bg-white p-6 space-y-5 sm:space-y-10 rounded-lg border shadow-md relative"
        onSubmit={handleSubmit}
      >
        <JoinInput
          label="팀명"
          value={teamName}
          onChange={setTeamName}
          vertical
          validation={validations.teamName}
          placeholder="10자 이내의 국문 또는 영문"
          max={10}
        />
        <JoinInput
          label="관리자명"
          value={managerName}
          onChange={setManagerName}
          placeholder="10자 이내의 국문 또는 영문"
          validation={validations.managerName}
          max={10}
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
              disabled={isEditBtnDisabled}
            >
              수정완료
            </Button>
          </li>
        </ul>
      </form>
    </>
  );
}
