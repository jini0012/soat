"use client";
import React, { useState } from "react";
import { SiteAdmin } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import SiteAdminModify from "./SiteAdminModify";

export default function SiteAdminTable({
  data,
}: {
  data: SiteAdmin[]; // data prop 정의
}) {
  const [selectedSiteAdmin, setSelectedSiteAdmin] = useState<SiteAdmin | null>(
    null
  ); // 선택된 관리자 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [siteAdminRadioStates, setSiteAdminRadioStates] = useState<
    Record<string, string> // 모든 사용자의 권한 상태를 저장
  >({});
  const [siteAdminRadio, setSiteAdminRadio] = useState("전체권한"); // 선택한 사용자의 권한 상태

  const headers = ["이메일", "관리자명", "권한"]; // 테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof SiteAdmin;
  } = {
    이메일: "email", // 한글 헤더와 실제 데이터 필드명 매핑
    관리자명: "siteAdmin",
    권한: "permissions",
  };

  const handleRowClick = (siteAdmin: SiteAdmin) => {
    setSelectedSiteAdmin(siteAdmin);
    setIsModalOpen(true); // 행 클릭 시 모달 열기
    setSiteAdminRadio(siteAdminRadioStates[siteAdmin.email] || "전체권한");
  };

  const handleRadioChange = (value: string) => {
    if (selectedSiteAdmin) {
      setSiteAdminRadioStates((prevStates) => ({
        ...prevStates,
        [selectedSiteAdmin.email]: value,
      }));
      setSiteAdminRadio(value);
    }
  };

  const handleApplyStatus = () => {
    console.log(`상태 변경: ${siteAdminRadio}`);
    // API 연동 필요
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSiteAdmin(null); // 모달 닫기 시 선택된 사용자 초기화
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.length > 0 ? (
            data.map((siteAdmin, index) => (
              <TableRow
                key={index}
                rowData={siteAdmin}
                headers={headers}
                fieldMapping={fieldMapping}
                onClick={() => handleRowClick(siteAdmin)} // 행 클릭 시 모달 열기
              />
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-1">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && selectedSiteAdmin && (
        <SiteAdminModify
          siteAdmin={selectedSiteAdmin}
          onClose={handleModalClose}
          siteAdminRadio={siteAdminRadio} // 라디오 상태를 props로 전달
          onRadioChange={handleRadioChange}
          onApply={handleApplyStatus} // 상태 변경 적용
        />
      )}
    </>
  );
}
