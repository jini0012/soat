import { Button } from "@/components/controls/Button";
import { Ul, Li } from "@/components/account/ReservationItem";

const reservation = [
  {
    bookId: 1,
    image: "images/derme.jpg",
    title: "주인님 사랑해요!",
    viewDate: "2025.03.04",
    isViewComplete: true,
  },
  {
    bookId: 2,
    image: "images/derme.jpg",
    title: "카리나는 신이에요",
    viewDate: "2025.02.20",
    isViewComplete: true,
  },
  {
    bookId: 3,
    image: "images/derme.jpg",
    title: "라떼 is..horse☕🐎",
    viewDate: "2025.02.18",
    isViewComplete: true,
  },
  {
    bookId: 4,
    image: "images/derme.jpg",
    title: "고양이의 비밀스러운 삶",
    viewDate: "2025.01.15",
    isViewComplete: false,
  },
  {
    bookId: 5,
    image: "images/derme.jpg",
    title: "코딩의 신 되기",
    viewDate: "2025.02.05",
    isViewComplete: true,
  },
  {
    bookId: 6,
    image: "images/derme.jpg",
    title: "우주의 끝에서 만난 너",
    viewDate: "2025.03.12",
    isViewComplete: false,
  },
  {
    bookId: 7,
    image: "images/derme.jpg",
    title: "맛있는 떡볶이 레시피 100가지",
    viewDate: "2025.01.25",
    isViewComplete: true,
  },
  {
    bookId: 8,
    image: "images/derme.jpg",
    title: "눈물의 비가 내리는 밤",
    viewDate: "2025.02.28",
    isViewComplete: true,
  },
  {
    bookId: 9,
    image: "images/derme.jpg",
    title: "아이돌 연습생의 하루",
    viewDate: "2025.01.30",
    isViewComplete: false,
  },
  {
    bookId: 10,
    image: "images/derme.jpg",
    title: "블록체인으로 세상을 바꾸다",
    viewDate: "2025.03.08",
    isViewComplete: true,
  },
  {
    bookId: 11,
    image: "images/derme.jpg",
    title: "뉴진스의 하입보이 비하인드",
    viewDate: "2025.01.18",
    isViewComplete: true,
  },
  {
    bookId: 12,
    image: "images/derme.jpg",
    title: "사랑은 타이밍이다",
    viewDate: "2025.02.14",
    isViewComplete: true,
  },
  {
    bookId: 13,
    image: "images/derme.jpg",
    title: "도시의 낮과 밤",
    viewDate: "2025.03.01",
    isViewComplete: false,
  },
  {
    bookId: 14,
    image: "images/derme.jpg",
    title: "인공지능과 나의 미래",
    viewDate: "2025.01.22",
    isViewComplete: true,
  },
  {
    bookId: 15,
    image: "images/derme.jpg",
    title: "라면은 역시 틀어야 맛있다",
    viewDate: "2025.02.10",
    isViewComplete: false,
  },
  {
    bookId: 16,
    image: "images/derme.jpg",
    title: "국내여행 숨은 명소 TOP 50",
    viewDate: "2025.03.15",
    isViewComplete: true,
  },
  {
    bookId: 17,
    image: "images/derme.jpg",
    title: "서울의 밤은 당신의 것",
    viewDate: "2025.01.10",
    isViewComplete: true,
  },
  {
    bookId: 18,
    image: "images/derme.jpg",
    title: "반려동물과 행복한 생활",
    viewDate: "2025.02.25",
    isViewComplete: false,
  },
  {
    bookId: 19,
    image: "images/derme.jpg",
    title: "웹개발 마스터하기",
    viewDate: "2025.03.10",
    isViewComplete: true,
  },
  {
    bookId: 20,
    image: "images/derme.jpg",
    title: "조금 늦어도 괜찮아",
    viewDate: "2025.01.28",
    isViewComplete: true,
  },
];

interface ReservationDataProps {
  slice?: number;
  isViewComplete?: boolean;
}

function ReservationData({
  slice = 3,
  isViewComplete = false,
}: ReservationDataProps) {
  return (
    <>
      {reservation
        .filter((book) =>
          isViewComplete ? !!book.isViewComplete : !book.isViewComplete
        )
        .sort(
          (a, b) =>
            new Date(b.viewDate).getTime() - new Date(a.viewDate).getTime()
        )
        .slice(0, slice)
        .map((book) => {
          return (
            <Li
              key={book.bookId}
              bookId={book.bookId}
              imageUrl={book.image}
              title={book.title}
              viewDate={book.viewDate}
              isViewComplete={book.isViewComplete}
            />
          );
        })}
    </>
  );
}

function ReservationList() {
  return (
    <section className="relative sm:col-span-2 sm:row-start-1 sm:mr-6 md:mx-6">
      <h2 className="my-[10px] text-sm sm:text-3xl sm:my-6  sm:font-bold">
        예매 내역
      </h2>
      <Button
        type="button"
        size="small"
        highlight={true}
        className="rounded-[30px] py-[2.5px] px-[13px] bg-flesh-500 absolute top-2 right-0 sm:text-base sm:font-bold sm:top-6"
      >
        더보기
      </Button>
      <Ul>
        <ReservationData slice={3} />
      </Ul>
    </section>
  );
}

function BeforeReservationList() {
  return (
    <>
      <section className="relative sm:col-span-2 sm:row-start-2 sm:mr-6 md:mx-6">
        <h2 className="my-[10px] text-sm sm:text-3xl sm:my-6 sm:font-bold">
          지난 예매 내역
        </h2>
        <Button
          type="button"
          size="small"
          highlight={true}
          className="rounded-[30px] py-[2.5px] px-[13px] bg-flesh-500 absolute top-2 right-0 sm:text-base sm:font-bold sm:top-6"
        >
          더보기
        </Button>
        <Ul>
          <ReservationData slice={3} isViewComplete />
        </Ul>
      </section>
    </>
  );
}

export default function MyReservation() {
  return (
    <>
      <ReservationList />
      <BeforeReservationList />
    </>
  );
}
