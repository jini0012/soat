import React from "react";

export default function UpcomingShowsSection() {
  return (
    <section>
      <h2 className="font-bold text-[30px] py-[20px]">현재 예매중인 공연</h2>
      <ul className="flex flex-wrap gap-[22px]">
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
        <li className="w-[32%] min-w-[300px] flex flex-col">
          <img
            src="images/derme.jpg"
            alt="더미이미지"
            className="w-[358px] h-[233px] rounded-xl mb-[10px] "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            카리나는 신이에요!
          </p>
          <p>광야</p>
          <p className="text-flesh-500 font-bold text-[14px] py-[15px]">
            2025.02.15 (금) 14:00 오픈
          </p>
        </li>
      </ul>
      <button className="px-[35px] py-[15px] border-[1px] rounded-xl flex gap-[10px] items-center text-[20px] m-auto my-[30px]">
        오픈 예정 공연 전체보기{" "}
        <img src="images/icons/next-icon-defaltcolor.svg" alt="전체보기" />
      </button>
    </section>
  );
}
