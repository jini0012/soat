import React, { useState } from "react";
import { SearchInput } from "../controls/Inputs";
import Link from "next/link";

export default function Header() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    console.log("검색이되었습니다! ");
    // 추후 api 호출 hook 추가예정
  };

  return (
    <header className="px-[140px] py-[40px] flex items-center justify-between">
      <div className="flex relative">
        <h1>
          <Link href="/">
            <img
              src="images/icons/logo-temp.svg"
              alt="soat"
              className="w-[93px]"
            />
          </Link>
        </h1>
        <SearchInput
          label=""
          placeholder="검색 할 내용을 입력해주세요!"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          className="w-[300px]"
          inputClassName="h-[43.47px] px-[20px]"
        />
        <img
          src="images/icons/search-icon.svg"
          alt="검색"
          onClick={handleSearch}
          className="w-[25px] absolute right-0 top-2 cursor-pointer"
        />
      </div>
      <ul className="flex gap-[20px] ">
        <li className="cursor-pointer">
          <Link href="./login" className="text-black flex gap-[5px]">
            <img src="/images/icons/mypage-login-icon.svg" alt="로그인" />
            로그인
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link href="./join" className="text-black flex gap-[5px]">
            <img src="images/icons/join-icon.svg" alt="로그인" />
            회원가입
          </Link>
        </li>
      </ul>
    </header>
  );
}
