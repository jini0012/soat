"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPoster } from "@/redux/slices/enrollSlice";
import { Plus } from "lucide-react";

export default function EnrollPoster() {
  const [fileName, setFileName] = useState<string>("");
  const [previewPoster, setPreviewPoster] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const fileURL = URL.createObjectURL(file); // Blob URL 생성
      setPreviewPoster(fileURL); // Blob URL을 미리보기로 설정
      setFileName(file.name);
      dispatch(setPoster(file)); // 파일을 Redux에 저장
    }
  };

  return (
    <>
      <div className="relative lg:h-full w-full flex">
        <div className="w-full h-full bg-gray-300 hidden lg:block">
          {previewPoster && (
            <img
              className="w-full h-full object-cover"
              src={previewPoster}
              alt="포스터 미리보기"
            />
          )}
        </div>

        <div className="border-2 rounded-lg px-4 py-2 flex-1 w-full bg-background lg:hidden">
          {fileName ? fileName : "파일을 선택하세요"}
        </div>
        <label
          className="flex justify-center items-center  rounded-md lg:w-[20%] lg:aspect-[1/1] lg:rounded-full lg:absolute lg:bottom-0 lg:right-0 lg:bg-flesh-400 lg:z-100  cursor-pointer"
          htmlFor="poster"
        >
          <Plus className="" />
        </label>

        <input
          className="sr-only"
          id="poster"
          name="poster"
          type="file"
          onChange={handleFileOnChange}
        />
      </div>
    </>
  );
}
