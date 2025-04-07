import Header from "@/components/home/Header";
import ReservationItemDetail from "@/components/account/ReservationItemDetail";

export default function Page() {
  return (
    <>
      <Header />
      <main
        className={`relative m-auto w-full pt-5 px-[30px] sm:max-fit md:px-[140px] max-w-[360px] sm:max-w-[1000px]`}
      >
        <ReservationItemDetail />
      </main>
    </>
  );
}
