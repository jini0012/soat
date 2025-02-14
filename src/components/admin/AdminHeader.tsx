"use client";
import { ReactNode, useState } from "react";
import AdminMenu from "./AdminMenu";
import { Hamburger } from "./Hamburger";

interface AdminHeaderProps {
  children: ReactNode;
}

export default function AdminHeader({ children }: AdminHeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <>
      {/* 딤드 배경 처리 */}
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-30" // 딤드 배경의 z-index를 AdminMenu보다 낮게 설정
          onClick={handleCloseMenu}
        />
      )}

      <header className="w-[100vw] h-[61px] flex items-center bg-flesh-500 text-white text-[22px] font-semibold z-10 relative">
        <button onClick={handleOpenMenu} className="relative z-30">
          <Hamburger className="fill-white" />
        </button>

        <h1 className="absolute w-[100%] text-center">{children}</h1>
      </header>

      {/* AdminMenu */}
      <div
        className={`${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 bottom-0 w-[240px] transition-transform duration-300 ease-in-out z-40`} // AdminMenu는 z-40으로 설정
      >
        <AdminMenu onClose={handleCloseMenu} />
      </div>
    </>
  );
}
