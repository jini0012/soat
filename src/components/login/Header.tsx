import Link from "next/link";

export default function Header() {
  return (
    <header className="m-auto w-[360px] flex justify-center mt-[50px] ">
      <h1 className="font-bold text-5xl italic py-5">
        <Link href={"/"} className="text-flesh-600">
          SO@
        </Link>
      </h1>
    </header>
  );
}
