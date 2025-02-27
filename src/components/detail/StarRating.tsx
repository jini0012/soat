import { Star } from "lucide-react";

export default function StarRating({ ratings }: { ratings: number }) {
  return (
    <div className="flex gap-x-1 w-fit" aria-label={`평점 ${ratings}점`}>
      {[...Array(5)].map((_, index) => {
        if (index < ratings) {
          return (
            <Star
              key={index}
              className="w-5 h-5 fill-flesh-600 stroke-flesh-600"
            />
          );
        } else {
          return (
            <Star key={index} className="w-5 h-5 fill-white stroke-[#767676]" />
          );
        }
      })}
    </div>
  );
}
