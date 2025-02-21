import Error from "@/components/error/Error";
import Header from "@/components/Header";
import UnderConstruction from "@/components/error/UnderConstruction";

const IS_ERROR = true;

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="m-auto px-[30px] w-full h-[calc(100vh-76px)] sm:h-[calc(100vh-132px)] flex flex-col justify-center items-center">
        {IS_ERROR ? <Error /> : <UnderConstruction />}
      </main>
    </>
  );
}
