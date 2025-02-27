"use client";
import { useSession } from "next-auth/react";
import Loading from "../Loading";

interface UserDataProps {
  label: "회원 유형" | "이름" | "이메일" | "휴대폰";
  data: string;
}

function Li({ label, data }: UserDataProps) {
  return (
    <li className="flex gap-4 mb-1">
      <p className="flex-[1] text-end font-bold text-flesh-500 sm:text-lg">
        {label}
      </p>
      <span className="flex-[2] sm:flex-[1.5] sm:text-lg">{data}</span>
    </li>
  );
}

export default function UserInfoItem() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }
  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }
  if (status === "authenticated") {
    return (
      <>
        <Li label="이름" data={session.user.username} />
        <Li label="이메일" data={session.user.email} />
        <Li
          label="휴대폰"
          data={session.user.phone.replace(
            /^(\d{3})(\d{4})(\d{4})$/,
            "$1-$2-$3"
          )}
        />
        <Li
          label="회원 유형"
          data={session.user.userType === "buyer" ? "예매회원" : "공연 관리자"}
        />
      </>
    );
  }
}
