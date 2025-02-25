"use client";

import { useState, useMemo } from "react";
import SearchResultItem from "@/components/search/SearchResultItem";
import SearchOptionFilter from "@/components/search/SearchOptionFilter";
import SortFilter from "@/components/search/SortFilter";
import SearchOptionSection from "@/components/search/SearchOptionSection";
import DesktopSearchOptionSection from "@/components/search/DesktopSearchOptionSection";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const mockData = [
  {
    id: 1,
    imgUrl: "image1.jpg",
    title: "공연명 1",
    venue: "공연장소 1",
    date: "2025.03.20",
    commentCount: 10,
    price: 13000,
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
    price: 82000,
  },
  {
    id: 4,
    imgUrl: "image4.jpg",
    title: "공연명 4",
    venue: "공연장소 4",
    date: "2025.03.23",
    commentCount: 15,
    price: 21000,
  },
  {
    id: 5,
    imgUrl: "image5.jpg",
    title: "공연명 5",
    venue: "공연장소 5",
    date: "2025.03.24",
    commentCount: 8,
    price: 37000,
  },
  {
    id: 6,
    imgUrl: "image6.jpg",
    title: "공연명 6",
    venue: "공연장소 6",
    date: "2025.03.25",
    commentCount: 12,
    price: 42000,
  },
  {
    id: 7,
    imgUrl: "image7.jpg",
    title: "공연명 7",
    venue: "공연장소 7",
    date: "2025.03.26",
    commentCount: 19,
    price: 74000,
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
  const [isOpenSearchOption, setIsOpenSearchOption] = useState(false);
  const [filterType, setFilterType] = useState<
    "category" | "saleStatus" | null
  >(null);
  const [visibleItems, setVisibleItems] = useState(5); // 모바일용 더보기
  const [currentPage, setCurrentPage] = useState(1); // 데스크탑용 페이지네이션
  const [selectedSortOption, setSelectedSortOption] = useState("최근날짜순");

  const itemsPerPage = 5;
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  // 선택된 정렬 옵션에 따른 정렬 처리
  const sortedData = useMemo(() => {
    const sorted = mockData.slice(); // let을 const로 변경
    if (selectedSortOption === "최근날짜순") {
      sorted.sort((a, b) => (a.date > b.date ? -1 : 1));
    } else if (selectedSortOption === "한줄평순") {
      sorted.sort((a, b) => b.commentCount - a.commentCount);
    } else if (selectedSortOption === "낮은가격순") {
      sorted.sort((a, b) => a.price - b.price);
    }
    return sorted;
  }, [selectedSortOption]);

  // 데스크탑에서 사용하는 페이지네이션 적용
  const displayedDataForDesktop = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIdx, startIdx + itemsPerPage);
  }, [sortedData, currentPage]);

  // 모바일에서 사용하는 더보기 적용
  const displayedDataForMobile = useMemo(() => {
    return sortedData.slice(0, visibleItems);
  }, [sortedData, visibleItems]);

  function loadMoreItems() {
    setVisibleItems((prev) => prev + 5); // 모바일에서 더보기 버튼 클릭 시 항목 추가
  }

  function handleSearchOption(option: "category" | "saleStatus") {
    setFilterType(option);
    setIsOpenSearchOption(true);
  }

  return (
    <>
      <Header />
      <main className="px-4 md:px-[140px] relative">
        <p className="font-medium">
          <span className="text-flesh-500">&quot;쏘앳&quot;</span> 검색
          결과입니다.
        </p>

        {/* 모바일 검색 필터 */}
        <section className="flex items-center gap-[9px]">
          <h2 className="sr-only">검색 옵션</h2>
          <SearchOptionFilter onClick={() => handleSearchOption("category")}>
            카테고리
          </SearchOptionFilter>
          <SearchOptionFilter onClick={() => handleSearchOption("saleStatus")}>
            판매상태
          </SearchOptionFilter>
        </section>

        {/* 데스크탑 검색 필터*/}
        <DesktopSearchOptionSection />

        {/* 검색 정보 */}
        <section className="border-b border-b-gray-300 py-1 flex items-center justify-between">
          <h2 className="sr-only">검색 정보</h2>
          <p className="font-medium">
            공연{" "}
            <span className="text-[13px] font-normal">
              ({mockData.length}건)
            </span>
          </p>
          <SortFilter
            selectedOption={selectedSortOption}
            setSelectedOption={setSelectedSortOption}
          />
        </section>

        {/* 검색 결과 목록 */}
        <section>
          <h2 className="sr-only">검색 결과</h2>
          <ul>
            {(window.innerWidth <= 768
              ? displayedDataForMobile
              : displayedDataForDesktop
            ).map((item) => (
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
        {mockData.length > itemsPerPage && window.innerWidth > 768 && (
          <div className="hidden md:flex justify-center gap-2 px-4 py-6 mb-5 text-[18px]">
            {Array.from({ length: totalPages }, (_, i) => (
              <p
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 cursor-pointer ${
                  currentPage === i + 1
                    ? "text-flesh-600 font-semibold underline"
                    : "text-gray-700"
                } hover:text-flesh-600 hover:font-semibold active:text-flesh-600 active:font-semibold`}
              >
                {i + 1}
              </p>
            ))}
          </div>
        )}
      </main>
      <Footer />

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
