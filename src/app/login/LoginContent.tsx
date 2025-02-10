"use client";
import { Button } from "@/components/controls/Button";
import { TextInput, Checkbox } from "@/components/controls/Inputs";
import React, { useState } from "react";

export default function LoginContent() {
  const [userType, setUserType] = useState("TICKETUSER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const lineStyles = {
    width: userType === "TICKETUSER" ? "264px" : "264px",
    left: userType === "TICKETUSER" ? "0" : "auto",
    right: userType === "TICKETUSER" ? "auto" : "0",
    height: "1px",
    top: "65px",
  };

  return (
    <div className="w-full h-screen flex justify-center items-start pt-8">
      <main className="relative w-full max-w-lg mx-auto">
        <div className="flex gap-0 -mb-1">
          <button
            className={`relative flex-1 py-5 px-6 rounded-t-lg border z-10 transition-colors text-foreground
            ${
              userType === "TICKETUSER"
                ? "bg-white border-gray-300"
                : "bg-gray-100 border-gray-200"
            }`}
            onClick={() => setUserType("TICKETUSER")}
          >
            예매회원 로그인
          </button>
          <button
            className={`relative flex-1 py-3 px-6 rounded-t-lg border -ml-4 transition-colors text-foreground
            ${
              userType === "MANAGER"
                ? "bg-white border-gray-300 z-20"
                : "bg-gray-100 border-gray-200 z-0"
            }`}
            onClick={() => setUserType("MANAGER")}
          >
            공연 관리자 로그인
          </button>
        </div>

        <div className="absolute bg-background z-20" style={lineStyles}></div>

        <div className="bg-white p-8 rounded-b-xl border border-gray-300">
          <form className="space-y-4">
            <div>
              <TextInput
                type="email"
                placeholder="이메일"
                value={email}
                onChange={setEmail}
                className="w-full"
              />
            </div>
            <div>
              <TextInput
                type="password"
                placeholder="비밀번호"
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
            <Button highlight size="full" type="submit">
              로그인
            </Button>
          </form>

          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              회원가입
            </a>
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
