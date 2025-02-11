import React from "react";

export default function CurrentShowSection() {
  return (
    <section className="px-[80px]">
      <h2 className="font-bold text-[30px]">현재 예매중인 공연</h2>
      <nav className="flex items-center justify-between py-[20px]">
        <ul className="flex gap-[10px] items-center  justify-between">
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            로맨스
          </li>
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            액션
          </li>
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            드라마
          </li>
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            코미디
          </li>
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            공포
          </li>
          <li className="px-[20px] py-[5px] border-2 text-[18px] rounded-lg hover:bg-flesh-300 hover:text-white hover:border-flesh-400 cursor-pointer">
            성인
          </li>
        </ul>
        <p className="flex items-center gap-2">
          더보기 <img src="images/icons/next-icon.svg" alt="더보기" />
        </p>
      </nav>
      <ul className="flex gap-[20px]  justify-between">
        <li>
          <img
            src="images/derme.jpg"
            alt=""
            className="w-[256px] h-[379px] rounded-xl mb-[10px] cursor-pointer "
          />
          <p className="font-bold text-[20px] cursor-pointer">
            주인님 사랑해요!
          </p>
          <p> 인천 멘토닉댁 어딘가</p>
          <p className="text-gray-500 text-[14px] mb-[15px]">
            2025.02.15 ~ 2025.03.07
          </p>
          <p>
            <span className="text-flesh-600 font-bold">예매가</span> : 15,000{" "}
          </p>
        </li>
        <li>
          <img
            src="images/derme.jpg"
            alt=""
            className="w-[256px] h-[379px] rounded-xl mb-[10px] cursor-pointer"
          />
          <p className="font-bold text-[20px] cursor-pointer">
            주인님 사랑해요!
          </p>
          <p>인천 멘토닉댁 어딘가</p>
          <p className="text-gray-500 text-[14px] mb-[15px]">
            2025.02.15 ~ 2025.03.07
          </p>
          <p>
            <span className="text-flesh-600 font-bold">예매가</span> : 15,000{" "}
          </p>
        </li>
        <li>
          <img
            src="images/derme.jpg"
            alt=""
            className="w-[256px] h-[379px] rounded-xl mb-[10px] cursor-pointer"
          />
          <p className="font-bold text-[20px] cursor-pointer">
            주인님 사랑해요!
          </p>
          <p>인천 멘토닉댁 어딘가</p>
          <p className="text-gray-500 text-[14px] mb-[15px]">
            2025.02.15 ~ 2025.03.07
          </p>
          <p>
            <span className="text-flesh-600 font-bold">예매가</span> : 15,000{" "}
          </p>
        </li>
        <li>
          <img
            src="images/derme.jpg"
            alt=""
            className="w-[256px] h-[379px] rounded-xl mb-[10px] cursor-pointer"
          />
          <p className="font-bold text-[20px] cursor-pointer">
            주인님 사랑해요!
          </p>
          <p>인천 멘토닉댁 어딘가</p>
          <p className="text-gray-500 text-[14px] mb-[15px]">
            2025.02.15 ~ 2025.03.07
          </p>
          <p>
            <span className="text-flesh-600 font-bold">예매가</span> : 15,000{" "}
          </p>
        </li>
      </ul>
    </section>
  );
}
