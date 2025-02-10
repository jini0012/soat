import { Button } from "../controls/Button";

export default function SeatSelection({
  setProcess,
}: {
  setProcess: (process: string) => void;
}) {
  return (
    <section className="flex flex-col w-full p-3 gap-y-3">
      <h3 className="font-bold text-xl">1. 일자 및 좌석 선택</h3>
      <ul className="flex gap-x-3">
        <li>
          <Button size="small">2월 10일</Button>
        </li>
        <li>
          <Button size="small" highlight>
            2월 11일
          </Button>
        </li>
      </ul>
      <div className="w-full h-[240px] bg-gray-200 rounded-md">
        {/* 임시 */}
      </div>
      <Button size="full" highlight onClick={() => setProcess("purchaserInfo")}>
        다음
      </Button>
    </section>
  );
}
