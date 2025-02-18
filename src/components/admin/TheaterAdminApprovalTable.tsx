"use client";
import { useState, useRef } from "react";
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
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleRowClick = (user: NewTheaterAdmin) => {
    setSelectedUser(user);
    modalRef.current?.showModal();
  };

  const handleClose = () => {
    modalRef.current?.close();
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

      {/* 모달을 한 번만 렌더링하고 selectedUser를 변경 */}
      <dialog ref={modalRef} className="w-[400px] h-[270px] max-h-[560px] p-4">
        {selectedUser && (
          <NewTheaterAdminForm user={selectedUser} onClose={handleClose} />
        )}
      </dialog>
    </>
  );
}
