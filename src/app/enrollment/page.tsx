import React from "react";
import Link from "next/link";
import EnrollWrapper from "@/components/enrollment/EnrollWrapper";
import EnrollFooter from "@/components/enrollment/EnrollFooter";
import EnrollMains from "@/components/enrollment/EnrollMains";

export default function EnrollmentPage() {
  return (
    <>
      <header className="max-w-[1920px] m-auto px-[80px]">
        <Link href={"/"} className="text-flesh-600">
          <h1 className="font-bold text-3xl italic py-5">SO@</h1>
        </Link>
      </header>
      <EnrollMains />
      <EnrollWrapper>
        <EnrollFooter />
      </EnrollWrapper>
    </>
  );
}
