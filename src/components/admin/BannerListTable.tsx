import { Banner } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function TheaterAdminUsersTable({
  data,
}: {
  data: Banner[]; //data의 타입 선언 - 배열로 반환
}) {
  const headers = ["배너제목", "등록일", "상태"]; //테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Banner;
  } = {
    배너제목: "bannerTitle", // 한글 헤더와 실제 데이터 필드명 매핑
    등록일: "registrationDate",
    상태: "bannerStatus",
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
