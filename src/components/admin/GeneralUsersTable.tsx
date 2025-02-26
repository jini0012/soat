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
  const [userRadioStates, setUserRadioStates] = useState<
    Record<string, string> // 모든 사용자의 상태를 저장
  >({});
  const [userRadioState, setUserRadioState] = useState<string>("활성화"); // 사용자의 현재 선택된 상태를 저장하는 state 추가

  const userRadioOptions = [
    { value: "활성화", label: "활성화" },
    { value: "정지", label: "정지" },
    { value: "휴면", label: "휴면" },
    { value: "탈퇴", label: "탈퇴" },
  ];

  const handleUserClick = (generalUser: GeneralUser) => {
    setSelectedUser(generalUser);
    // 해당 사용자의 상태를 userRadioStates에서 가져오거나 기본값 사용
    setUserRadioState(userRadioStates[generalUser.email] || "활성화");
  };

  const handleClose = () => {
    setSelectedUser(null); // 선택했던 사용자를 모달이 닫힌 후에는 다시 초기화. 다른 사용자를 다시 선택할 수 있도록 함
  };

  const handleRadioChange = (value: string) => {
    if (selectedUser) {
      setUserRadioStates((prevStates) => ({
        ...prevStates,
        [selectedUser.email]: value,
      }));
      setUserRadioState(value);
    }
  };

  const handleApplyStatus = () => {
    console.log(`상태 변경: ${userRadioState}`);
    // API 연동 필요
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
                onClick={() => handleUserClick(generalUser)} // 핸들러 적용
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

      {selectedUser && (
        <GeneralUserForm
          user={selectedUser}
          userRadioOptions={userRadioOptions}
          userRadioState={userRadioState}
          onRadioChange={handleRadioChange}
          onClose={handleClose}
          onApply={handleApplyStatus}
        />
      )}
    </>
  );
}
