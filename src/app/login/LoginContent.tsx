"use client";
import { Button } from "@/components/controls/Button";
import { TextInput, Checkbox } from "@/components/controls/Inputs";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

enum UserType {
  TICKETUSER = "TICKETUSER",
  MANAGER = "MANAGER",
}

interface LineStyles {
  width: string;
  left: string;
  right: string;
  height: string;
  top: string;
}

export default function LoginContent() {
  const [userType, setUserType] = useState<UserType>(UserType.TICKETUSER);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = email !== "" && password !== "";

  const lineStyles: LineStyles = {
    width: userType === UserType.TICKETUSER ? "264px" : "264px",
    left: userType === UserType.TICKETUSER ? "1px" : "auto",
    right: userType === UserType.TICKETUSER ? "auto" : "1px",
    height: "1px",
    top: "65px",
  };

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const result = await signIn("credentials", {
      email,
      password,
      userType: userType === UserType.TICKETUSER ? "buyer" : "seller",
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-start pt-8">
      <main className="relative w-full max-w-lg mx-auto p-4 sm:p-0">
        <div className="flex gap-0 -mb-1 text-base sm:font-bold">
          <button
            className={`relative flex-1 py-3 sm:py-5 px-6 rounded-t-lg border-x border-t z-10 transition-colors text-foreground
            ${
              userType === UserType.TICKETUSER
                ? "bg-white border-gray-300"
                : "bg-gray-100 border-gray-200"
            }`}
            onClick={() => setUserType(UserType.TICKETUSER)}
            type="button"
          >
            예매회원 로그인
          </button>
          <button
            className={`relative flex-1 py-3 sm:py-5 px-6 rounded-t-lg border-x border-t -ml-4 transition-colors text-foreground whitespace-nowrap
            ${
              userType === UserType.MANAGER
                ? "bg-white border-gray-300 z-20"
                : "bg-gray-100 border-gray-200 z-0"
            }`}
            onClick={() => setUserType(UserType.MANAGER)}
            type="button"
          >
            공연 관리자 로그인
          </button>
        </div>

        <div className="absolute bg-background z-20" style={lineStyles}></div>

        <div className="bg-white p-8 rounded-b-xl border border-gray-300">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="[&_input]:pl-9 [&_input]:py-4  relative">
              <img
                src="images/icons/mail-icon.svg"
                alt="email-icon"
                className="absolute top-[22px] left-[10px]"
              />
              <TextInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={setEmail}
                className="w-full !pl-9"
              />
            </div>
            <div className="[&_input]:pl-9 [&_input]:py-4  relative">
              <img
                src="images/icons/lock-closed-icon.svg"
                alt="password-icon"
                className="absolute top-[20px] left-[10px]"
              />
              <TextInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
                className="w-full"
              />
            </div>
            <div className="flex justify-end items-center">
              <label className="flex items-center">
                <Checkbox checked={rememberMe} onChange={setRememberMe}>
                  <span className="text-sm text-gray-600">아이디 저장</span>
                </Checkbox>
              </label>
            </div>

            <Button highlight size="full" type="submit" disabled={!isFormValid}>
              로그인
            </Button>
            {error && <p className="text-flesh-400 text-sm">{error}</p>}
          </form>

          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <Link href="/join" className="text-gray-600 hover:text-gray-900">
              회원가입
            </Link>
            <span className="text-gray-300">|</span>
            <a href="/" className="text-gray-600 hover:text-gray-900">
              비밀번호 찾기
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
