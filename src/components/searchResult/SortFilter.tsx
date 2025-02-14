export default function SortFilter() {
  return (
    <>
      <button className="text-xs">최근날짜순</button>
      <div className="absolute top-[200px] rounded-md bg-white right-6 text-sm p-3 w-[88px] h-[105px] border border-gray-300 flex flex-col gap-2 shadow-lg ">
        <div>최근날짜순</div>
        <div>한줄평순</div>
        <div>낮은가격순</div>
      </div>
    </>
  );
}
