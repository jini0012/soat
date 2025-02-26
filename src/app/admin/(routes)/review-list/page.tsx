"use client";
import { useState } from "react";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import ReviewTable from "@/components/admin/ReviewTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
import { Select } from "@/components/controls/Select";
export default function ReviewListPage() {
  const GeneralUserData = [
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
  ];

  const [reviewSelect, setReviewSelect] = useState("공연명");

  return (
    <>
      <AdminHeader>공연관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>한줄평 조회 및 상태 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex flex-wrap justify-between items-center gap-4">
          <ListTitle>한줄평 목록</ListTitle>
          <div className="flex gap-4 items-center justify-end w-full sm:w-auto">
            <Select
              className="w-[40px] h-[35px] text-xs py-0"
              value={reviewSelect}
              onChange={setReviewSelect}
              options={[
                { value: "공연명", label: "공연명" },
                { value: "작성자", label: "작성자" },
                { value: "작성일", label: "작성일" },
                { value: "신고여부", label: "신고여부" },
              ]}
            />
            <form action="" className="flex gap-1 items-center">
              <AdminSearchInput
                id="reviewSearchInput"
                name="reviewSearch"
                label="한줄평 목록 조회하기"
              />
              <QueryButton />
            </form>
          </div>
        </div>
        <ReviewTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
