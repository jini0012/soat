import Li from "@/components/account/UserInfoItem";
import Link from "next/link";

export default function UserInfo() {
  return (
    <section className="sm:row-span-2 sm:flex sm:flex-col sm:border-r-2 sm:pr-6">
      <h2 className="text-sm sm:text-3xl sm:my-6 sm:font-bold">회원 정보</h2>
      <ul className="relative p-5 rounded-[10px] border-2 border-flesh-200 text-xs sm:h-80 sm:flex sm:flex-col sm:justify-center sm:gap-2 whitespace-nowrap ">
        <Li label="이름" data="userName" />
        <Li label="이메일" data="userEmail" />
        <Li label="휴대폰" data="userPhone" />
        <Li label="회원 유형" data="userType" />
        <li className="absolute bottom-[7px] right-[13px]">
          <Link
            href="/account/edit"
            className="text-flesh-300 underline hover:text-flesh-500 active:text-flesh-800 focus-visible:outline-none focus-visible:text-flesh-500 sm:text-lg"
          >
            회원 정보 수정
          </Link>
        </li>
      </ul>
    </section>
  );
}
