import { PerformanceInfoProps } from "@/types/enrollment";
import React from "react";
import { CloseButton } from "../controls/Button";
import { useDispatch } from "react-redux";
import { removePerformance } from "@/redux/slices/enrollSlice";
import { Edit } from "lucide-react";
export default function PerformanceInfo({
  date,
  performances,
  onEdit,
}: PerformanceInfoProps) {
  const dispatch = useDispatch();

  const handleDel = (index: number) => {
    const removedate = date.toString();
    dispatch(removePerformance({ date: removedate, index }));
  };

  return (
    <section className="flex flex-col gap-2 max-h-[200px] overflow-auto p-2">
      <h4 className="text-sm">공연 상세 정보</h4>
      {performances.map((performance, idx) => (
        <div
          key={idx + performance.time}
          className="flex border rounded-md text-sm p-2 items-center"
        >
          <p className="flex flex-col">
            공연 시간 : {performance.time}
            {performance.casting.length !== 0 && (
              <span className="text-ellipsis">
                캐스팅 : {`${performance.casting}`}
              </span>
            )}
          </p>

          <button
            className="ml-auto"
            type="button"
            onClick={() => onEdit(performance.time, performance.casting, idx)}
          >
            <Edit aria-label="수정" />
          </button>
          <CloseButton
            type="button"
            className="ml-auto"
            onClick={() => handleDel(idx)}
          />
        </div>
      ))}
    </section>
  );
}
