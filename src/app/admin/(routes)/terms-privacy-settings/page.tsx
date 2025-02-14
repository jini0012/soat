import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
import TermsPage from "@/components/admin/TermsPage";

export default function TermsAndPrivacySettingsPage() {
  return (
    <>
      <AdminHeader>컨텐츠 관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>이용약관 / 개인정보처리방침 관리</SubTabDescription>
        <p className="mt-5 mb-6 text-xs">이용약관 | 개인정보처리방침</p>
        <ListTitle>이용약관</ListTitle>
        <TermsPage />
      </AdminMain>
    </>
  );
}
