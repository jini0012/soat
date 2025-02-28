import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import TheaterAdminApprovalTable from "@/components/admin/TheaterAdminApprovalTable";
import ListTitle from "@/components/admin/ListTitle";
import SubTabDescription from "@/components/admin/SubTabDescription";
export default function TheaterAdminApprovalPage() {
  const newTheaterAdminData = [
    {
      email: "dnjs1111@soat.com",
      name: "김예원",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "asf134@soat.com",
      name: "최예린",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "hyunjin88@soat.com",
      name: "현진우",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "yujin99@soat.com",
      name: "유진서",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "seoyeon45@soat.com",
      name: "서연희",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "donghae78@soat.com",
      name: "동해준",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "jisoo_h@soat.com",
      name: "지수현",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "minseok92@soat.com",
      name: "민석훈",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "haneulsky@soat.com",
      name: "하늘채",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
    {
      email: "kangmin23@soat.com",
      name: "강민우",
      team: "블루극장",
      requestDate: "2025.01.01",
    },
  ];

  return (
    <>
      <AdminHeader>회원관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>신규 소극장 관리자 승인</SubTabDescription>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <ListTitle>대기 중인 소극장 관리자 신청 목록</ListTitle>
        </div>
        <TheaterAdminApprovalTable data={newTheaterAdminData} />
      </AdminMain>
    </>
  );
}
