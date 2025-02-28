"use client";
import { useState } from "react";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import PerformanceTable from "@/components/admin/PerformanceTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
import { Select } from "@/components/controls/Select";
export default function PerformanceListPage() {
  const performanceData = [
    {
      title: "별이 빛나는 밤",
      category: "콘서트",
      team: "스타홀",
      reportedStatus: "신고됨",
    },
    {
      title: "예술의 향연",
      category: "전시/행사",
      team: "아트갤러리",
      reportedStatus: "정상",
    },
    {
      title: "희극의 순간",
      category: "연극",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "팬과 함께",
      category: "팬미팅",
      team: "팬존",
      reportedStatus: "정상",
    },
    {
      title: "뮤지컬의 밤",
      category: "뮤지컬",
      team: "레드홀",
      reportedStatus: "신고됨",
    },
    {
      title: "소나타의 감동",
      category: "콘서트",
      team: "그랜드홀",
      reportedStatus: "정상",
    },
    {
      title: "미술의 세계",
      category: "전시/행사",
      team: "갤러리센터",
      reportedStatus: "정상",
    },
    {
      title: "비극과 희극",
      category: "연극",
      team: "그린극장",
      reportedStatus: "신고됨",
    },
    {
      title: "스타와의 만남",
      category: "팬미팅",
      team: "옐로존",
      reportedStatus: "정상",
    },
    {
      title: "환상의 무대",
      category: "뮤지컬",
      team: "퍼플홀",
      reportedStatus: "신고됨",
    },
  ];

  const [performanceSelect, setPerformanceSelect] = useState("공연명");

  return (
    <>
      <AdminHeader>공연관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>공연 조회 및 상태 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex flex-wrap justify-between items-center gap-4">
          <ListTitle>공연 목록</ListTitle>
          <div className="flex gap-4 items-center justify-end w-full sm:w-auto">
            <Select
              className="w-[40px] h-[35px] text-xs py-0"
              value={performanceSelect}
              onChange={setPerformanceSelect}
              options={[
                { value: "공연명", label: "공연명" },
                { value: "카테고리", label: "카테고리" },
                { value: "팀명", label: "팀명" },
                { value: "신고여부", label: "신고여부" },
              ]}
            />
            <form action="" className="flex gap-1 items-center">
              <AdminSearchInput
                id="performanceSearchInput"
                name="performanceSearch"
                label="공연 목록 조회하기"
              />
              <QueryButton />
            </form>
          </div>
        </div>
        <PerformanceTable data={performanceData} />
      </AdminMain>
    </>
  );
}
