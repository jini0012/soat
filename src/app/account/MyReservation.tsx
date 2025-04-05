import { Button } from "@/components/controls/Button";
import ReservationListData from "@/components/account/ReservationItem";

function ReservationList() {
  return (
    <section className="max-w-[1000px] relative sm:col-span-2 sm:row-start-1 sm:mr-6 md:mx-6">
      <h2 className="my-[10px] text-sm sm:text-3xl sm:my-6 font-bold">
        예매 내역
      </h2>
      <Button
        type="button"
        size="small"
        highlight={true}
        className="rounded-[30px] py-[2.5px] px-[13px] bg-flesh-500 absolute top-2 right-0 sm:text-base sm:font-bold sm:top-6"
        href="/account/mybook?book=total"
      >
        더보기
      </Button>
      <ReservationListData slice={3} />
    </section>
  );
}

function BeforeReservationList() {
  return (
    <>
      <section className="max-w-[1000px] relative sm:col-span-2 sm:row-start-2 sm:mr-6 md:mx-6">
        <h2 className="my-[10px] text-sm sm:text-3xl sm:my-6 font-bold">
          지난 예매 내역
        </h2>
        <Button
          type="button"
          size="small"
          highlight={true}
          className="rounded-[30px] py-[2.5px] px-[13px] bg-flesh-500 absolute top-2 right-0 sm:text-base sm:font-bold sm:top-6"
          href="/account/mybook?book=past"
        >
          더보기
        </Button>
        <ReservationListData slice={3} isViewComplete />
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
