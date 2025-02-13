import Image from "next/image";
import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import BannerListTable from "@/components/admin/BannerListTable";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
import BannerDisplayOrder from "./BannerDisplayOrder";
export default function BannerListPage() {
  const GeneralUserData = [
    {
      bannerTitle: "햇살극장 신규 오픈",
      registrationDate: "2025.02.10",
      bannerStatus: "활성화",
    },
    {
      bannerTitle: "3월 한정 할인",
      registrationDate: "2025.02.25",
      bannerStatus: "활성화",
    },
    {
      bannerTitle: "여름 페스티벌",
      registrationDate: "2025.02.01",
      bannerStatus: "비활성화",
    },
    {
      bannerTitle: "가을 연극제",
      registrationDate: "2025.01.20",
      bannerStatus: "비활성화",
    },
    {
      bannerTitle: "크리스마스 특집",
      registrationDate: "2024.12.15",
      bannerStatus: "비활성화",
    },
  ];

  return (
    <>
      <AdminHeader>컨텐츠 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>메인 배너 등록 및 관리</SubTabDescription>
        <div className="mt-[20px] ">
          <ListTitle>배너 목록</ListTitle>
        </div>
        <div className="w-full flex justify-end">
          <button className="flex gap-1 items-center justify-end mb-1">
            <Image
              src="/images/icons/registration-btn.svg"
              alt="Registration Button"
              width={12}
              height={12}
            />
            <p className="text-[11px] font-medium">배너 등록하기</p>
          </button>
        </div>
        <BannerListTable data={GeneralUserData} />
        <section className="mt-10">
          <BannerDisplayOrder />
        </section>
      </AdminMain>
    </>
  );
}
