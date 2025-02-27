import { Button } from "@/components/controls/Button";
import { Ul, Li } from "@/components/account/ReservationItem";

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
        <Li
          imageUrl="공연이미지"
          bookId={4}
          title="노는게 제일 조아"
          viewDate="2025.06.03"
        />
        <Li
          imageUrl="공연이미지"
          bookId={5}
          title="도비는 자유에요! 직장 이직 예쁘게 하는 비법 대공개"
          viewDate="2025.05.05"
        />
        <Li
          imageUrl="공연이미지"
          bookId={6}
          title="귤락이란 무엇일까"
          viewDate="2025.03.25"
        />
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
          <Li
            imageUrl="공연이미지"
            bookId={1}
            title="주인님 사랑해요!"
            viewDate="2025.03.04"
            isViewComplete
          />
          <Li
            imageUrl="공연이미지"
            bookId={2}
            title="카리나는 신이에요"
            viewDate="2025.02.20"
            isViewComplete
          />
          <Li
            imageUrl="공연이미지"
            bookId={3}
            title="라떼 is..horse☕🐎"
            viewDate="2025.02.18"
            isViewComplete
          />
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
