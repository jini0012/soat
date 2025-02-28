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

  // 모든 공연의 표시 상태를 저장
  const [performanceRadioStates, setPerformanceRadioStates] = useState<
    Record<string, string>
  >({});

  // 선택된 공연의 표시 상태를 저장
  const [performanceRadioState, setPerformanceRadioState] =
    useState<string>("표시");

  const performanceRadioOptions = [
    { value: "표시", label: "표시" },
    { value: "숨김", label: "숨김" },
  ];

  // 모든 공연의 판매 상태를 저장하는 상태
  const [saleRadioStates, setSaleRadioStates] = useState<
    Record<string, string> // 공연 제목을 키로 하여 판매 상태를 저장
  >({});

  // 선택된 공연의 판매 상태를 저장하는 상태
  const [saleRadioState, setSaleRadioState] = useState<string>("판매예정");

  const saleRadioOptions = [
    { value: "판매예정", label: "판매예정" },
    { value: "판매중", label: "판매중" },
    { value: "판매종료", label: "판매종료" },
  ];

  // Apply(상태변경적용 버튼)를 눌렀는지 여부를 추적
  const [applied, setApplied] = useState<boolean>(false);

  // 공연 클릭 시 상태 설정
  const handleRowClick = (performance: Performance) => {
    setSelectedPerformance(performance);
    // 선택된 공연에 대한 판매 상태를 가져오기
    setSaleRadioState(saleRadioStates[performance.title] || "판매예정");
    setPerformanceRadioState(
      performanceRadioStates[performance.title] || "표시"
    );
    // 새로운 사용자를 클릭할 때마다 applied 상태 초기화
    setApplied(false);
  };

  // 판매 상태 변경 시 상태 업데이트
  const handleSaleRadioChange = (value: string) => {
    // 라디오 버튼을 변경할 때는 임시 상태만 업데이트
    setSaleRadioState(value);
  };

  // 공연 표시 상태 변경 시 상태 업데이트
  const handlePerformanceRadioChange = (value: string) => {
    setPerformanceRadioState(value);
  };

  const handleClose = () => {
    // 모달을 닫을 때, Apply 버튼을 누르지 않았다면 임시 상태 변경을 취소
    if (!applied && selectedPerformance) {
      setPerformanceRadioState(
        performanceRadioStates[selectedPerformance.title] || "표시"
      );
      setSaleRadioState(
        saleRadioStates[selectedPerformance.title] || "판매예정"
      );
    }
    // applied 상태 초기화 및 선택된 사용자 초기화
    setApplied(false);
    setSelectedPerformance(null);
  };

  const handleApply = () => {
    if (selectedPerformance) {
      // Apply 버튼을 누르면 확정된 상태 업데이트
      setSaleRadioStates((prevStates) => ({
        ...prevStates,
        [selectedPerformance.title]: saleRadioState,
      }));
      setPerformanceRadioStates((prevStates) => ({
        ...prevStates,
        [selectedPerformance.title]: performanceRadioState,
      }));

      // applied 플래그를 true로 설정
      setApplied(true);

      console.log(`상태 변경: ${saleRadioState}`);
      console.log(`상태 변경: ${performanceRadioState}`);
      // API 연동 필요
    }
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
