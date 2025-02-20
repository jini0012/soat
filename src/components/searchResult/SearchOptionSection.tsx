import { useState } from "react";
import { Button, CloseButton } from "@/components/controls/Button";

const categoryType = ["코미디", "드라마", "로맨스"];
const saleStatus = ["판매중", "판매예정", "판매종료"];

interface SearchOptionSectionProps {
  onClose: () => void; // `onClose`는 부모 컴포넌트에서 전달 받은 함수
  filterType: "category" | "saleStatus" | null; // filterType을 props로 받음
}

export default function SearchOptionSection({
  onClose,
  filterType,
}: SearchOptionSectionProps) {
  const [activeButtons, setActiveButtons] = useState<string[]>([]); // 클릭된 버튼들의 리스트를 배열로 저장함

  // 버튼 클릭 시 상태 변경 함수 - 중복 선택을 허용함
  const handleButtonClick = (item: string) => {
    setActiveButtons(
      (prev) =>
        prev.includes(item)
          ? prev.filter((button) => button !== item) // 이미 클릭된 버튼은 제거
          : [...prev, item] // 새로 클릭된 버튼은 추가
    );
  };

  // 초기화 함수 - 선택된 버튼들을 초기 상태로 돌림
  const handleReset = () => {
    setActiveButtons([]); // activeButtons 상태를 빈 배열로 설정하여 모든 선택을 해제
  };

  return (
    <section className="w-full h-[30%] px-[6%] py-3 bg-white rounded-tl-2xl rounded-tr-2xl fixed z-1000 bottom-0">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-md py-4">
          {filterType === "category" ? "카테고리" : "판매 상태"}
        </h3>
        <CloseButton onClick={onClose} /> {/* onClose 함수 호출 */}
      </div>
      <div className="flex gap-2">
        {/* filterType에 따라 카테고리 또는 판매 상태에 맞는 버튼 렌더링 */}
        {(filterType === "category" ? categoryType : saleStatus).map(
          (item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(item)}
              className={`border rounded-2xl w-[68px] h-[30px] text-xs ${
                activeButtons.includes(item)
                  ? "border-flesh-500 text-flesh-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>
      <ul className="flex w-full flex-row gap-x-2 mt-8">
        {/* 초기화 버튼 */}
        <li className="flex-1">
          <Button size="full" className="font-light" onClick={handleReset}>
            초기화
          </Button>
        </li>
        {/* 검색하기 버튼 */}
        <li className="flex-1">
          <Button onClick={onClose} size="full" highlight>
            검색하기
          </Button>
        </li>
      </ul>
    </section>
  );
}
