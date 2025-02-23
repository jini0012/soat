import React from "react";

const CATEGORIES = ["로맨스", "액션", "드라마", "코미디", "공포", "성인"];

const SHOWS = [
  {
    id: 1,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    date: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 2,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    date: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 3,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    date: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 4,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    date: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
];

export default function CurrentShowSection() {
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {SHOWS.map((show) => (
          <li key={show.id} className="flex flex-col h-full">
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
          </li>
        ))}
      </ul>

      <div className="w-full bg-gray-100 h-0.5 mt-6 md:mt-8"></div>
    </section>
  );
}
