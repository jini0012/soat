import AdminHeader from "../../../../components/admin/AdminHeader";
import AdminMain from "@/components/admin/AdminMain";
import ReviewTable from "@/components/admin/ReviewTable";
import ListTitle from "@/components/admin/ListTitle";
import QueryButton from "@/components/admin/ QueryButton";
import SubTabDescription from "@/components/admin/SubTabDescription";
import AdminSearchInput from "@/components/admin/AdminSearchInput";
export default function ReviewListPage() {
  const GeneralUserData = [
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "정상",
    },
    {
      title: "종이배의 꿈",
      reviewer: "드라마",
      reviewDate: "2024.12.25",
      reportedStatus: "신고됨",
    },
  ];

  return (
    <>
      <AdminHeader>공연관리</AdminHeader>
      <AdminMain>
        <SubTabDescription>한줄평 조회 및 상태 관리</SubTabDescription>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <ListTitle>한줄평 목록</ListTitle>
          <form action="">
            <AdminSearchInput
              id="reviewSearchInput"
              name="reviewSearch"
              label="한줄평 목록 조회하기"
            />
            <QueryButton />
          </form>
        </div>
        <ReviewTable data={GeneralUserData} />
      </AdminMain>
    </>
  );
}
