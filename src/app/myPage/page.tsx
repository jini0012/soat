import React from "react";
import Header from "@/components/Header";
import UserInfo from "./UserInfo";

export default function page() {
  return (
    <>
      <Header />
      <main
        className={`relative m-auto w-full max-w-[360px] pt-[10px] px-[30px]`}
      >
        <UserInfo />
      </main>
    </>
  );
}
