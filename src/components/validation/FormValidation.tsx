import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/controls/Button";
import { JoinInput } from "@/components/controls/Inputs";
import { z } from "zod";

interface userTypeProps {
  userType?: "buyer" | "seller";
  isBusiness?: boolean;
}

export function EmailInput() {
  const [email, setEmail] = useState("");
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [verifyNum, setVerifyNum] = useState("");

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

  const emailValidation = z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다");

  const emailVerifyNumCheck = z.string().min(1, "인증번호를 입력해주세요");

  const isEmailInputValid = emailValidation.safeParse(email).success;

  return (
    <>
      <JoinInput
        label="이메일"
        type="email"
        value={email}
        onChange={setEmail}
        validation={emailValidation}
        disabled={isSendEmail}
        message={
          isSendEmail
            ? "인증 번호가 이메일로 발송되었습니다. 이메일을 확인해 주세요"
            : ""
        }
      >
        <Button
          highlight={true}
          type="button"
          onClick={(e) => {
            setIsSendEmail(true);
            (e.target as HTMLButtonElement).textContent = "재전송";
          }}
          size="small"
          className="mb-1 py-[2.5px] sm:max-w-32 sm:py-none sm:text-base sm:font-bold"
          disabled={!isEmailInputValid || isSendEmail}
        >
          인증번호 받기
        </Button>
      </JoinInput>
      <JoinInput
        label="인증번호"
        value={verifyNum}
        onChange={setVerifyNum}
        disabled={!isSendEmail || isEmailValid}
        validation={emailVerifyNumCheck}
        message={isEmailValid ? "이메일 인증이 완료되었습니다." : ""}
      >
        <Button
          highlight={true}
          type="button"
          onClick={() => {
            setIsEmailValid(true);
          }}
          size="small"
          className="mb-1 py-[2.5px] sm:max-w-16 sm:py-none sm:text-base sm:font-bold"
          disabled={!isSendEmail || isEmailValid}
        >
          확인
        </Button>
      </JoinInput>
    </>
  );
}

export function PasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const passwordValidation = z
    .string()
    .min(8, "비밀번호는 8자 이상 이어야 합니다")
    .max(24, "비밀번호는 24자 이하여야 합니다")
    .regex(/[a-zA-Z]/, "영문을 포함해야 합니다")
    .regex(/[0-9]/, "숫자를 포함해야 합니다")
    .regex(/[!@#$%^&*]/, "특수문자를 포함해야 합니다");

  const passwordConfirmCheck = z.string().refine((val) => val === password, {
    message: "비밀번호가 일치하지 않습니다",
  });

  return (
    <>
      <JoinInput
        label="비밀번호"
        value={password}
        onChange={setPassword}
        placeholder="8~24자의 영문, 숫자, 특수문자"
        validation={passwordValidation}
      />
      <JoinInput
        label="비밀번호 확인"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
        validation={passwordConfirmCheck}
      />
    </>
  );
}

export function NameAndTeamInput({ userType }: userTypeProps) {
  const [userName, setUserName] = useState("");
  const [teamName, setTeamName] = useState("");

  const nameValidation = z
    .string()
    .min(1, "이름을 입력해주세요")
    .max(10, "10자 이내로 입력해주세요")
    .regex(/^[a-zA-Z가-힣]*$/, "이름은 국문 또는 영문만 허용됩니다");

  const TeamNameValidation = z
    .string()
    .min(1, "팀명을 입력해주세요")
    .max(10, "10자 이내로 입력해주세요")
    .regex(/^[a-zA-Z가-힣]*$/, "팀명은 국문 또는 영문만 허용됩니다");

  return (
    <>
      {userType === "buyer" ? (
        <JoinInput
          label="이름"
          value={userName}
          onChange={setUserName}
          placeholder="10자 이내의 국문 또는 영문"
          validation={nameValidation}
        />
      ) : (
        <>
          <JoinInput
            label="팀명"
            value={teamName}
            onChange={setTeamName}
            placeholder="10자 이내의 국문 또는 영문"
            validation={TeamNameValidation}
          />
          <JoinInput
            label="관리자명"
            value={userName}
            onChange={setUserName}
            placeholder="10자 이내의 국문 또는 영문"
            validation={nameValidation}
          />
        </>
      )}
    </>
  );
}

export function PhoneInput() {
  const [userPhone, setUserPhone] = useState("");
  const phoneValidation = z
    .string()
    .regex(/^[0-9]{11}$/, "올바른 휴대폰 번호 형식이 아닙니다");
  return (
    <JoinInput
      label="휴대폰"
      value={userPhone}
      onChange={setUserPhone}
      placeholder="11자 숫자 (‘-’ 문자 제외)"
      validation={phoneValidation}
    />
  );
}

export function BusinessNumInput({ isBusiness }: userTypeProps) {
  const [businessNum, setBusinessNum] = useState("");
  const [isBusinessNumValid, setIsBusinessNumValid] = useState<boolean>(false);

  const businessNumValidation = z
    .string()
    .regex(/^[0-9]{10}$/, "올바른 사업자등록번호 형식이 아닙니다");
  const isBusinessNumInputValid =
    businessNumValidation.safeParse(businessNum).success;

  return (
    <>
      <JoinInput
        label="사업자등록번호"
        value={businessNum}
        onChange={setBusinessNum}
        placeholder="10자 숫자 (‘-’ 문자 제외)"
        validation={businessNumValidation}
        message={isBusinessNumValid ? "사업자 번호 인증이 완료되었습니다." : ""}
      />
      <Button
        highlight={true}
        size="small"
        className="mb-2 py-[2.5px] sm:text-base sm:font-bold"
        disabled={!isBusinessNumInputValid || isBusinessNumValid}
        onClick={() => {
          setIsBusinessNumValid(true);
        }}
        type="button"
      >
        사업자등록번호 인증
      </Button>
    </>
  );
}
