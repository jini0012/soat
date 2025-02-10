import Link from "next/link";

export default function Header() {
  return (
    <header className="m-auto w-[360px] flex justify-center border-b-2 border-gray-300">
      <h1 className="font-bold text-3xl italic py-5">
        <Link href={"/"} className="text-flesh-600">
          SO@
        </Link>
      </h1>
    </header>
  );
}
