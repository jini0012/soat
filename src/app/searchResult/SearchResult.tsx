"use client";

import { useState } from "react";
import SearchResultHeader from "@/components/searchResult/SearchResultHeader";
import SearchResultItem from "@/components/searchResult/SearchResultItem";
import SearchOptionFilter from "@/components/searchResult/SearchOptionFilter";
import SortFilter from "@/components/searchResult/SortFilter";
import SearchOptionSection from "@/components/searchResult/SearchOptionSection";
// import EmptySearchResult from "@/components/searchResult/EmptySearchResults";

const mockData = [
  {
    id: 1,
    imgUrl: "image1.jpg",
    title: "공연명 1",
    venue: "공연장소 1",
    date: "2025.03.20",
    commentCount: 10,
  },
  {
    id: 2,
    imgUrl: "image2.jpg",
    title: "공연명 2",
    venue: "공연장소 2",
    date: "2025.03.21",
    commentCount: 5,
  },
  {
    id: 3,
    imgUrl: "image3.jpg",
    title: "공연명 3",
    venue: "공연장소 3",
    date: "2025.03.22",
    commentCount: 3,
  },
  {
    id: 4,
    imgUrl: "image4.jpg",
    title: "공연명 4",
    venue: "공연장소 4",
    date: "2025.03.23",
    commentCount: 15,
  },
  {
    id: 5,
    imgUrl: "image5.jpg",
    title: "공연명 5",
    venue: "공연장소 5",
    date: "2025.03.24",
    commentCount: 8,
  },
  {
    id: 6,
    imgUrl: "image6.jpg",
    title: "공연명 6",
    venue: "공연장소 6",
    date: "2025.03.25",
    commentCount: 12,
  },
  {
    id: 7,
    imgUrl: "image7.jpg",
    title: "공연명 7",
    venue: "공연장소 7",
    date: "2025.03.26",
    commentCount: 19,
  },
  {
    id: 8,
    imgUrl: "image8.jpg",
    title: "공연명 8",
    venue: "공연장소 8",
    date: "2025.03.27",
    commentCount: 7,
  },
];

export default function SearchResult() {
  const [visibleItems, setVisibleItems] = useState(5); // 처음 5개 항목 결과리스트를 보여줌

  // 검색 결과를 더 보이게 하는 함수
  function loadMoreItems() {
    setVisibleItems(visibleItems + 5); // 5개씩 더 보이게 함
  }

  const [isOpenSearchOption, setIsOpenSearchOption] = useState(false); // 검색조건 필터에 대한 section
  const [filterType, setFilterType] = useState<
    //현재 활성화된 필터 타입에 대한 상태관리
    "category" | "saleStatus" | null //null은 필터가 선택되지 않은 기본 값
  >(null);

  // 검색 옵션 클릭 시 해당 카테고리 필터 열기
  function handleSearchOption(option: "category" | "saleStatus") {
    setFilterType(option);
    setIsOpenSearchOption(true);
  }

  return (
    <>
      <SearchResultHeader />
      <main className="px-[8%] relative">
        <p className="font-medium">
          <span className="text-flesh-500">&quot;쏘앳&quot;</span> 검색
          결과입니다.
        </p>
        <section className="flex item-center gap-[9px]">
          <h2 className="sr-only">검색 옵션</h2>
          <SearchOptionFilter onClick={() => handleSearchOption("category")}>
            카테고리
          </SearchOptionFilter>
          <SearchOptionFilter onClick={() => handleSearchOption("saleStatus")}>
            판매상태
          </SearchOptionFilter>
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
                venue={item.venue}
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
              className="w-[100%] border border-flesh-500 active:bg-gray-100 rounded-xl p-1 text-[13px] text-flesh-500 font-light my-4"
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
      {isOpenSearchOption && (
        <>
          {/* 딤드 배경을 fixed로 설정하고, 높이를 100%로 설정 */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>{" "}
          {/* 딤드 처리 */}
          <div className="relative z-20">
            <SearchOptionSection
              onClose={() => setIsOpenSearchOption(false)} // onClose 핸들러 전달
              filterType={filterType}
            />
          </div>
        </>
      )}
    </>
  );
}
