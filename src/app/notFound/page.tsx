"use client";
import Error from "./Error";
import UnderConstruction from "./UnderConstruction";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isError = searchParams.get("error") === "404";
  // query string 에 ?error=404 가 있는지 확인하고 404이면 Error 컴포넌트, 없으면 공사중 컴포넌트 렌더링

  return (
    <>
      <Header />
      <main className="m-auto px-[30px] w-full h-[calc(100vh-76px)] sm:h-[calc(100vh-132px)] flex flex-col justify-center items-center">
        {isError ? (
          <Error router={router} />
        ) : (
          <UnderConstruction router={router} />
        )}
      </main>
    </>
  );
}
