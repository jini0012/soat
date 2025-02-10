import AdminMenuItem from "./AdminMenuItem";

export default function AdminMenu() {
  const menuData = [
    {
      title: "회원관리",
      links: [
        { text: "일반회원 조회 및 상태 관리", url: "#" },
        { text: "소극장 관리자 회원 조회 및 상태 관리", url: "#" },
        { text: "신규 소극장 관리자 승인", url: "#" },
      ],
    },
    {
      title: "공연관리",
      links: [
        { text: "공연 조회 및 상태 관리", url: "#" },
        { text: "한줄평 조회 및 상태 관리", url: "#" },
      ],
    },
    {
      title: "컨텐츠관리",
      links: [
        { text: "메인 배너 등록 및 관리", url: "#" },
        { text: "공지사항 등록 및 관리", url: "#" },
        { text: "이용약관 / 개인정보처리방침 관리", url: "#" },
      ],
    },
    {
      title: "시스템 관리",
      links: [
        { text: "관리자 계정 관리", url: "#" },
        { text: "서비스 점검 모드 설정", url: "#" },
        { text: "로그 관리", url: "#" },
      ],
    },
    {
      title: "고객지원",
      links: [
        { text: "1:1 문의 관리", url: "#" },
        { text: "FAQ 관리", url: "#" },
      ],
    },
  ];

  return (
    <>
      <aside>
        <div>
          <p>관리자님</p>
          <img src="" alt="창 닫기" />
        </div>
        <div>
          <img src="" alt="" />
          <a href="#">So@ 바로가기</a>
        </div>
        <p>사이트 관리</p>
        <nav>
          <ul>
            {menuData.map((item, index) => (
              <AdminMenuItem
                key={index}
                title={item.title}
                links={item.links}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <button>로그아웃</button>
    </>
  );
}
