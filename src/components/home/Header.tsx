"use client";
import React, { useState } from "react";
import { SearchInput } from "../controls/Inputs";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log("검색이되었습니다! ");
    // 추후 api 호출 hook 추가예정
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* 메인 헤더 */}
      <div className="px-4 md:px-[140px] py-4 md:py-[40px] flex items-center justify-between">
        {/* 로고와 검색 영역 */}
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
          
          {/* 데스크톱 검색 영역 */}
          <div className="hidden md:block">
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
        </div>

        {/* 데스크톱 네비게이션 */}
        <ul className="hidden md:flex gap-[20px]">
          <li className="cursor-pointer">
            <Link href="./login" className="text-black flex gap-[5px]">
              <img src="/images/icons/mypage-login-icon.svg" alt="로그인" />
              로그인
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="./join" className="text-black flex gap-[5px]">
              <img src="images/icons/join-icon.svg" alt="회원가입" />
              회원가입
            </Link>
          </li>
        </ul>

        {/* 모바일 메뉴 버튼 */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-white shadow-lg z-50">
          <div className="p-4">
            {/* 모바일 검색 */}
            <div className="relative mb-4">
              <SearchInput
                label=""
                placeholder="검색 할 내용을 입력해주세요!"
                value={searchValue}
                onChange={setSearchValue}
                onSearch={handleSearch}
                className="w-full"
                inputClassName="h-[43.47px] px-[20px]"
              />
              <img
                src="images/icons/search-icon.svg"
                alt="검색"
                onClick={handleSearch}
                className="w-[25px] absolute right-0 top-2 cursor-pointer"
              />
            </div>

            {/* 모바일 메뉴 항목들 */}
            <ul className="space-y-4">
              <li className="cursor-pointer">
                <Link 
                  href="./login" 
                  className="text-black flex gap-[5px] items-center p-2 hover:bg-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  <img src="/images/icons/mypage-login-icon.svg" alt="로그인" />
                  로그인
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link 
                  href="./join" 
                  className="text-black flex gap-[5px] items-center p-2 hover:bg-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  <img src="images/icons/join-icon.svg" alt="회원가입" />
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}