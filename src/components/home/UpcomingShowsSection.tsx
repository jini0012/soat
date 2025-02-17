import React from "react";

const UPCOMING_SHOWS = [
  {
    id: 1,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
  {
    id: 2,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
  {
    id: 3,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
  {
    id: 4,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
  {
    id: 5,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
  {
    id: 6,
    image: "images/derme.jpg",
    title: "카리나는 신이에요!",
    location: "광야",
    openDate: "2025.02.15 (금) 14:00 오픈",
  },
];

export default function UpcomingShowsSection() {
  return (
    <section>
      <h2 className="font-bold text-3xl py-5">현재 예매중인 공연</h2>
      <ul className="flex flex-wrap gap-6">
        {UPCOMING_SHOWS.map((show) => (
          <li key={show.id} className="w-1/3 min-w-[300px] flex flex-col">
            <img
              src={show.image}
              alt={show.title}
              className="w-[358px] h-[233px] rounded-xl mb-3"
            />
            <p className="font-bold text-xl cursor-pointer">{show.title}</p>
            <p>{show.location}</p>
            <p className="text-flesh-500 font-bold text-sm py-4">
              {show.openDate}
            </p>
          </li>
        ))}
      </ul>
      <button className="px-8 py-4 border rounded-xl flex gap-3 items-center text-xl m-auto my-8">
        오픈 예정 공연 전체보기
        <img src="images/icons/next-icon-defaltcolor.svg" alt="전체보기" />
      </button>
    </section>
  );
}
