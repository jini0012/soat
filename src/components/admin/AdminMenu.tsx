"use client";
import AdminMenuItem from "@/components/admin/AdminMenuItem";
import Link from "next/link";

interface AdminMenuProps {
  onClose: () => void;
  menuData: {
    title: string;
    links: { text: string; url: string }[];
  }[];
}

export default function AdminMenu({ onClose, menuData }: AdminMenuProps) {
  return (
    <>
      <aside className="w-[240px] h-[100vh] bg-white fixed top-0 left-0 ">
        <div className="w-[100%] h-[61px] bg-flesh-400 flex items-center justify-center relative">
          <p className="text-lg font-semibold text-white">관리자님</p>
          <button onClick={onClose} className="absolute right-4">
            <img
              src="/images/icons/close-btn.svg"
              alt="메뉴 닫기"
              className="w-[17px]"
            />
          </button>
        </div>
        <div className="border-b-[1.5px] border-b-flesh-500 h-[35px] flex items-center px-[6%]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2.66667H2.66667C2.22464 2.66667 1.80072 2.84226 1.48816 3.15482C1.17559 3.46738 1 3.89131 1 4.33333V12.6667C1 13.1087 1.17559 13.5326 1.48816 13.8452C1.80072 14.1577 2.22464 14.3333 2.66667 14.3333H11C11.442 14.3333 11.866 14.1577 12.1785 13.8452C12.4911 13.5326 12.6667 13.1087 12.6667 12.6667V9.33333M9.33333 1H14.3333M14.3333 1V6M14.3333 1L6 9.33333"
              stroke="#FC4C13"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Link href="/home" className="no-underline text-flesh-500  px-2">
            So@ 바로가기
          </Link>
        </div>
        <nav className="flex flex-col items-start px-[6%]">
          <p className="text-xs text-gray-500 mt-2 mb-2">사이트 관리</p>
          <ul className="flex flex-col gap-4 w-full">
            {menuData.map((item, index) => (
              <AdminMenuItem
                key={index}
                title={item.title}
                links={item.links}
              />
            ))}
          </ul>
          <button className="w-full h-[33px] rounded-md bg-flesh-400 text-white mt-[38px] hover:bg-flesh-500 active:bg-flesh-600">
            로그아웃
          </button>
        </nav>
      </aside>
    </>
  );
}
