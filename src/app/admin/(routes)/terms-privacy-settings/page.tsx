"use client";
import { useState } from "react";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
import TermsPage from "@/components/admin/TermsPage";
import PrivacyPage from "@/components/admin/PrivacyPage";

export default function TermsAndPrivacySettingsPage() {
  const [selectedTab, setSelectedTab] = useState("terms"); // 선택된 탭을 추적하는 상태

  return (
    <>
      <AdminHeader>컨텐츠 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>이용약관 / 개인정보처리방침 관리</SubTabDescription>

        {/* 이용약관과 개인정보처리방침 선택을 위한 탭 */}
        <div className="mt-5 mb-6 text-xs flex gap-1">
          <p
            className={`cursor-pointer ${
              selectedTab === "terms" ? "text-flesh-500" : ""
            }`}
            onClick={() => setSelectedTab("terms")}
          >
            이용약관
          </p>
          <span>|</span> {/* 이용약관과 개인정보처리방침 사이에 '|' 추가 */}
          <p
            className={`cursor-pointer ${
              selectedTab === "privacy" ? "text-flesh-500" : ""
            }`}
            onClick={() => setSelectedTab("privacy")}
          >
            개인정보처리방침
          </p>
        </div>

        {/* 선택된 탭에 맞는 타이틀 렌더링 */}
        <ListTitle>
          {selectedTab === "terms" ? "이용약관" : "개인정보처리방침"}
        </ListTitle>

        {/* 선택된 탭에 맞는 내용을 렌더링 */}
        {selectedTab === "terms" ? <TermsPage /> : <PrivacyPage />}
      </AdminMain>
    </>
  );
}
