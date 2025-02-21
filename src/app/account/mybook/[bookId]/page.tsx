import Header from "@/components/Header";
import ReservationItemDetail from "@/components/account/ReservationItemDetail";

export default function Page() {
  return (
    <>
      <Header />
      <main className={`relative m-auto w-full pt-5 px-[30px] sm:max-fit`}>
        <ReservationItemDetail />
      </main>
    </>
  );
}
