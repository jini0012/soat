"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function SlideBanner() {
  return (
    <SwiperWrapper className="relative w-full mb-[30px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="w-full h-[400px]"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-gray-100">
            <img
              src="images/derme.jpg"
              alt="slide 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-100 ">
            <img
              src="images/derme.jpg"
              alt="slide 2"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-100 ">
            <img
              src="images/derme.jpg"
              alt="slide 3"
              className="w-full h-full object-cover "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
}

const SwiperWrapper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    width: 15px !important;
    height: 25px !important;
    color: black !important;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 25px !important;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #d9d9d9;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
  }

  .swiper-pagination {
    bottom: 20px !important;
  }
`;
