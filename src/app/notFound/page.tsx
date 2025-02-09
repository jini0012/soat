"use client";
import Error from "./Error";
import UnderConstruction from "./UnderConstruction";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isError = searchParams.get("error") === "404";

  return (
    <>
      <Header />
      <main className="m-auto px-[30px] w-[360px] h-[564px] flex flex-col justify-center items-center">
        {isError ? (
          <Error router={router} />
        ) : (
          <UnderConstruction router={router} />
        )}
      </main>
    </>
  );
}
