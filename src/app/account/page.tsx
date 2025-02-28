import Header from "@/components/home/Header";
import UserInfo from "./UserInfo";
import MyReservation from "./MyReservation";

export default function page() {
  return (
    <>
      <Header />
      <main
        className={`grid relative m-auto w-full pt-[10px] px-[30px] sm:grid-flow-col sm:grid-rows-2 sm:gap-4 justify-center`}
      >
        <UserInfo />
        <MyReservation />
      </main>
    </>
  );
}
