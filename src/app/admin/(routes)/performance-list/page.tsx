import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import PerformanceTable from "@/components/admin/PerformanceTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
export default function PerformanceListPage() {
  const GeneralUserData = [
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
    {
      title: "밤의 노래",
      category: "드라마",
      team: "블루극장",
      reportedStatus: "신고됨",
    },
  ];

  return (
    <>
      <AdminHeader>공연관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>공연 조회 및 상태 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <ListTitle>공연 목록</ListTitle>
          <form action="">
            <AdminSearchInput
              id="performanceSearchInput"
              name="performanceSearch"
              label="공연 목록 조회하기"
            />
            <QueryButton />
          </form>
        </div>
        <PerformanceTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
