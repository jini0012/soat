import { Review } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

export default function ReviewTable({
  data,
}: {
  data: Review[]; //data의 타입 선언 - 배열로 반환
}) {
  const headers = ["공연명", "작성자", "작성일", "신고여부"]; //테이블 헤더명 선언

  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Review;
  } = {
    공연명: "title", // 한글 헤더와 실제 데이터 필드명 매핑
    작성자: "reviewer",
    작성일: "reviewDate",
    신고여부: "reportedStatus",
  };

  return (
    <table className="w-full table-fixed border-collapse">
      <TableHeader headers={headers} />
      <tbody>
        {data.length > 0 ? (
          data.map((newTheaterAdmin, index) => (
            <TableRow
              key={index}
              rowData={newTheaterAdmin}
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
