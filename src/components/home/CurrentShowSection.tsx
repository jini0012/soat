import React from "react";

const CATEGORIES = ["로맨스", "액션", "드라마", "코미디", "공포", "성인"];

const SHOWS = [
  {
    id: 1,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    period: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 2,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    period: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 3,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    period: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
  {
    id: 4,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    location: "인천 멘토닉댁 어딘가",
    period: "2025.02.15 ~ 2025.03.07",
    price: 15000,
  },
];

export default function CurrentShowSection() {
  return (
    <section className="container mx-auto py-5">
      <h2 className="font-bold text-3xl">현재 예매중인 공연</h2>
      <nav className="flex items-center justify-between py-5">
        <ul className="flex gap-3 items-center">
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className="px-5 py-1 border-2 text-lg rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 cursor-pointer">
          더보기 <img src="images/icons/next-icon.svg" alt="더보기" />
        </p>
      </nav>
      <ul className="grid grid-cols-4 gap-6">
        {SHOWS.map((show) => (
          <li key={show.id}>
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-[379px] rounded-xl mb-3 cursor-pointer object-cover"
            />
            <p className="font-bold text-xl cursor-pointer">{show.title}</p>
            <p>{show.location}</p>
            <p className="text-gray-500 text-sm mb-4">{show.period}</p>
            <p>
              <span className="text-flesh-600 font-bold">예매가</span> :{" "}
              {show.price.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
      <div className="w-full bg-gray-100 h-0.5 mt-8"></div>
    </section>
  );
}
