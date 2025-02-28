"use client";

import React, { useState } from "react";
import { Banner } from "@/types/admin";

export default function BannerDragAndDrop({ data }: { data: Banner[] }) {
  const activeBanners = data.filter(
    (banner) => banner.bannerStatus === "활성화"
  );

  const [items, setItems] = useState<string[]>(
    activeBanners.map((banner) => banner.bannerTitle)
  ); // 배너 제목으로 items 초기화

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (index: number): void => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index: number): void => {
    if (index !== draggingIndex) {
      const newItems = [...items];
      const draggedItem = newItems.splice(draggingIndex!, 1)[0]; // Non-null assertion operator
      newItems.splice(index, 0, draggedItem);
      setItems(newItems);
      setDraggingIndex(index);
    }
  };

  const handleDragEnd = (): void => {
    setDraggingIndex(null);
  };

  return (
    <ul className="list-none p-0 w-full">
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => {
            e.preventDefault(); // 기본 동작 방지
            handleDragOver(index);
          }}
          onDragEnd={handleDragEnd}
          className={`m-[0.5px] p-1 text-xs text-zinc-700 font-semibold pl-7 w-full h-[25px] bg-white bg-drag-and-drop bg-no-repeat bg-[left_5px_center] border border-gray-400 cursor-move ${
            draggingIndex === index ? "opacity-80" : "opacity-100"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
