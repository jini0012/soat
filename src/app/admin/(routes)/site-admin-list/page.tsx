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
      email: "john.doe@example.com",
      siteAdmin: "홍지현",
      permissions: "전체권한",
    },
    {
      email: "jane.doe@example.com",
      siteAdmin: "이수민",
      permissions: "읽기 전용",
    },
    {
      email: "alice.smith@example.com",
      siteAdmin: "김유리",
      permissions: "일부 권한",
    },
    {
      email: "bob.jones@example.com",
      siteAdmin: "박상민",
      permissions: "전체권한",
    },
    {
      email: "charlie.brown@example.com",
      siteAdmin: "이하늘",
      permissions: "읽기 전용",
    },
    {
      email: "david.williams@example.com",
      siteAdmin: "최지혜",
      permissions: "일부 권한",
    },
    {
      email: "eva.johnson@example.com",
      siteAdmin: "강준호",
      permissions: "전체권한",
    },
    {
      email: "frank.white@example.com",
      siteAdmin: "정민수",
      permissions: "일부 권한",
    },
    {
      email: "grace.green@example.com",
      siteAdmin: "윤영호",
      permissions: "읽기 전용",
    },
    {
      email: "hank.lee@example.com",
      siteAdmin: "차민정",
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
