import Header from "@/components/Header";
import ReservationItemDetail from "@/components/myPage/ReservationItemDetail";

export default function Page() {
  return (
    <>
      <Header />
      <main className={`relative m-auto w-full max-w-[360px] pt-5 px-[30px]`}>
        <ReservationItemDetail />
      </main>
    </>
  );
}
