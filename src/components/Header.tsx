import Link from "next/link";

export default function Header() {
  return (
    <header className="m-auto w-full flex justify-center border-b-2 border-gray-300 box-border h-full max-h-[76px] sm:max-h-[132px]">
      <h1 className="font-bold text-3xl italic py-5">
        <Link href={"/"} className="text-flesh-600">
          SO@
        </Link>
      </h1>
    </header>
  );
}
