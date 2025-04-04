"use client"; // 클라이언트 컴포넌트로 설정

import React, { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PerformanceMoreBtn from "./PerformanceMoreBtn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PerformanceData } from "@/app/api/performance/route";
import axios from "axios";

export default function EmblaCarousel() {
  const [clickedSlide, setClickedSlide] = useState<number | null>(null); // 클릭한 슬라이드 관리
  const [performanceList, setPerformanceList] = useState<PerformanceData[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null); // carouselRef의 타입을 명시

  const handleClick = (num: number) => {
    // 클릭한 슬라이드가 이미 선택된 슬라이드라면 닫기, 아니면 열기
    setClickedSlide((prevClickedSlide) =>
      prevClickedSlide === num ? null : num
    );
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: false,
    align: "start",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchPerformanceList() {
      try {
        const response = await axios.get("/api/manager/performance");
        setPerformanceList(response.data); // 공연 목록을 상태에 저장
      } catch (error) {
        console.error("공연 목록 불러오기 실패:", error);
      }
    }

    fetchPerformanceList();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    };

    const viewport = emblaApi.containerNode();
    viewport.addEventListener("wheel", onWheel);

    return () => {
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [emblaApi]);

  const handleDocumentClick = (event: MouseEvent) => {
    // 클릭된 요소가 carousel 내부에 없으면 clickedSlide를 null로 설정
    if (
      carouselRef.current &&
      !carouselRef.current.contains(event.target as Node)
    ) {
      setClickedSlide(null); // 슬라이드 외부 클릭 시 닫히게 처리
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    if (clickedSlide !== null) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      // 외부 클릭시 슬라이드 닫기
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [clickedSlide]); // clickedSlide가 변경될 때마다 리스너를 다시 설정

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleDocumentClick(event.nativeEvent);
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto py-6 px-3">
      <h2 className="text-2xl font-bold mb-6">나의 공연</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4" ref={carouselRef}>
          {performanceList.map((data: PerformanceData) => {
            const dataIndex = performanceList.indexOf(data);
            const num = dataIndex + 1; // 슬라이드 번호 계산 (1부터 시작)
            return (
              <article key={data.id} className="flex-shrink-0 min-w-0 mb-5">
                <Card
                  className={`w-40 transition-all duration-200  ${
                    clickedSlide === num ? "shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick(num);
                  }}
                >
                  <CardContent className="p-0">
                    <img
                      src={data.poster.url}
                      alt={data.poster.fileName}
                      className="h-60 rounded-t-md object-cover"
                    />
                    <div className="p-3">
                      <Badge variant="outline" className="mb-2">
                        {data.category}
                      </Badge>
                      <h3 className="font-medium text-sm truncate">
                        {data.title}
                      </h3>
                      <span className="text-gray-500 text-sm">
                        {new Date(data.createdAt).toLocaleDateString("ko-KR")}
                      </span>
                      {clickedSlide === num && (
                        <div className="mt-3">
                          <PerformanceMoreBtn onClick={handleButtonClick} />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
