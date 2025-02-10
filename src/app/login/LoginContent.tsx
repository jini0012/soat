"use client";
import { Button } from "@/components/controls/Button";
import { TextInput, Checkbox } from "@/components/controls/Inputs";
import React, { useState } from "react";

export default function LoginContent() {
  const [userType, setUserType] = useState("TICKETUSER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main
      className={`mt-[100px] relative mx-auto  flex flex-col items-center  border border-[#c4c4c4] rounded-md`}
    >
      <ul className="flex gap-2 absolute max-w-[410px] justify-between top-[-50px]">
        <li
          className={`text-black cursor-pointer transition-colors text-center border border-[#c4c4c4] rounded-md ${
            userType === "TICKETUSER" ? "bg-white-100" : "bg-[#F2F2F2]"
          }`}
          onClick={() => setUserType("TICKETUSER")}
          role="button"
          tabIndex={0}
        >
          예매회원 로그인
        </li>
        <span className="text-red-500"></span>
        <li
          className={`text-black cursor-pointer transition-colors text-center border border-[#c4c4c4] rounded-md ${
            userType === "MANAGER" ? "bg-white-100" : "bg-[#F2F2F2]"
          }`}
          onClick={() => setUserType("MANAGER")}
          role="button"
          tabIndex={0}
        >
          공연 관리자 로그인
        </li>
      </ul>
      <form className="flex flex-col gap-[10px] w-full px-8 py-6">
        <TextInput
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="e-mail"
          className="w-full"
        />
        <TextInput
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Password"
          className="w-full"
        />
        <span></span>
        <Checkbox checked={rememberMe} onChange={setRememberMe}>
          아이디 저장
        </Checkbox>
        <Button highlight size="full" type="submit">
          로그인
        </Button>
      </form>
      <ul className="flex gap-3">
        <li>
          <a href="/">회원가입</a>
        </li>
        <li className="before:content-[' | '] before:mx-2 before:text-gray-400">
          <a href="/">비밀번호 찾기</a>
        </li>
      </ul>
    </main>
  );
}
