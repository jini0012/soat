import Image from "next/image";
import Link from "next/link";

interface ReservationDataProps {
  imageUrl: string;
  title: string;
  viewDate: string;
  bookId: number;
  isViewComplete?: boolean;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="flex justify-between">{children}</ul>;
}

function Li({
  imageUrl,
  title,
  viewDate,
  bookId,
  isViewComplete,
}: ReservationDataProps) {
  return (
    <li className="w-[90px] h-[162px]">
      <Link href={`/book/detail/${bookId}`}>
        <article className="relative">
          <Image
            className={`bg-flesh-500 rounded-[10px] mb-1 ${
              isViewComplete && "blur-[1px]"
            }`}
            src={`/${imageUrl}`}
            alt="공연 info"
            width={90}
            height={130}
          />
          <h3 className="text-[10px] font-bold text-black truncate">{title}</h3>
          <p className="text-[8px] text-gray-300">{viewDate}</p>
          {isViewComplete && (
            <span className="absolute top-[50px] left-[25px] text-white text-xs">
              관람완료
            </span>
          )}
        </article>
      </Link>
    </li>
  );
}

export { Li, Ul };
