"use client";

import React, { useState } from "react";

export default function BannerDragAndDrop() {
  const [items, setItems] = useState<string[]>([
    "햇살극장 신규 오픈",
    "3월 한정 할인",
    "여름 페스티벌",
  ]);

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
          className={`m-[0.5px] p-1 text-[10px] font-semibold pl-7 w-full h-[25px] bg-white bg-drag-and-drop bg-no-repeat bg-[left_5px_center] border border-gray-400 cursor-move ${
            draggingIndex === index ? "opacity-80" : "opacity-100"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
