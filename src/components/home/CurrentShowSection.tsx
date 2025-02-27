"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const CATEGORIES = ["전체", "콘서트", "뮤지컬", "연극", "전시/행사", "팬미팅"];

const SHOWS = [
  {
    id: 1,
    image: "images/derme.jpg",
    title: "멘토닉 클래식 나이트",
    location: "서울 롯데콘서트홀",
    date: "2025.02.15 ~ 2025.02.20",
    price: 55000,
    category: "콘서트",
  },
  {
    id: 2,
    image: "images/derme.jpg",
    title: "재즈 인 서울",
    location: "블루노트 서울",
    date: "2025.03.01 ~ 2025.03.05",
    price: 45000,
    category: "콘서트",
  },
  {
    id: 3,
    image: "images/derme.jpg",
    title: "락페스티벌 2025",
    location: "난지한강공원",
    date: "2025.04.10 ~ 2025.04.12",
    price: 88000,
    category: "콘서트",
  },
  {
    id: 4,
    image: "images/derme.jpg",
    title: "서머 일렉트로닉",
    location: "올림픽공원",
    date: "2025.06.20 ~ 2025.06.22",
    price: 110000,
    category: "콘서트",
  },
  {
    id: 5,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉극장",
    date: "2025.02.25 ~ 2025.03.20",
    price: 65000,
    category: "뮤지컬",
  },
  {
    id: 6,
    image: "images/derme.jpg",
    title: "쿼카의 모험",
    location: "대학로 아트센터",
    date: "2025.03.10 ~ 2025.04.15",
    price: 78000,
    category: "뮤지컬",
  },
  {
    id: 7,
    image: "images/derme.jpg",
    title: "지니와 요리사",
    location: "충무아트센터",
    date: "2025.05.01 ~ 2025.06.10",
    price: 85000,
    category: "뮤지컬",
  },
  {
    id: 8,
    image: "images/derme.jpg",
    title: "주인님의 노래",
    location: "예술의전당 자유극장",
    date: "2025.02.10 ~ 2025.03.05",
    price: 42000,
    category: "연극",
  },
  {
    id: 9,
    image: "images/derme.jpg",
    title: "김지훈의 원맨쇼",
    location: "명동예술극장",
    date: "2025.03.15 ~ 2025.04.10",
    price: 38000,
    category: "연극",
  },
  {
    id: 10,
    image: "images/derme.jpg",
    title: "마지막 인사",
    location: "대학로 소극장",
    date: "2025.04.01 ~ 2025.04.30",
    price: 35000,
    category: "연극",
  },
  {
    id: 11,
    image: "images/derme.jpg",
    title: "스테이크 요리 페스티벌",
    location: "부산 해운대 BEXCO",
    date: "2025.03.10 ~ 2025.03.15",
    price: 25000,
    category: "전시/행사",
  },
  {
    id: 12,
    image: "images/derme.jpg",
    title: "초희's 뷰티클래스",
    location: "코엑스",
    date: "2025.05.15 ~ 2025.05.22",
    price: 18000,
    category: "전시/행사",
  },
  {
    id: 13,
    image: "images/derme.jpg",
    title: "휘경이의 포트폴리오",
    location: "일산 킨텍스",
    date: "2025.06.05 ~ 2025.06.12",
    price: 22000,
    category: "전시/행사",
  },
  {
    id: 14,
    image: "images/derme.jpg",
    title: "쿼카와의 특별한 하루",
    location: "올림픽홀",
    date: "2025.03.18",
    price: 77000,
    category: "팬미팅",
  },
  {
    id: 15,
    image: "images/derme.jpg",
    title: "지니 첫 팬미팅",
    location: "YES24 라이브홀",
    date: "2025.04.22",
    price: 82000,
    category: "팬미팅",
  },
  {
    id: 16,
    image: "images/derme.jpg",
    title: "멘토님과 함께하는 JAVA여행",
    location: "광화문 교보아트홀",
    date: "2025.05.10",
    price: 65000,
    category: "팬미팅",
  },
  {
    id: 17,
    image: "images/derme.jpg",
    title: "멘토님과 함께하는 AI여행",
    location: "광화문 교보아트홀",
    date: "2025.05.11",
    price: 65000,
    category: "콘서트",
  },
];

export default function CurrentShowSection() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [category, setCategory] = useState("전체");
  const [filteredShows, setFilteredShows] = useState(SHOWS);
  const useSwiper = filteredShows.length > 4;

  const swiperRef = useRef(null);

  useEffect(() => {
    if (category === "전체") {
      setFilteredShows(SHOWS);
    } else {
      const filtered = SHOWS.filter((show) => show.category === category);
      setFilteredShows(filtered);
    }
  }, [category]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setSlidesPerView(1);
    } else if (windowWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }
  }, [windowWidth]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const ShowCard = ({ show }) => (
    <div className="flex flex-col h-full">
      <div className="relative w-full pt-[150%] mb-3">
        <img
          src={show.image}
          alt={show.title}
          className="absolute top-0 left-0 w-full h-full rounded-xl cursor-pointer object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="font-bold text-lg md:text-xl cursor-pointer">
          {show.title}
        </p>
        <p className="text-sm md:text-base">{show.location}</p>
        <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-4">
          {show.date}
        </p>
        <p className="text-sm md:text-base mt-auto">
          <span className="text-flesh-600 font-bold">예매가</span> :{" "}
          {show.price.toLocaleString()}
        </p>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-5">
      <h2 className="font-bold text-2xl md:text-3xl">현재 예매중인 공연</h2>

      <nav className="py-5">
        <div className="flex items-center mb-2">
          <div className="overflow-x-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <ul className="flex gap-3 items-center whitespace-nowrap">
              {CATEGORIES.map((category) => (
                <li
                  key={category}
                  className="px-4 md:px-5 py-1 border-2 text-base md:text-lg rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer shrink-0"
                  onClick={() => {
                    setCategory(category);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center ml-4 pl-2 bg-inherit">
            <p className="flex items-center gap-2 cursor-pointer shrink-0 ">
              더보기 <img src="images/icons/next-icon.svg" alt="더보기" />
            </p>
          </div>
        </div>
      </nav>

      {useSwiper ? (
        <div className="relative px-8 md:px-12">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
           bg-black text-white w-8 h-8 rounded-full flex items-center justify-center
           hover:bg-gray-800 transition-colors duration-300 focus:outline-none
           hidden md:flex"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft absoluteStrokeWidth />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
           bg-black text-white w-8 h-8 rounded-full flex items-center justify-center
           hover:bg-gray-800 transition-colors duration-300 focus:outline-none
           hidden md:flex"
            aria-label="다음 슬라이드"
          >
            <ChevronRight absoluteStrokeWidth />
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            navigation={false}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            className="mySwiper"
          >
            {SHOWS.map((show) => (
              <SwiperSlide key={show.id}>
                <ShowCard show={show} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination mt-6 relative"></div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredShows.map((show) => (
            <li key={show.id}>
              <ShowCard show={show} />
            </li>
          ))}
        </ul>
      )}

      <div className="w-full bg-gray-100 h-0.5 mt-10 md:mt-12"></div>
    </section>
  );
}
