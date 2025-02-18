import Header from "@/components/Header";
import UserInfoUpdate from "@/components/account/UserInfoUpdate";

export default function Page() {
  return (
    <>
      <Header />
      <main className={`relative m-auto w-full max-w-[360px] pt-5 px-[30px]`}>
        <UserInfoUpdate />
      </main>
    </>
  );
}
