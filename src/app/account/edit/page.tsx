import Header from "@/components/Header";
import UserInfoUpdate from "@/components/account/UserInfoUpdate";

export default function Page() {
  return (
    <>
      <Header />
      <main
        className={`relative m-auto w-full pt-5 px-[30px] flex flex-col items-center`}
      >
        <UserInfoUpdate />
      </main>
    </>
  );
}
