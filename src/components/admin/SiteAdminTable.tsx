"use client";
import React, { useState } from "react";
import { SiteAdmin } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import SiteAdminModify from "./SiteAdminModify"; // SiteAdminModify import

export default function SiteAdminTable({
  data,
}: {
  data: SiteAdmin[]; // data prop 정의
}) {
  const [selectedUser, setSelectedUser] = useState<SiteAdmin | null>(null); // 선택된 관리자 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태

  const headers = ["이메일", "관리자명", "권한"]; // 테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof SiteAdmin;
  } = {
    이메일: "email", // 한글 헤더와 실제 데이터 필드명 매핑
    관리자명: "siteAdmin",
    권한: "permissions",
  };

  const handleRowClick = (user: SiteAdmin) => {
    setSelectedUser(user);
    setIsModalOpen(true); // 행 클릭 시 모달 열기
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null); // 모달 닫기 시 선택된 사용자 초기화
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.length > 0 ? (
            data.map((newTheaterAdmin, index) => (
              <TableRow
                key={index}
                rowData={newTheaterAdmin}
                headers={headers}
                fieldMapping={fieldMapping}
                onClick={() => handleRowClick(newTheaterAdmin)} // 행 클릭 시 모달 열기
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

      {isModalOpen && selectedUser && (
        <SiteAdminModify user={selectedUser} onClose={handleModalClose} />
      )}
    </>
  );
}
