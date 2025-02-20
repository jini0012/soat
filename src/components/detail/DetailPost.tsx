import StarRating from "./StarRating";

export default function DetailPost({
  ratings,
  author,
  date,
  content,
}: {
  ratings: number;
  author: string;
  date: string;
  content: string;
}) {
  return (
    <article className="w-full rounded-md border-2 flex flex-col  pt-8 pb-12 px-11">
      <div className="w-full flex flex-wrap justify-between items-center mb-8">
        <StarRating ratings={ratings} />
        <time dateTime={date}>{date}</time>
      </div>
      <p className="font-bold text-lg">{author}</p>
      <p>{content}</p>
    </article>
  );
}
