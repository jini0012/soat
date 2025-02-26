"use client";
import { useState } from "react";
import { NewTheaterAdmin } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import NewTheaterAdminForm from "./NewTheaterAdminForm";

export default function TheaterAdminUsersTable({
  data,
}: {
  data: NewTheaterAdmin[];
}) {
  const headers = ["이메일", "이름", "팀명", "신청일"];
  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof NewTheaterAdmin;
  } = {
    이메일: "email",
    이름: "name",
    팀명: "team",
    신청일: "requestDate",
  };

  const [selectedUser, setSelectedUser] = useState<NewTheaterAdmin | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열고 닫는 상태

  const handleRowClick = (user: NewTheaterAdmin) => {
    setSelectedUser(user);
    setIsModalOpen(true); // 모달 열기
  };

  const handleClose = () => {
    setIsModalOpen(false); // 모달 닫기
    setSelectedUser(null);
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
                onClick={() => handleRowClick(newTheaterAdmin)}
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

      {/* 모달을 div로 감싸기 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg w-[330px] max-w-lg z-[9999]">
            {selectedUser && (
              <NewTheaterAdminForm user={selectedUser} onClose={handleClose} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
