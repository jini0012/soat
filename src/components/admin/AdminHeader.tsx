"use client";
import { ReactNode, useState } from "react";
import AdminMenu from "./AdminMenu";
import { Hamburger } from "./Hamburger";

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
          <Hamburger className="fill-white" />
        </button>

        <h1 className="absolute w-[100%] text-center">{children}</h1>
      </header>

      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-20"
          onClick={() => setIsOpenMenu(false)}
        />
      )}

      <div className={`${isOpenMenu ? "block" : "hidden"} relative z-40`}>
        <AdminMenu />
      </div>
    </>
  );
}
