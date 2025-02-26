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
      reviewer: "김지훈",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "바람의 노래",
      reviewer: "이수진",
      reviewDate: "2024.11.10",
      reportedStatus: "정상",
    },
    {
      title: "불꽃의 춤",
      reviewer: "박준영",
      reviewDate: "2024.10.05",
      reportedStatus: "정상",
    },
    {
      title: "마법의 숲",
      reviewer: "최민지",
      reviewDate: "2024.09.15",
      reportedStatus: "신고됨",
    },
    {
      title: "빛의 여행",
      reviewer: "한세진",
      reviewDate: "2024.08.20",
      reportedStatus: "정상",
    },
    {
      title: "하늘의 별",
      reviewer: "유영민",
      reviewDate: "2024.07.30",
      reportedStatus: "신고됨",
    },
    {
      title: "전설의 시작",
      reviewer: "장윤수",
      reviewDate: "2024.06.10",
      reportedStatus: "정상",
    },
    {
      title: "겨울의 끝자락",
      reviewer: "김하늘",
      reviewDate: "2024.05.18",
      reportedStatus: "정상",
    },
    {
      title: "비밀의 숲",
      reviewer: "이주희",
      reviewDate: "2024.04.25",
      reportedStatus: "정상",
    },
    {
      title: "여름의 끝",
      reviewer: "차민호",
      reviewDate: "2024.03.05",
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
