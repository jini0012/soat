"use client";
import { useState } from "react";

import JoinGreeting from "./JoinGreeting";
import JoinForm from "./JoinForm";
import Header from "@/components/Header";

export default function page() {
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer");
  const [isJoin, setIsJoin] = useState<boolean>(false); // 회원가입 완료 시 회원가입완료 컴포넌트를 보여줍니다.
  return (
    <>
      <Header />
      <main
        className={`relative m-auto w-[360px] flex flex-col items-center px-[30px] py-6 h-full ${
          isJoin && "h-[100vh] max-h-[562px] justify-center text-center"
        }`}
      >
        {!isJoin && (
          <JoinForm
            setUserType={setUserType}
            userType={userType}
            setIsJoin={setIsJoin}
          />
        )}
        {isJoin && <JoinGreeting userType={userType} />}
      </main>
    </>
  );
}
