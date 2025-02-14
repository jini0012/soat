interface SearchResultItemProps {
  imgUrl: string;
  title: string;
  venue: string;
  date: string;
  commentCount: number;
}

export default function SearchResultItem({
  imgUrl,
  title,
  venue,
  date,
  commentCount,
}: SearchResultItemProps) {
  return (
    <li>
      <article className="py-[20px] flex items-center border-b border-b-gray-300">
        <img src={imgUrl} alt="공연포스터" className="w-[113px] h-[143px]" />
        <div className="ml-4">
          <div className="flex items-center  gap-[7px] text-[8px]">
            <div className="border border-flesh-500 px-1 py-[0.7px] text-flesh-500 rounded-sm">
              판매예정
            </div>
            <p className="text-flesh-500">
              D - <span>16</span>
            </p>
          </div>
          <h3 className="font-semibold text-[15px] mt-1 mb-[0.8px]">{title}</h3>
          <p className="text-xs font-light mb-[0.8px] ">{venue}</p>
          <p className="text-xs text-gray-400 font-light">{date}</p>
          <p className="text-xs mt-2 mb-2 font-light">한줄평({commentCount})</p>
          <button className="w-[65px] h-[25px] rounded-md bg-flesh-400 hover:bg-flesh-500 active:bg-flesh-600 text-white font-medium text-xs">
            예매하기
          </button>
        </div>
      </article>
    </li>
  );
}
