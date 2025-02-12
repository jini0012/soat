"use client";
import { ReactNode, useState } from "react";
import AdminMenu from "./AdminMenu";

interface AdminHeaderProps {
  children: ReactNode;
}

export default function AdminHeader({ children }: AdminHeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false); //관리자 메뉴 토글 상태 관리

  function handleToggleMenu() {
    setIsOpenMenu((prev) => !prev);
    console.log("클릭성공");
  }

  return (
    <>
      <header className="w-[100vw] h-[61px] flex items-center bg-flesh-500 text-white text-[22px] font-semibold">
        <button onClick={handleToggleMenu} className="relative z-30">
          <img
            src="/images/icons/menu.svg"
            alt="관리자 메뉴 열기"
            className="pl-4"
          />
        </button>

        <h1 className="absolute w-[100%] text-center">{children}</h1>
      </header>

      {/* 오버레이를 먼저 렌더링 (가장 낮은 z-index) */}
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-20"
          onClick={() => setIsOpenMenu(false)}
        />
      )}

      {/* AdminMenu를 나중에 렌더링 (가장 높은 z-index) */}
      <div className={`${isOpenMenu ? "block" : "hidden"} relative z-40`}>
        <AdminMenu />
      </div>
    </>
  );
}
