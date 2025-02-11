interface SearchResultItemProps {
  imgUrl: string;
  title: string;
  team: string;
  date: string;
  commentCount: number;
}

export default function SearchResultItem({
  imgUrl,
  title,
  team,
  date,
  commentCount,
}: SearchResultItemProps) {
  return (
    <li>
      <article className="py-[20px] flex items-center border-b border-b-gray-300">
        <img src={imgUrl} alt="공연포스터" className="w-[84px] h-[118.8px]" />
        <div className="ml-4">
          <div className="flex items-center  gap-[7px] text-[8px]">
            <div className="border border-flesh-500 px-1 py-[0.7px] text-flesh-500 rounded-sm">
              판매예정
            </div>
            <p className="text-flesh-500">
              D - <span>16</span>
            </p>
          </div>
          <h3 className="font-semibold text-[15px] mt-2">{title}</h3>
          <p className="text-[12px] font-light">{team}</p>
          <p className="text-[12px] text-gray-400 font-light">{date}</p>
          <p className="text-[12px] mt-3 font-light">한줄평({commentCount})</p>
        </div>
      </article>
    </li>
  );
}
