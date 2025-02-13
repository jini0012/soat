import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
export default function MaintenanceModePage() {
  return (
    <>
      <AdminHeader>시스템 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>서비스 점검 모드 설정</SubTabDescription>
        <div className="mt-5">
          <ListTitle>모드 설정하기</ListTitle>
        </div>
        <div className="mt-[10px] border border-gray-300 p-4 ">
          <section className="mb-9 flex flex-col items-start">
            <h3 className="font-semibold text-[14px] mb-3">
              1. 점검 모드 설정
            </h3>
            <ul className="text-[12px] flex flex-col gap-2">
              <li className="pl-8">공사중 모드 활성화</li>
              <li className="pl-8">서비스 정상 운영 유지</li>
            </ul>
          </section>
          <section className="flex flex-col items-start">
            <h3 className="font-semibold text-[14px] mb-3">
              2. 적용할 페이지 선택
            </h3>
            <ul className="text-[12px] flex flex-col gap-2">
              <li className="pl-8">전체 페이지</li>
              <li className="pl-8">메인 페이지</li>
              <li className="pl-8">예매 페이지</li>
              <li className="pl-8">관리자 페이지</li>
            </ul>
          </section>
          <div className="mt-8 flex justify-end">
            <button className="bg-flesh-500 w-[65px] h-[25px] rounded-md text-[12px] text-white font-semibold">
              저장하기
            </button>
          </div>
        </div>
      </AdminMain>
    </>
  );
}
