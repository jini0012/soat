import Link from "next/link";
import Li from "@/components/myPage/UserInfoItem";

export default function UserInfo() {
  return (
    <section>
      <h2 className="text-sm">회원 정보</h2>
      <ul className="relative p-5 rounded-[10px] border-2 border-flesh-200 text-xs">
        <Li type="이름" data="userName" />
        <Li type="이메일" data="userEmail" />
        <Li type="휴대폰" data="userPhone" />
        <Li type="회원 유형" data="userType" />
        <li className="absolute bottom-[7px] right-[13px]">
          <Link href={"userUpdate"} className="text-flesh-300 underline">
            회원 정보 수정하기
          </Link>
        </li>
      </ul>
    </section>
  );
}
