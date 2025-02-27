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
  const GeneralUserData = [
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
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
        <PerformanceTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
