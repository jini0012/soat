"use client";
import { useState } from "react";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import TheaterAdminUsersTable from "@/components/admin/TheaterAdminUsersTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
import { Select } from "@/components/controls/Select";

export default function TheaterAdminUsersPage() {
  const GeneralUserData = [
    {
      email: "dnjs1111@soat.com",
      name: "김예원",
      joinDate: "2022.10.30",
      joinType: "사업자",
    },
    {
      email: "asf134@soat.com",
      name: "최예린",
      joinDate: "2025.01.20",
      joinType: "개인",
    },
    {
      email: "hyunjin88@soat.com",
      name: "현진우",
      joinDate: "2024.09.18",
      joinType: "개인",
    },
    {
      email: "yujin99@soat.com",
      name: "유진서",
      joinDate: "2023.05.07",
      joinType: "사업자",
    },
    {
      email: "seoyeon45@soat.com",
      name: "서연희",
      joinDate: "2024.08.28",
      joinType: "개인",
    },
    {
      email: "donghae78@soat.com",
      name: "동해준",
      joinDate: "2024.06.18",
      joinType: "개인",
    },
    {
      email: "jisoo_h@soat.com",
      name: "지수현",
      joinDate: "2024.03.29",
      joinType: "사업자",
    },
    {
      email: "minseok92@soat.com",
      name: "민석훈",
      joinDate: "2024.11.22",
      joinType: "개인",
    },
    {
      email: "haneulsky@soat.com",
      name: "하늘채",
      joinDate: "2024.12.25",
      joinType: "사업자",
    },
    {
      email: "kangmin23@soat.com",
      name: "강민우",
      joinDate: "2024.12.03",
      joinType: "사업자",
    },
  ];

  const [theaterAdminSelect, setTheaterAdminSelect] = useState("all");

  const filteredData =
    theaterAdminSelect === "all"
      ? GeneralUserData
      : GeneralUserData.filter((user) => user.joinType === theaterAdminSelect);

  return (
    <>
      <AdminHeader>회원관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>
          소극장 관리자 회원 조회 및 상태 관리
        </SubTabDescription>
        <div className="mt-[20px] mb-4 flex flex-wrap justify-between items-center gap-4">
          <ListTitle>소극장 관리자 회원 목록</ListTitle>
          <div className="flex gap-4 items-center justify-end w-full sm:w-auto">
            <Select
              className="w-[85px] h-[35px] text-xs py-0"
              value={theaterAdminSelect}
              onChange={setTheaterAdminSelect}
              options={[
                { value: "all", label: "전체" },
                { value: "사업자", label: "사업자" },
                { value: "개인", label: "개인" },
              ]}
            />
            <form action="" className="flex gap-1">
              <AdminSearchInput
                id="theaterAdminUserSearchInput"
                name="theaterAdminUserSearch"
                label="소극장 관리자 회원 조회하기"
              />
              <QueryButton />
            </form>
          </div>
        </div>

        <TheaterAdminUsersTable data={filteredData} />
      </AdminMain>
    </>
  );
}
