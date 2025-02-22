import React from "react";
import { useState } from "react";
import { Button } from "@/components/controls/Button";
import { Checkbox } from "@/components/controls/Inputs";
import {
  EmailInput,
  PasswordInput,
  NameAndTeamInput,
  PhoneInput,
  BusinessNumInput,
} from "@/components/validation/FormValidation";
import Link from "next/link";

interface JoinFormProps {
  setUserType: (userType: "buyer" | "seller") => void;
  userType: "buyer" | "seller";
  setIsJoin: (isJoin: boolean) => void;
}

export default function JoinForm({
  setUserType,
  userType,
  setIsJoin,
}: JoinFormProps) {
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [checkAge, setCheckAge] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);

  return (
    <>
      <h2 className="text-xl font-bold mb-3 sm:text-3xl sm:mb-6">회원가입</h2>
      <ul className="flex mb-3 justify-center w-[calc(100%-10px)] gap-1 sm:mb-4 sm:max-w-[515px]">
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setUserType("buyer")}
            size="full"
            highlight={userType === "buyer" ? true : false}
            className="h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
          >
            회원
          </Button>
        </li>
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setUserType("seller")}
            size="full"
            highlight={userType === "seller" ? true : false}
            className="h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
          >
            소극장 관리자
          </Button>
        </li>
      </ul>
      <form className="w-full sm:max-w-[525px] flex flex-col border-2 rounded-lg border-flesh-200 px-5 py-4 gap-[10px] relative sm:gap-[20px]">
        <EmailInput />
        <PasswordInput />
        <NameAndTeamInput userType={userType} />
        <PhoneInput />
        {userType === "seller" && (
          <>
            <ul className="flex justify-center mb-2 gap-2">
              <li className="flex-1">
                <Button
                  type="button"
                  size="small"
                  onClick={() => setIsBusiness(false)}
                  highlight={!isBusiness}
                  className="w-full h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
                >
                  사업자가 아닙니다
                </Button>
              </li>
              <li className="flex-1">
                <Button
                  type="button"
                  size="small"
                  onClick={() => setIsBusiness(true)}
                  highlight={isBusiness}
                  className="w-full h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
                >
                  사업자 입니다
                </Button>
              </li>
            </ul>
            {isBusiness && <BusinessNumInput isBusiness={isBusiness} />}
          </>
        )}
        {userType === "buyer" && (
          <Checkbox checked={checkAge} onChange={setCheckAge}>
            <span className="text-xs sm:text-base">
              저는 만 14세 이상 회원 입니다.
            </span>
          </Checkbox>
        )}
        <Checkbox checked={checkAgree} onChange={setCheckAgree}>
          <span className="text-[10px] sm:text-base">
            SO@의 <Link href="/">이용 정책</Link> 및
            <Link href="/">개인정보 처리방침</Link>에 동의합니다.
          </span>
        </Checkbox>
        <Button
          type="submit"
          size="full"
          disabled={(userType === "buyer" && !checkAge) || !checkAgree}
          className="absolute bottom-[-54px] right-0 max-w-24 max-h-[30px] text-sm py-[19.5px] px-[7.5px] sm:text-base sm:max-w-40 sm:max-h-12 sm:bottom-[-60px]"
          onClick={() => setIsJoin(true)}
          highlight={true}
        >
          가입 완료
        </Button>
      </form>
    </>
  );
}
