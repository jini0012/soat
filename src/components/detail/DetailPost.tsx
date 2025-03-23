import StarRating from "./StarRating";
import { ThumbsUp } from "lucide-react"; // 아이콘 라이브러리 필요

export default function DetailPost({
  id,
  ratings,
  author,
  date,
  content,
  likeCount = 0,
  isLiked = false,
  onLike,
}: {
  id: string;
  ratings: number;
  author: string;
  date: string;
  content: string;
  likeCount?: number;
  isLiked?: boolean;
  onLike?: (id: string) => void;
}) {
  return (
    <article className="w-full rounded-md border-2 flex flex-col pt-8 pb-12 px-11">
      <div className="w-full flex flex-wrap justify-between items-center mb-8">
        <StarRating ratings={ratings} />
        <time dateTime={date}>{date}</time>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">{author}</p>
        <button
          onClick={() => onLike && onLike(id)} // onLikeToggle 대신 onLike로 변경
          className="flex items-center gap-2 text-gray-600 hover:text-flesh-500"
          aria-label={isLiked ? "공감" : "공감취소"}
        >
          {isLiked ? <ThumbsUp color="#fc4c13" /> : <ThumbsUp />}
          <span>{likeCount}</span>
        </button>
      </div>
      <p className="mt-2">{content}</p>
    </article>
  );
}
