import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import SiteAdminTable from "@/components/admin/SiteAdminTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
export default function SiteAdminListPage() {
  const GeneralUserData = [
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
    {
      email: "dnjs1111@soat.com",
      siteAdmin: "김예원",
      permissions: "전체권한",
    },
  ];

  return (
    <>
      <AdminHeader>시스템 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>관리자 계정 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <ListTitle>관리자 목록</ListTitle>
          <form action="">
            <AdminSearchInput
              id="siteAdminSearchInput"
              name="siteAdminSearch"
              label="관리자 목록 조회하기"
            />
            <QueryButton />
          </form>
        </div>
        <SiteAdminTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
