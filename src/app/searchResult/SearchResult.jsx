"use client";

import { useState } from "react";
import SearchResultHeader from "@/components/searchResult/SearchResultHeader";
import SearchResultItem from "@/components/searchResult/SearchResultItem";
import SearchOptionFilter from "@/components/searchResult/SearchOptionFilter";
import SortFilter from "@/components/searchResult/SortFilter";
// import EmptySearchResult from "@/components/searchResult/EmptySearchResults";

const mockData = [
  {
    id: 1,
    imgUrl: "image1.jpg",
    title: "공연명 1",
    team: "팀명 1",
    date: "2025.03.20",
    commentCount: 10,
  },
  {
    id: 2,
    imgUrl: "image2.jpg",
    title: "공연명 2",
    team: "팀명 2",
    date: "2025.03.21",
    commentCount: 5,
  },
  {
    id: 3,
    imgUrl: "image3.jpg",
    title: "공연명 3",
    team: "팀명 3",
    date: "2025.03.22",
    commentCount: 3,
  },
  {
    id: 4,
    imgUrl: "image4.jpg",
    title: "공연명 4",
    team: "팀명 4",
    date: "2025.03.23",
    commentCount: 15,
  },
  {
    id: 5,
    imgUrl: "image5.jpg",
    title: "공연명 5",
    team: "팀명 5",
    date: "2025.03.24",
    commentCount: 8,
  },
  {
    id: 6,
    imgUrl: "image6.jpg",
    title: "공연명 6",
    team: "팀명 6",
    date: "2025.03.25",
    commentCount: 12,
  },
  {
    id: 7,
    imgUrl: "image7.jpg",
    title: "공연명 7",
    team: "팀명 7",
    date: "2025.03.26",
    commentCount: 19,
  },
  {
    id: 8,
    imgUrl: "image8.jpg",
    title: "공연명 8",
    team: "팀명 8",
    date: "2025.03.27",
    commentCount: 7,
  },
];

export default function SearchResult() {
  const [visibleItems, setVisibleItems] = useState(5); // 처음 5개 항목을 보여줌

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 5); // 5개씩 더 보이게 함
  };

  return (
    <>
      <SearchResultHeader />
      <main className="px-[8%]">
        <p className="font-medium">
          <span className="text-flesh-500">&quot;쏘앳&quot;</span> 검색
          결과입니다.
        </p>
        <section className="flex item-center gap-[9px]">
          <h2 className="sr-only">검색 옵션</h2>
          <SearchOptionFilter>카테고리</SearchOptionFilter>
          <SearchOptionFilter>날짜</SearchOptionFilter>
        </section>
        <section className="border-b border-b-gray-300 py-1 flex items-center justify-between">
          <h2 className="sr-only">검색 정보</h2>
          <p className="font-medium">
            공연{" "}
            <span className="text-[13px] font-normal">
              ({mockData.length}건)
            </span>
          </p>
          <SortFilter />
        </section>
        <section>
          <h2 className="sr-only">검색 결과</h2>
          <ul>
            {mockData.slice(0, visibleItems).map((item) => (
              <SearchResultItem
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                team={item.team}
                date={item.date}
                commentCount={item.commentCount}
              />
            ))}
          </ul>
        </section>
        {/* 5개 이상의 항목이 있을 때만 "검색 결과 더보기" 버튼을 렌더링 */}
        {visibleItems < mockData.length && (
          <section>
            <h2 className="sr-only">더보기</h2>
            <button
              onClick={loadMoreItems}
              className="w-[100%] border border-flesh-500 rounded-xl p-1 text-[13px] text-flesh-500 font-light my-4"
            >
              검색 결과 더보기
            </button>
          </section>
        )}
        {/* <EmptySearchResult /> */}
      </main>
      <footer className="h-[100px] text-center py-10 bg-gray-500 mt-10 text-white">
        footer
      </footer>
    </>
  );
}
