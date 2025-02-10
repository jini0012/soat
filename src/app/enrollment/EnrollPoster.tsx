import React, { useState } from "react";
import { EnrollPosterProps } from "./modal";

export default function EnrollPoster({ onPosterChange }: EnrollPosterProps) {
  const [previewPoster, setPreviewPoster] = useState<string | null>(null);

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewPoster(reader.result as string);
        onPosterChange(file);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="relative w-full">
        <div className="w-full bg-gray-300 aspect-[210/297]">
          {previewPoster && (
            <img
              className="w-full h-full object-cover"
              src={previewPoster}
              alt="포스터 미리보기"
            />
          )}
        </div>
        <label
          className="w-[20%] aspect-[1/1] rounded-full absolute bottom-0 right-0 bg-flesh-400 z-100 cursor-pointer"
          htmlFor="poster"
        >
          <p className="sr-only">공연 포스터 추가하기</p>
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
