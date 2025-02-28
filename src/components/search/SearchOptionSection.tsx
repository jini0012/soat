import { useState, useEffect } from "react";
import { Button, CloseButton } from "@/components/controls/Button";

const categoryType = ["콘서트", "뮤지컬", "연극", "전시/행사", "팬미팅"];
const saleStatus = ["판매예정", "판매중", "판매종료"];

interface SearchOptionSectionProps {
  onClose: () => void;
  onApply: (filter: string, type: "category" | "saleStatus") => void;
  onClick?: (type: "category" | "saleStatus") => void;
  filterType: "category" | "saleStatus" | null;
  selectedCategoryFilters: string[];
  selectedStatusFilters: string[];
}

export default function SearchOptionSection({
  onClose,
  filterType,
  onApply,
  onClick,
  selectedCategoryFilters,
  selectedStatusFilters,
}: SearchOptionSectionProps) {
  // props에서 초기 활성 상태 설정
  const [activeCategoryButtons, setActiveCategoryButtons] = useState<string[]>(
    selectedCategoryFilters
  );
  const [activeSaleStatusButtons, setActiveSaleStatusButtons] = useState<
    string[]
  >(selectedStatusFilters);

  // props가 변경될 때 로컬 상태 업데이트
  useEffect(() => {
    setActiveCategoryButtons(selectedCategoryFilters);
    setActiveSaleStatusButtons(selectedStatusFilters);
  }, [selectedCategoryFilters, selectedStatusFilters]);

  const handleButtonClick = (item: string, type: "category" | "saleStatus") => {
    if (type === "category") {
      setActiveCategoryButtons((prev) =>
        prev.includes(item)
          ? prev.filter((button) => button !== item)
          : [...prev, item]
      );
    } else if (type === "saleStatus") {
      setActiveSaleStatusButtons((prev) =>
        prev.includes(item)
          ? prev.filter((button) => button !== item)
          : [...prev, item]
      );
    }
    // 필터 타입을 부모 컴포넌트에 전달
    onApply(item, type);
  };

  const handleReset = () => {
    if (filterType === "category") {
      setActiveCategoryButtons([]);
    } else if (filterType === "saleStatus") {
      setActiveSaleStatusButtons([]);
    }
    if (filterType && onClick) {
      onClick(filterType); // 필터 타입을 명확하게 전달
    }
  };

  if (!filterType) return null;

  const filterList = filterType === "category" ? categoryType : saleStatus;
  // 현재 필터 타입에 따라 표시할 활성 버튼 결정
  const activeButtons =
    filterType === "category" ? activeCategoryButtons : activeSaleStatusButtons;

  return (
    <section className="w-full h-[30%] px-[6%] py-3 bg-white rounded-tl-2xl rounded-tr-2xl fixed z-1000 bottom-0">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-md py-4">
          {filterType === "category" ? "장르" : "판매"}
        </h3>
        <CloseButton onClick={onClose} />
      </div>
      <div className="flex gap-2">
        {filterList.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(item, filterType)}
            className={`border rounded-2xl w-[68px] h-[30px] text-xs ${
              activeButtons.includes(item)
                ? "border-flesh-400 text-flesh-500 font-semibold bg-flesh-100"
                : "border-gray-300 text-gray-500 font-semibold"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="flex w-full flex-row gap-x-2 mt-8">
        <li className="flex-1">
          <Button size="full" onClick={handleReset}>
            초기화
          </Button>
        </li>
        <li className="flex-1">
          <Button onClick={onClose} size="full" highlight>
            검색하기
          </Button>
        </li>
      </ul>
    </section>
  );
}
