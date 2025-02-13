import AdminMenuItem from "@/components/admin/AdminMenuItem";
import Link from "next/link";

export default function AdminMenu() {
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
        // { text: "공지사항 등록 및 관리", url: "#" },
        {
          text: "이용약관 / 개인정보처리방침 관리",
          url: "terms-privacy-settings",
        },
      ],
    },
    {
      title: "시스템 관리",
      links: [
        { text: "soat 관리자 계정 관리", url: "/admin/site-admin-list" },
        { text: "서비스 점검 모드 설정", url: "/admin/maintenance-mode" },
        // { text: "로그 관리", url: "#" },
      ],
    },
    // {
    //   title: "고객지원",
    //   links: [
    //     { text: "1:1 문의 관리", url: "#" },
    //     { text: "FAQ 관리", url: "#" },
    //   ],
    // },
  ];

  return (
    <>
      <aside className="w-[240px] h-[100vh] bg-white fixed top-0 left-0 ">
        <div className="w-[100%] h-[61px] bg-flesh-500 flex items-center justify-center">
          <p className="text-[18px] font-semibold text-white">관리자님</p>
        </div>
        <div className="border-b-[1.5px] border-b-flesh-500 h-[35px] flex items-center">
          <Link href="#" className="no-underline text-flesh-500  px-4">
            So@ 바로가기
          </Link>
        </div>
        <nav className="flex flex-col items-start px-[6%]">
          <p className="text-[12px] text-gray-500 mt-2 mb-2">사이트 관리</p>
          <ul className="flex flex-col gap-4 w-[100%]">
            {menuData.map((item, index) => (
              <AdminMenuItem
                key={index}
                title={item.title}
                links={item.links}
              />
            ))}
          </ul>
          <button className="w-[100%] h-[33px] bg-flesh-500 text-white  mt-[38px]">
            로그아웃
          </button>
        </nav>
      </aside>
    </>
  );
}
