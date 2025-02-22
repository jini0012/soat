"use client";

import { useState } from "react";
import SearchResultHeader from "@/components/search/SearchResultHeader";
import SearchResultItem from "@/components/search/SearchResultItem";
import SearchOptionFilter from "@/components/search/SearchOptionFilter";
import SortFilter from "@/components/search/SortFilter";
import SearchOptionSection from "@/components/search/SearchOptionSection";
// import EmptySearchResult from "@/components/searchResult/EmptySearchResults";

const mockData = [
  {
    id: 1,
    imgUrl: "image1.jpg",
    title: "공연명 1",
    venue: "공연장소 1",
    date: "2025.03.20",
    commentCount: 10,
    price: 15000,
  },
  {
    id: 2,
    imgUrl: "image2.jpg",
    title: "공연명 2",
    venue: "공연장소 2",
    date: "2025.03.21",
    commentCount: 5,
    price: 15000,
  },
  {
    id: 3,
    imgUrl: "image3.jpg",
    title: "공연명 3",
    venue: "공연장소 3",
    date: "2025.03.22",
    commentCount: 3,
    price: 15000,
  },
  {
    id: 4,
    imgUrl: "image4.jpg",
    title: "공연명 4",
    venue: "공연장소 4",
    date: "2025.03.23",
    commentCount: 15,
    price: 15000,
  },
  {
    id: 5,
    imgUrl: "image5.jpg",
    title: "공연명 5",
    venue: "공연장소 5",
    date: "2025.03.24",
    commentCount: 8,
    price: 15000,
  },
  {
    id: 6,
    imgUrl: "image6.jpg",
    title: "공연명 6",
    venue: "공연장소 6",
    date: "2025.03.25",
    commentCount: 12,
    price: 15000,
  },
  {
    id: 7,
    imgUrl: "image7.jpg",
    title: "공연명 7",
    venue: "공연장소 7",
    date: "2025.03.26",
    commentCount: 19,
    price: 15000,
  },
  {
    id: 8,
    imgUrl: "image8.jpg",
    title: "공연명 8",
    venue: "공연장소 8",
    date: "2025.03.27",
    commentCount: 7,
    price: 15000,
  },
];

export default function SearchPage() {
  const [visibleItems, setVisibleItems] = useState(5); // 처음 5개 항목 결과리스트를 보여줌

  // 검색 결과를 더 보이게 하는 함수
  function loadMoreItems() {
    setVisibleItems(visibleItems + 5); // 5개씩 더 보이게 함
  }

  const [isOpenSearchOption, setIsOpenSearchOption] = useState(false); // 검색조건 필터에 대한 section
  const [filterType, setFilterType] = useState<
    "category" | "saleStatus" | null
  >(null);

  // 검색 옵션 클릭 시 해당 카테고리 필터 열기
  function handleSearchOption(option: "category" | "saleStatus") {
    setFilterType(option);
    setIsOpenSearchOption(true);
  }

  // 페이지네이션 관련 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 한 페이지당 보여줄 아이템 개수
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  // 현재 페이지의 데이터 슬라이싱
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = mockData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <>
      <SearchResultHeader />
      <main className="px-[8%] relative">
        <p className="font-medium">
          <span className="text-flesh-500">&quot;쏘앳&quot;</span> 검색
          결과입니다.
        </p>

        {/* 검색 필터 */}
        <section className="flex items-center gap-[9px]">
          <h2 className="sr-only">검색 옵션</h2>
          <SearchOptionFilter onClick={() => handleSearchOption("category")}>
            카테고리
          </SearchOptionFilter>
          <SearchOptionFilter onClick={() => handleSearchOption("saleStatus")}>
            판매상태
          </SearchOptionFilter>
        </section>

        {/* 검색 정보 */}
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

        {/* 검색 결과 목록 */}
        <section>
          <h2 className="sr-only">검색 결과</h2>
          <ul>
            {paginatedData.map((item) => (
              <SearchResultItem key={item.id} {...item} />
            ))}
          </ul>
        </section>

        {/* 모바일에서만 "더보기" 버튼 표시 */}
        {visibleItems < mockData.length && (
          <section className="md:hidden">
            <h2 className="sr-only">더보기</h2>
            <button
              onClick={loadMoreItems}
              className="w-[100%] border border-flesh-500 active:bg-gray-100 rounded-xl p-1 text-[13px] text-flesh-500 font-light my-4"
            >
              검색 결과 더보기
            </button>
          </section>
        )}

        {/* 데스크탑에서만 페이지네이션 표시 */}
        {mockData.length > itemsPerPage && (
          <div className="hidden md:flex justify-center gap-2 px-4 py-6 text-[18px]">
            {Array.from({ length: totalPages }, (_, i) => (
              <p
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 cursor-pointer ${
                  currentPage === i + 1
                    ? "text-flesh-600 font-semibold"
                    : " text-gray-700"
                }`}
              >
                {i + 1}
              </p>
            ))}
          </div>
        )}
      </main>

      {/* 검색 옵션 필터 모달 */}
      {isOpenSearchOption && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20">
            <SearchOptionSection
              onClose={() => setIsOpenSearchOption(false)}
              filterType={filterType}
            />
          </div>
        </>
      )}
    </>
  );
}
