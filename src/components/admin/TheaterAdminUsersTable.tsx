import { TheaterAdminUser } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function TheaterAdminUsersTable({
  data,
}: {
  data: TheaterAdminUser[]; //data의 타입 선언 - 배열로 반환
}) {
  const headers = ["이메일", "이름", "가입날짜", "가입유형"]; //테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof TheaterAdminUser;
  } = {
    이메일: "email", // 한글 헤더와 실제 데이터 필드명 매핑
    이름: "name",
    가입날짜: "joinDate",
    가입유형: "joinType",
  };

  return (
    <table className="w-full table-fixed border-collapse">
      <TableHeader headers={headers} />
      <tbody>
        {data.length > 0 ? (
          data.map((theaterAdminUser, index) => (
            <TableRow
              key={index}
              rowData={theaterAdminUser}
              headers={headers}
              fieldMapping={fieldMapping} // 필드 매핑 전달
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
