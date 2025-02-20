import Link from "next/link";
interface ReservationDataProps {
  imageUrl: string;
  title: string;
  viewDate: string;
  bookId: number;
  isViewComplete?: boolean;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="flex justify-between gap-[10px]">{children}</ul>;
}

function Li({
  imageUrl,
  title,
  viewDate,
  bookId,
  isViewComplete,
}: ReservationDataProps) {
  return (
    <li className="size-full aspect-[90/162] w-[25vw] sm:w-[18vw]">
      <Link href={`/account/mybook/${bookId}`}>
        <article className="relative">
          <img
            src={`/${imageUrl}`}
            alt="공연 info"
            className={`bg-flesh-500 rounded-[10px] mb-1 aspect-[90/130] object-cover ${
              isViewComplete && "blur-[1px]"
            }`}
          />
          <h3 className="text-[10px] font-bold text-black w-full sm:text-xs md:text-sm lg:text-lg xl:text-2xl truncate">
            {title}
          </h3>
          <p className="text-[8px] text-gray-300 sm:text-xs md:text-sm lg:text-lg xl:text-2xl">
            {viewDate}
          </p>
          {isViewComplete && (
            <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transform rotate-[-50deg] text-white text-xs sm:text-sm md:text-2xl lg:text-4xl">
              관람완료
            </span>
          )}
        </article>
      </Link>
    </li>
  );
}

export { Li, Ul };
