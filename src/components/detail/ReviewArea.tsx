import React, { useState } from "react";
import TextArea from "../controls/TextArea";
import { Star } from "lucide-react";
import ReviewList from "./ReviewList";
import { Button } from "../controls/Button";

export default function ReviewArea() {
  const [isReview, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <ul>
        <li className="flex gap-[10px] text-xl mb-[15px] items-center">
          <img src="images/icons/Subtract-icon.svg" alt="" />
          <h2 className="font-bold">한줄평 작성하기</h2>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="cursor-pointer"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  className="hidden"
                  onChange={() => setRating(star)}
                />
                <Star
                  className="w-5 h-5"
                  color="#FC4C13"
                  fill={star <= (hover || rating) ? "#FC4C13" : "none"}
                  strokeWidth={1}
                />
              </label>
            ))}
          </div>
        </li>
        <li className="relative">
          <div className="flex flex-col gap-4">
            <TextArea
              value={isReview}
              onChange={setReview}
              placeholder="한줄평은 최대 140 글자 까지 작성 가능합니다!"
              max={140}
            />
            <span className="absolute bottom-[65px] right-5 text-gray-500 text-sm">
              {isReview.length}/140
            </span>
            <div className="flex justify-end">
              <Button highlight className=" text-white ">
                작성하기
              </Button>
            </div>
          </div>
        </li>
      </ul>
      <ReviewList />
    </>
  );
}
