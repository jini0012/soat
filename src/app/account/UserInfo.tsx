"use client";
import React, { useState, useEffect } from "react";
import { Li } from "@/components/account/UserInfoItem";
import Link from "next/link";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    userType: "",
  });

  useEffect(() => {
    if (status !== "authenticated" && status !== "loading") {
      router.push("/login");
    }
    if (session && session.user.userType === "seller") {
      router.push("/manager");
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/account/me");
        const { user } = response.data;
        setUserInfo({
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber,
          userType: user.userType === "seller" ? "공연 관리자" : "예매 회원",
        });
      } catch (error) {
        console.error("사용자 정보 조회 오류:", error);
      }
    };

    fetchUser();
  }, [status]);

  return (
    <section className="sm:row-span-2 sm:flex sm:flex-col sm:border-r-2 sm:px-6">
      <h2 className="text-sm sm:text-3xl sm:my-6 sm:font-bold">회원 정보</h2>
      <div className="relative">
        <ul className="p-5 rounded-[10px] w-full border-2 border-flesh-200 text-xs sm:h-80 sm:flex sm:flex-col sm:justify-center sm:gap-2 whitespace-nowrap sm:px-3 md:px-5">
          <Li label="이름" data={userInfo.username} />
          <Li label="이메일" data={userInfo.email} />
          <Li
            label="휴대폰"
            data={userInfo.phoneNumber.replace(
              /^(\d{3})(\d{4})(\d{4})$/,
              "$1-$2-$3"
            )}
          />
          <Li label="회원 유형" data={userInfo.userType} />
        </ul>
        <Link
          href="/account/edit"
          className="text-flesh-300 underline hover:text-flesh-500 active:text-flesh-800 focus-visible:outline-none focus-visible:text-flesh-500 sm:text-lg absolute bottom-[7px] right-[13px]"
        >
          회원 정보 수정
        </Link>
      </div>
    </section>
  );
}
