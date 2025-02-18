"use client";
import { useState } from "react";
import { GeneralUser } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import GeneralUserForm from "./GeneralUserForm";

export default function GeneralUsersTable({ data }: { data: GeneralUser[] }) {
  const headers: string[] = ["이메일", "이름", "가입날짜"];

  const fieldMapping: Record<(typeof headers)[number], keyof GeneralUser> = {
    이메일: "email",
    이름: "name",
    가입날짜: "joinDate",
  };

  const [selectedUser, setSelectedUser] = useState<GeneralUser | null>(null);
  const [radioState, setRadioState] = useState("활성화");

  const radioOptions = [
    { value: "활성화", label: "활성화" },
    { value: "정지", label: "정지" },
    { value: "휴면", label: "휴면" },
    { value: "탈퇴", label: "탈퇴" },
  ];

  const handleRadioChange = (value: string) => {
    setRadioState(value);
  };

  const handleApply = () => {
    // 상태 변경 적용 로직 추가
    console.log(`상태 변경: ${radioState}`);
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.length > 0 ? (
            data.map((generalUser, index) => (
              <TableRow
                key={index}
                rowData={generalUser}
                headers={headers}
                fieldMapping={fieldMapping}
                onClick={() => setSelectedUser(generalUser)}
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

      {/* 모달 컴포넌트 (선택한 회원이 있을 때만 렌더링) */}
      {selectedUser && (
        <GeneralUserForm
          user={selectedUser} // user 정보를 전달
          radioOptions={radioOptions}
          radioState={radioState}
          onRadioChange={handleRadioChange}
          onClose={() => setSelectedUser(null)}
          onApply={handleApply}
        />
      )}
    </>
  );
}
