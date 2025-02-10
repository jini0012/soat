import Link from "next/link";

export default function ManagerHeader() {
  return (
    <header className="flex justify-between items-center p-3                              ">
      <h1>
        <Link href={"/manager"}>
          <img src="/images/icons/logo-temp.svg" alt="쏘앳" />
        </Link>
      </h1>
      <div className="flex flex-col items-center">
        <h2>관리자페이지</h2>
        {/* <h3 className="text-sm">나의 공연 등록 및 관리</h3> */}
      </div>
      <button className="flex">
        <img src="/images/icons/people.svg" className="mr-1" />
        로그아웃
      </button>
    </header>
  );
}
