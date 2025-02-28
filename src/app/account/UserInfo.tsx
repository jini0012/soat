import { Li } from "@/components/account/UserInfoItem";
import Link from "next/link";

interface UserInfoProps {
  username: string;
  email: string;
  phone: string;
  userType: string;
}

export default function UserInfo({
  username,
  email,
  phone,
  userType,
}: UserInfoProps) {
  return (
    <section className="sm:row-span-2 sm:flex sm:flex-col sm:border-r-2 sm:px-6">
      <h2 className="text-sm sm:text-3xl sm:my-6 sm:font-bold">회원 정보</h2>
      <div className="relative">
        <ul className="p-5 rounded-[10px] border-2 border-flesh-200 text-xs sm:h-80 sm:flex sm:flex-col sm:justify-center sm:gap-2 whitespace-nowrap ">
          <Li label="이름" data={username} />
          <Li label="이메일" data={email} />
          <Li
            label="휴대폰"
            data={phone.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3")}
          />
          <Li label="회원 유형" data={userType} />
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
