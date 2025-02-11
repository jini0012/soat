"use client"; // 클라이언트 컴포넌트로 설정

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [clickedSlide, setClickedSlide] = useState<number | null>(null);
  const handleClick = (num: number) => {
    setClickedSlide(num === clickedSlide ? null : num);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1, // 한 번에 1개의 슬라이드를 이동
    loop: false, // 마지막 슬라이드에서 첫 번째 슬라이드로 돌아감
    align: "start", // 슬라이드의 정렬을 시작점으로 설정
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto py-6 px-3">
      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((num) => (
            <div className="flex flex-col">
              <div
                key={num}
                className="flex-shrink-0 rounded-md mr-2 px-8 flex items-center justify-center h-60 bg-gray-200 text-2xl font-bold w-[142px] cursor-pointer"
                onClick={() => handleClick(num)}
              >
                Slide {num}
              </div>
              <div className="w-[142px] overflow-hidden text-ellipsis whitespace-nowrap">
                {num}
              </div>
              {clickedSlide === num && (
                <button className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white py-2">
                  클릭된 슬라이드 버튼
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
      >
        ▶
      </button>
    </div>
  );
}
