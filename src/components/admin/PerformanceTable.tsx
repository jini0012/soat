"use client";
import { useState } from "react";
import { Performance } from "@/types/admin";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import PerformanceForm from "./PerformanceForm"; // 공연 정보를 담을 폼 컴포넌트 추가

export default function PerformanceTable({ data }: { data: Performance[] }) {
  const headers = ["공연명", "카테고리", "팀명", "신고여부"];
  const fieldMapping: {
    [key in (typeof headers)[number]]: keyof Performance;
  } = {
    공연명: "title",
    카테고리: "category",
    팀명: "team",
    신고여부: "reportedStatus",
  };

  const [selectedPerformance, setSelectedPerformance] =
    useState<Performance | null>(null);

  // 공연 표시 라디오 버튼 관련 상태 관리
  const [performanceRadioState, setPerformanceRadioState] =
    useState<string>("정상");
  const performanceRadioOptions = [
    { value: "정상", label: "정상" },
    { value: "숨김", label: "숨김" },
  ];

  // 판매 상태 변경 라디오 버튼 관련 상태 관리
  const [saleRadioState, setSaleRadioState] = useState<string>("판매예정");
  const saleRadioOptions = [
    { value: "판매예정", label: "판매예정" },
    { value: "판매중", label: "판매중" },
    { value: "판매종료", label: "판매종료" },
  ];

  const handleRowClick = (performance: Performance) => {
    setSelectedPerformance(performance);
  };

  const handleClose = () => {
    setSelectedPerformance(null);
  };

  // 공연 표시 라디오 버튼 상태 변경
  const handlePerformanceRadioChange = (value: string) => {
    setPerformanceRadioState(value);
  };

  // 판매 상태 라디오 버튼 상태 변경
  const handleSaleRadioChange = (value: string) => {
    setSaleRadioState(value); // 여기를 수정: saleRadioState로 상태를 변경하도록
  };

  const handleApply = () => {
    // 상태 변경 적용 로직
    console.log("상태 변경 적용:", performanceRadioState, saleRadioState);
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <TableHeader headers={headers} />
        <tbody>
          {data.length > 0 ? (
            data.map((performance, index) => (
              <TableRow
                key={index}
                rowData={performance}
                headers={headers}
                fieldMapping={fieldMapping}
                onClick={() => handleRowClick(performance)} // 공연 정보를 클릭 시 설정
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

      {/* 공연 정보 모달 */}
      {selectedPerformance && (
        <PerformanceForm
          performance={selectedPerformance}
          performanceRadioOptions={performanceRadioOptions} // performanceRadioOptions 추가
          performanceRadioState={performanceRadioState} // performanceRadioState 추가
          onPerformanceRadioChange={handlePerformanceRadioChange} // 공연 표시 여부 라디오 추가
          saleRadioOptions={saleRadioOptions} // saleRadioOptions 추가
          saleRadioState={saleRadioState} // saleRadioState 추가
          onSaleRadioChange={handleSaleRadioChange} // 판매 상태 변경 라디오 추가
          onClose={handleClose}
          onApply={handleApply} // onApply 추가
        />
      )}
    </>
  );
}
