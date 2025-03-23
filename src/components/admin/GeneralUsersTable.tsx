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
    이름: "username",
    가입날짜: "createdAt",
  };

  const [selectedUser, setSelectedUser] = useState<GeneralUser | null>(null);

  // 모든 사용자의 확정된 상태를 저장
  const [userRadioStates, setUserRadioStates] = useState<
    Record<string, string>
  >({});

  // 현재 선택된 사용자의 임시 상태
  const [userRadioState, setUserRadioState] = useState<string>("활성화");

  // Apply(상태변경적용 버튼)를 눌렀는지 여부를 추적
  const [applied, setApplied] = useState<boolean>(false);

  const userRadioOptions = [
    { value: "활성화", label: "활성화" },
    { value: "정지", label: "정지" },
    { value: "휴면", label: "휴면" },
    { value: "탈퇴", label: "탈퇴" },
  ];

  const handleUserClick = (generalUser: GeneralUser) => {
    setSelectedUser(generalUser);
    // 해당 사용자의 확정된 상태를 userRadioStates에서 가져오거나 기본값 사용
    setUserRadioState(userRadioStates[generalUser.email] || "활성화");
    // 새로운 사용자를 클릭할 때마다 applied 상태 초기화
    setApplied(false);
  };

  const handleClose = () => {
    // 모달을 닫을 때, Apply 버튼을 누르지 않았다면 임시 상태 변경을 취소
    if (!applied && selectedUser) {
      // userRadioState를 원래 값으로 되돌리기 (다음에 다시 열 때를 대비)
      setUserRadioState(userRadioStates[selectedUser.email] || "활성화");
    }
    // applied 상태 초기화 및 선택된 사용자 초기화
    setApplied(false);
    setSelectedUser(null);
  };

  const handleRadioChange = (value: string) => {
    // 라디오 버튼을 변경할 때는 임시 상태만 업데이트
    setUserRadioState(value);
  };

  const handleApplyStatus = () => {
    if (selectedUser) {
      // Apply 버튼을 누르면 확정된 상태 업데이트
      setUserRadioStates((prevStates) => ({
        ...prevStates,
        [selectedUser.email]: userRadioState,
      }));

      // applied 플래그를 true로 설정
      setApplied(true);

      console.log(`상태 변경: ${userRadioState}`);
      // API 연동 필요
    }
  };

  const handleAddAdmin = () => {
    console.log("관리자 추가");

    if (selectedUser) {
      console.log(selectedUser.id);
    } else {
      console.log("선택된 사용자가 없습니다.");
    }
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
                onClick={() => handleUserClick(generalUser)}
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
          handleAddAdmin={handleAddAdmin}
        />
      )}
    </>
  );
}
