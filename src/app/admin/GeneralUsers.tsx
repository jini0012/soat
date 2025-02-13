import AdminHeader from "../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import GeneralUsersTable from "@/components/admin/GeneralUsersTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
export default function GeneralUsers() {
  const GeneralUserData = [
    {
      email: "dnjs1111@soat.com",
      name: "김예원",
      joinDate: "2022.10.30",
    },
    {
      email: "asf134@soat.com",
      name: "최예린",
      joinDate: "2025.01.20",
    },
    {
      email: "hyunjin88@soat.com",
      name: "현진우",
      joinDate: "2024.09.18",
    },
    {
      email: "yujin99@soat.com",
      name: "유진서",
      joinDate: "2023.05.07",
    },
    {
      email: "seoyeon45@soat.com",
      name: "서연희",
      joinDate: "2024.08.28",
    },
    {
      email: "donghae78@soat.com",
      name: "동해준",
      joinDate: "2024.06.18",
    },
    {
      email: "jisoo_h@soat.com",
      name: "지수현",
      joinDate: "2024.03.29",
    },
    {
      email: "minseok92@soat.com",
      name: "민석훈",
      joinDate: "2024.11.22",
    },
    {
      email: "haneulsky@soat.com",
      name: "하늘채",
      joinDate: "2024.12.25",
    },
    {
      email: "kangmin23@soat.com",
      name: "강민우",
      joinDate: "2024.12.03",
    },
  ];

  return (
    <>
      <AdminHeader>회원관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>일반회원 조회 및 상태 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <ListTitle>일반회원 목록</ListTitle>
          <form action="">
            <AdminSearchInput
              id="generalUserSearchInput"
              name="generalUserSearch"
              label="일반회원 조회하기"
            />
            <QueryButton />
          </form>
        </div>
        <GeneralUsersTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
