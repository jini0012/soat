"use client";
import AdminMenuItem from "@/components/admin/AdminMenuItem";
import Link from "next/link";

interface AdminMenuProps {
  onClose: () => void;
}

export default function AdminMenu({ onClose }: AdminMenuProps) {
  const menuData = [
    {
      title: "회원관리",
      links: [
        {
          text: "일반회원 조회 및 상태 관리",
          url: "/admin",
        },
        {
          text: "소극장 관리자 회원 조회 및 상태 관리",
          url: "/admin/theater-admin-users",
        },
        {
          text: "신규 소극장 관리자 승인",
          url: "/admin/theater-admin-approval",
        },
      ],
    },
    {
      title: "공연관리",
      links: [
        { text: "공연 조회 및 상태 관리", url: "/admin/performance-list" },
        { text: "한줄평 조회 및 상태 관리", url: "/admin/review-list" },
      ],
    },
    {
      title: "컨텐츠관리",
      links: [
        { text: "메인 배너 등록 및 관리", url: "/admin/banner-list" },
        {
          text: "이용약관 / 개인정보처리방침 관리",
          url: "terms-privacy-settings",
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
        <div className="border-b-[1.5px] border-b-flesh-500 h-[35px] flex items-center">
          <Link href="" className="no-underline text-flesh-500  px-4">
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
