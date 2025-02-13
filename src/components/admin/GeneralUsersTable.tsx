// GeneralUsersTable.tsx
import { GeneralUser } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function GeneralUsersTable({ data }: { data: GeneralUser[] }) {
  const headers = ["이메일", "이름", "가입날짜"];

  // 필드맵핑을 GeneralUser의 실제 필드명으로 매핑
  const fieldMapping: { [key in (typeof headers)[number]]: keyof GeneralUser } =
    {
      이메일: "email",
      이름: "name",
      가입날짜: "joinDate",
    };

  return (
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
  );
}
