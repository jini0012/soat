"use client";
import React, { useState } from "react";

export default function ShowDetailSection() {
  const [isTapState, setTapState] = useState("SHOWDETAIL");
  return (
    <section className="mb-[50px]">
      <h2 className="sr-only">공연 정보</h2>
      <ul className="flex">
        {/* 공연정보 TAP일때 */}
        {isTapState === "SHOWDETAIL" ? (
          <li
            className="w-[33%] border-b-[3px] text-flesh-500 text-center border-flesh-500 cursor-pointer py-[5px]"
            onClick={() => {
              setTapState("SHOWDETAIL");
            }}
          >
            공연정보
          </li>
        ) : (
          <li
            className="w-[33%] border-b-[3px] text-[#404040] text-center border-[#404040] cursor-pointer py-[5px]"
            onClick={() => {
              setTapState("SHOWDETAIL");
            }}
          >
            공연정보
          </li>
        )}

        {/* 한줄평 TAP일때 */}
        {isTapState === "REVIEW" ? (
          <li
            className="w-[33%] border-b-[3px] text-flesh-500 text-center border-flesh-500 cursor-pointer py-[5px] "
            onClick={() => {
              setTapState("REVIEW");
            }}
          >
            한줄평
          </li>
        ) : (
          <li
            className="w-[33%] border-b-[3px] text-[#404040] text-center border-[#404040] cursor-pointer py-[5px]"
            onClick={() => {
              setTapState("REVIEW");
            }}
          >
            한줄평
          </li>
        )}

        {/* 유의사항 TAP일때 */}
        {isTapState === "CAUTION" ? (
          <li
            className="w-[33%] border-b-[3px] text-flesh-500 text-center border-flesh-500 cursor-pointer py-[5px]"
            onClick={() => {
              setTapState("CAUTION");
            }}
          >
            유의사항
          </li>
        ) : (
          <li
            className="w-[33%] border-b-[3px] text-[#404040] text-center border-[#404040] cursor-pointer py-[5px]"
            onClick={() => {
              setTapState("CAUTION");
            }}
          >
            유의사항
          </li>
        )}
      </ul>
    </section>
  );
}
