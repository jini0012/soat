interface SearchResultItemProps {
  imgUrl: string;
  title: string;
  venue: string;
  date: string;
  commentCount: number;
  price: number;
}

export default function SearchResultItem({
  imgUrl,
  title,
  venue,
  date,
  commentCount,
  price,
}: SearchResultItemProps) {
  return (
    <li>
      <article className="py-[20px] flex items-center border-b border-b-gray-300 md:gap-4">
        {/* 공연 포스터 */}
        <img src={imgUrl} alt="공연포스터" className="w-[113px] h-[143px]" />

        {/* 공연 정보 */}
        <div className="ml-4 flex-1">
          {/* 판매예정 & D-Day */}
          <div className="flex items-center gap-[7px] text-[8px]">
            <div className="border border-flesh-500 px-1 py-[0.7px] text-flesh-500 rounded-sm">
              판매예정
            </div>
            <p className="text-flesh-500">
              D - <span>16</span>
            </p>
          </div>

          {/* 공연 제목 */}
          <h3 className="font-semibold text-base mt-1 mb-[0.8px]">{title}</h3>
          {/* 소극장 이름 */}
          <p className="text-xs font-light mb-[0.8px] md:mb-[0.5px]">{venue}</p>

          {/* 날짜 & 예매가 (데스크탑에서 가로 정렬) */}
          <div className="text-xs text-gray-400 font-light md:flex md:items-center md:justify-between md:mb-[4px]">
            <div className="md:flex-1 md:text-center md:text-sm">{date}</div>
            <p className="hidden md:block text-flesh-600 font-semibold md:text-base px-7">
              예매가{" "}
              <span className="text-black"> {price.toLocaleString()}원</span>
            </p>
          </div>

          {/* 한줄평 */}
          <p className="text-xs mt-2 mb-2 font-light pl-4 bg-star-icon bg-no-repeat bg-left md:mt-1 md:mb-1">
            한줄평({commentCount})
          </p>

          {/* 예매 버튼 */}
          <button className="w-[65px] h-[25px] rounded-md bg-flesh-400 hover:bg-flesh-500 active:bg-flesh-600 text-white font-medium text-xs">
            예매하기
          </button>
        </div>
      </article>
    </li>
  );
}
