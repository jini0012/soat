"use client";
import { ReactNode, useState } from "react";
import AdminMenu from "./AdminMenu";
import { Hamburger } from "./Hamburger";
import Link from "next/link";

interface AdminHeaderProps {
  children: ReactNode;
}

export default function AdminHeader({ children }: AdminHeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuData = [
    {
      title: "회원 관리",
      links: [
        { text: "회원 조회 및 상태 관리", url: "/admin" },
        {
          text: "소극장 관리자 조회 및 상태 관리",
          url: "/admin/theater-admin-users",
        },
        {
          text: "신규 소극장 관리자 승인",
          url: "/admin/theater-admin-approval",
        },
      ],
    },
    {
      title: "공연 관리",
      links: [
        { text: "공연 조회 및 상태 관리", url: "/admin/performance-list" },
        { text: "한줄평 조회 및 상태 관리", url: "/admin/review-list" },
      ],
    },
    {
      title: "컨텐츠 관리",
      links: [
        { text: "배너 관리", url: "/admin/banner-list" },
        {
          text: "이용약관/개인정보처리방침 관리",
          url: "/admin/terms-privacy-settings",
        },
      ],
    },
    {
      title: "시스템 관리",
      links: [
        { text: "관리자 계정 관리", url: "/admin/site-admin-list" },
        { text: "서비스 점검 모드 설정", url: "/admin/maintenance-mode" },
      ],
    },
  ];

  return (
    <>
      {/* 딤드 배경 처리 */}
      {isOpenMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-30"
          onClick={() => setIsOpenMenu(false)}
        />
      )}

      <header className="w-[100vw] h-[61px] flex items-center bg-flesh-500 text-white text-[22px] font-semibold z-10 relative ">
        <button
          onClick={() => setIsOpenMenu(true)}
          className="relative z-30 block lg:hidden"
        >
          <Hamburger className="fill-white" />
        </button>

        {/* 데스크탑 헤더 */}
        <div className="absolute w-[100%] text-center hidden lg:flex justify-between items-center px-[6%]">
          <div className="flex items-center">
            <Link href="/admin">
              <h1 className="text-[25px] text-white font-semibold">Admin</h1>
            </Link>
          </div>
          <div className="flex gap-5">
            <Link href="/home" className=" text-white text-[14px]">
              쏘앳 바로가기
            </Link>
            <button className="text-[14px]">로그아웃</button>
          </div>
        </div>

        <h1 className="absolute w-[100%] text-center lg:hidden">{children}</h1>
      </header>

      {/* 데스크탑용 메뉴 */}
      <section className="px-[6%] h-full  items-center bg-zinc-100 hidden lg:flex shadow-md ">
        <h2 className="sr-only">관리자 메뉴</h2>
        {menuData.map((item, index) => (
          <div key={index} className="relative group">
            <h3 className="text-zinc-600 text-sm font-semibold hover:font-bold cursor-pointer hover:bg-zinc-400 hover:text-white border-r border-white py-3 px-6">
              {item.title}
            </h3>
            {/* 서브 메뉴 */}
            <ul className="absolute left-0 hidden bg-white shadow-md group-hover:block rounded-sm">
              {item.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="p-2 text-xs w-[177px] border border-gray-300 border-t-0  hover:text-flesh-400 hover:font-semibold active:font-semibold active:text-flesh-600"
                >
                  <Link href={link.url} className="no-underline text-inherit">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* AdminMenu - 모바일용 메뉴 */}
      <div
        className={`${
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 bottom-0 w-[240px] transition-transform duration-300 ease-in-out z-40`}
      >
        <AdminMenu onClose={() => setIsOpenMenu(false)} menuData={menuData} />
      </div>
    </>
  );
}
