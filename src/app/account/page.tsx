"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import UserInfo from "./UserInfo";
import MyReservation from "./MyReservation";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { status } = useSession();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (status !== "authenticated" && status !== "loading") {
      router.push("/login");
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/account/me");
        const { user } = response.data;
        if (user.userType === "seller") {
          router.push("/manager");
          setUserType("공연 관리자");
        } else {
          setUserType("예매 회원");
        }
        setUsername(user.username);
        setEmail(user.email);
        setPhone(user.phoneNumber);
      } catch (error) {
        console.error("사용자 정보 조회 오류:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <main
        className={`grid relative m-auto w-full pt-[10px] px-[30px] sm:grid-flow-col sm:grid-rows-2 sm:gap-4 justify-center`}
      >
        <UserInfo
          username={username}
          email={email}
          phone={phone}
          userType={userType}
        />
        <MyReservation />
      </main>
    </>
  );
}
