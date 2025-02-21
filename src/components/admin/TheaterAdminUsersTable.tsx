"use client";
import { useState } from "react";
import { TheaterAdminUser } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import TheaterAdminUserForm from "./TheaterAdminUserForm";

export default function TheaterAdminUsersTable({
  data,
}: {
  data: TheaterAdminUser[]; // 데이터 타입을 TheaterAdminUser 배열로 설정
}) {
  const headers: string[] = ["이메일", "이름", "가입날짜", "가입유형"];

  const fieldMapping: Record<(typeof headers)[number], keyof TheaterAdminUser> =
    {
      이메일: "email",
      이름: "name",
      가입날짜: "joinDate",
      가입유형: "joinType",
    };

  const [selectedUser, setSelectedUser] = useState<TheaterAdminUser | null>(
    null
  );
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
            data.map((theaterAdminUser, index) => (
              <TableRow
                key={index}
                rowData={theaterAdminUser}
                headers={headers}
                fieldMapping={fieldMapping}
                onClick={() => setSelectedUser(theaterAdminUser)} // 행 클릭 시 사용자 선택
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

      {/* 모달: 사용자의 정보를 보고 수정할 수 있는 폼 */}
      {selectedUser && (
        <TheaterAdminUserForm
          user={selectedUser} // user 정보를 전달
          radioOptions={radioOptions}
          radioState={radioState}
          onRadioChange={handleRadioChange}
          onClose={() => setSelectedUser(null)} // 모달 닫기
          onApply={handleApply} // 상태 변경 적용
        />
      )}
    </>
  );
}
