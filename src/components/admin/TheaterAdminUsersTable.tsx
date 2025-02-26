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

  const [selectedAdminUser, setSelectedAdminUser] =
    useState<TheaterAdminUser | null>(null);
  const [adminUserRadioStates, setAdminUserRadioStates] = useState<
    Record<string, string> // 모든 사용자의 상태를 저장
  >({});
  const [adminUserRadioState, setAdminUserRadioState] =
    useState<string>("활성화"); // 사용자의 현재 선택된 상태를 저장하는 state 추가

  const radioOptions = [
    { value: "활성화", label: "활성화" },
    { value: "정지", label: "정지" },
    { value: "휴면", label: "휴면" },
    { value: "탈퇴", label: "탈퇴" },
  ];

  const handleAdminUserClick = (theaterAdminUser: TheaterAdminUser) => {
    setSelectedAdminUser(theaterAdminUser);
    // 해당 사용자의 상태를 userRadioStates에서 가져오거나 기본값 사용
    setAdminUserRadioState(
      adminUserRadioStates[theaterAdminUser.email] || "활성화"
    );
  };

  const handleApplyStatus = () => {
    // 상태 변경 적용 로직 추가
    console.log(`상태 변경: ${adminUserRadioState}`);
  };

  const handleRadioChange = (value: string) => {
    if (selectedAdminUser) {
      setAdminUserRadioStates((prevStates) => ({
        ...prevStates,
        [selectedAdminUser.email]: value,
      }));
      setAdminUserRadioState(value);
    }
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
                onClick={() => handleAdminUserClick(theaterAdminUser)} // 핸들러 적용
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

      {/* 모달: 소극장관리자 회원정보 */}
      {selectedAdminUser && (
        <TheaterAdminUserForm
          user={selectedAdminUser} // user 정보를 전달
          radioOptions={radioOptions}
          adminUserRadioState={adminUserRadioState}
          onRadioChange={handleRadioChange}
          onClose={() => setSelectedAdminUser(null)} // 모달 닫기
          onApply={handleApplyStatus} // 상태 변경 적용
        />
      )}
    </>
  );
}
