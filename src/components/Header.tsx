import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="m-auto w-full flex justify-center sm:mt-[50px] border-b-2 border-gray-300 box-border h-full max-h-[76px] sm:max-h-[132px] sm:border-none">
        <h1 className="font-bold text-5xl italic py-5">
          <Link href={"/"} className="text-flesh-600">
            <img
              src="images/icons/logo-temp.svg"
              alt="soat"
              className="sm:w-[123px]"
            />
          </Link>
        </h1>
      </header>
    </>
  );
}
