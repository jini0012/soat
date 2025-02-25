"use client";
import { useState } from "react";
import Image from "next/image";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import BannerListTable from "@/components/admin/BannerListTable";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
import BannerDisplayOrder from "./BannerDisplayOrder";
import BannerRegister from "@/components/admin/BannerRegister";
import BannerModify from "@/components/admin/BannerModify";

export default function BannerListPage() {
  const [isBannerRegisterOpen, setIsBannerRegisterOpen] = useState(false); // 배너 등록 모달 상태 관리
  const [isBannerModifyOpen, setIsBannerModifyOpen] = useState(false); // 배너 수정 모달 상태 관리
  const [selectedBanner, setSelectedBanner] = useState(null); // 선택된 배너 정보 관리

  const GeneralUserData = [
    {
      bannerTitle: "햇살극장 신규 오픈",
      registrationDate: "2025.02.10",
      bannerStatus: "활성화",
    },
    {
      bannerTitle: "3월 한정 할인",
      registrationDate: "2025.02.25",
      bannerStatus: "활성화",
    },
    {
      bannerTitle: "여름 페스티벌",
      registrationDate: "2025.02.01",
      bannerStatus: "활성화",
    },
    {
      bannerTitle: "가을 연극제",
      registrationDate: "2025.01.20",
      bannerStatus: "비활성화",
    },
    {
      bannerTitle: "크리스마스 특집",
      registrationDate: "2024.12.15",
      bannerStatus: "비활성화",
    },
  ];

  // 행 클릭 시 배너 수정 모달 열기
  const handleRowClick = (banner: any) => {
    setSelectedBanner(banner);
    setIsBannerModifyOpen(true); // 배너 수정 모달 열기
  };

  return (
    <>
      <AdminHeader>컨텐츠 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>메인 배너 등록 및 관리</SubTabDescription>
        <div className="mt-[20px] ">
          <ListTitle>배너 목록</ListTitle>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="flex gap-1 items-center justify-end mb-1"
            onClick={() => setIsBannerRegisterOpen(true)} // 배너 등록 모달 열기
          >
            <Image
              src="/images/icons/registration-btn.svg"
              alt="Registration Button"
              width={12}
              height={12}
            />
            <p className="text-xs font-medium">배너 등록하기</p>
          </button>
        </div>
        <BannerListTable
          data={GeneralUserData}
          onRowClick={handleRowClick} // 행 클릭 이벤트 전달
        />
        <section className="mt-10">
          <BannerDisplayOrder />
        </section>
      </AdminMain>

      {/* 배너 등록 모달 */}
      {isBannerRegisterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[300px] h-[auto]">
            <BannerRegister onClose={() => setIsBannerRegisterOpen(false)} />{" "}
          </div>
        </div>
      )}

      {/* 배너 수정 모달 */}
      {isBannerModifyOpen && selectedBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[300px] h-[auto]">
            <BannerModify
              onClose={() => setIsBannerModifyOpen(false)}
              bannerData={selectedBanner} // 수정할 배너 데이터 전달
            />
          </div>
        </div>
      )}
    </>
  );
}
