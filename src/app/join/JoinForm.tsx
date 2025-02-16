import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/controls/Button";
import { JoinInput } from "@/components/controls/Inputs";
import { Checkbox } from "@/components/controls/Inputs";
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
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
  const [verifyNum, setVerifyNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [businessNum, setBusinessNum] = useState("");
  const [isBusinessNumValid, setIsBusinessNumValid] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSendEmail && !isEmailValid) {
      timer = setTimeout(() => {
        setIsSendEmail(false);
      }, 60000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSendEmail, isEmailValid]);

  return (
    <>
      <h2 className="text-xl font-bold mb-3">회원가입</h2>
      <ul className="flex mb-3 justify-center w-full gap-1">
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setUserType("buyer")}
            highlight={userType === "buyer" ? true : false}
            className="w-full h-7 text-xs py-[6.5px] font-normal rounded-[10px]"
          >
            회원
          </Button>
        </li>
        <li className="flex-1">
          <Button
            type="button"
            onClick={() => setUserType("seller")}
            highlight={userType === "seller" ? true : false}
            className="w-full h-7 text-xs py-[6.5px] font-normal whitespace-nowrap rounded-[10px]"
          >
            소극장 관리자
          </Button>
        </li>
      </ul>
      <form className="flex flex-col border-2 rounded-lg border-flesh-200 px-5 py-4 gap-[10px] mb-[14px] relative">
        <JoinInput
          label="이메일"
          type="email"
          value={email}
          onChange={setEmail}
          validation={
            isSendEmail && !isEmailValid
              ? "인증 번호가 이메일로 발송되었습니다. 이메일을 확인해 주세요"
              : ""
          }
          disabled={isSendEmail}
        >
          <Button
            highlight={true}
            type="button"
            onClick={(e) => {
              setIsSendEmail(true);
              (e.target as HTMLButtonElement).textContent = "재전송";
            }}
            size="small"
            className="mb-1 rounded-[100px] py-[2.5px] px-[8.5px]"
            disabled={isSendEmail}
          >
            인증번호 받기
          </Button>
        </JoinInput>
        <JoinInput
          label="인증번호"
          value={verifyNum}
          onChange={setVerifyNum}
          disabled={!isSendEmail || isEmailValid}
          validation={isEmailValid ? "이메일 인증이 완료되었습니다." : ""}
        >
          <Button
            highlight={true}
            type="button"
            onClick={() => {
              setIsEmailValid(true);
            }}
            size="small"
            className="mb-1 rounded-[100px] py-[2.5px] px-[8.5px]"
            disabled={!isSendEmail || isEmailValid}
          >
            확인
          </Button>
        </JoinInput>
        <JoinInput
          label="비밀번호"
          value={password}
          onChange={setPassword}
          placeholder="8~24자의 영문, 숫자, 특수문자"
        />
        <JoinInput
          label="비밀번호 확인"
          value={passwordConfirm}
          onChange={setPasswordConfirm}
        />
        {userType === "buyer" ? (
          <JoinInput
            label="이름"
            value={userName}
            onChange={setUserName}
            placeholder="10자 이내의 국문 또는 영문"
          />
        ) : (
          <>
            <JoinInput
              label="팀명"
              value={teamName}
              onChange={setTeamName}
              placeholder="10자 이내의 국문 또는 영문"
            />
            <JoinInput
              label="관리자명"
              value={managerName}
              onChange={setManagerName}
              placeholder="10자 이내의 국문 또는 영문"
            />
          </>
        )}
        <JoinInput
          label="휴대폰"
          value={userPhone}
          onChange={setUserPhone}
          placeholder="11자 숫자 (‘-’ 문자 제외)"
        />

        {userType === "seller" && (
          <>
            <ul className="flex justify-center mb-2">
              <li className="flex-1">
                <Button
                  type="button"
                  size="small"
                  onClick={() => setIsBusiness(false)}
                  highlight={!isBusiness}
                  className="w-full h-7 text-xs py-[6.5px] font-normal"
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
                  className="w-full h-7 text-xs py-[6.5px] font-normal"
                >
                  사업자 입니다
                </Button>
              </li>
            </ul>
            <JoinInput
              label="사업자등록번호"
              value={businessNum}
              onChange={setBusinessNum}
              disabled={!isBusiness}
              placeholder="10자 숫자 (‘-’ 문자 제외)"
              validation={
                isBusiness && isBusinessNumValid && businessNum !== ""
                  ? "사업자등록번호 인증이 완료되었습니다."
                  : ""
              }
            />
            <Button
              highlight={true}
              size="small"
              className="mb-2 rounded-[100px] py-[2.5px] px-[10.5px]"
              disabled={!isBusiness || isBusinessNumValid}
              onClick={() => {
                setIsBusinessNumValid(true);
              }}
              type="button"
            >
              사업자등록번호 인증
            </Button>
          </>
        )}
        {userType === "buyer" && (
          <Checkbox checked={checkAge} onChange={setCheckAge}>
            <span className="text-xs">저는 만 14세 이상 회원 입니다.</span>
          </Checkbox>
        )}
        <Checkbox checked={checkAgree} onChange={setCheckAgree}>
          <span className="text-[10px]">
            SO@의 <Link href="/">이용 정책</Link> 및{" "}
            <Link href="/">개인정보 처리방침</Link>에 동의합니다.
          </span>
        </Checkbox>
        <Button
          type="submit"
          size="full"
          disabled={
            !isEmailValid ||
            (userType === "buyer" && !checkAge) ||
            (isBusiness && !isBusinessNumValid) ||
            !checkAgree
          }
          className="absolute bottom-[-54px] right-[0px] max-w-[87px] max-h-[30px] text-sm py-[19.5px] px-[7.5px]"
          onClick={() => setIsJoin(true)}
          highlight={true}
        >
          가입 완료
        </Button>
      </form>
    </>
  );
}
