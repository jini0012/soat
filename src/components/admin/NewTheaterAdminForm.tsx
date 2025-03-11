import { useState } from "react";
import { CloseButton, Button } from "../controls/Button";
import { NewTheaterAdmin } from "@/types/admin";
import Modal from "../Modal";

export default function NewTheaterAdminForm({
  user,
  onClose,
}: {
  user: NewTheaterAdmin;
  onClose: () => void;
}) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); // 변경사항 저장 확인 모달 상태 관리
  const [isApproved, setIsApproved] = useState<"approved" | "rejected" | null>(
    null
  ); // 승인/거절 상태 관리

  const handleApproval = () => {
    setIsApproved("approved");
    setIsApplyModalOpen(true);
  };

  const handleRejection = () => {
    setIsApproved("rejected");
    setIsApplyModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex justify-center items-center">
        <div className="relative bg-white p-6 rounded-lg w-[330px] max-w-lg z-[9999]">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-center flex-1 text-lg">
              <span>{user.managerName}</span>님의 회원정보
            </h2>
            <CloseButton onClick={onClose} className="text-gray-500" />
          </div>

          <section className="mt-4 text-xs">
            <h3 className="sr-only">회원정보</h3>
            <dl className="flex flex-wrap gap-x-1 gap-y-1">
              {[
                { label: "이름", value: user.managerName },
                { label: "이메일", value: user.email },
                { label: "휴대폰번호", value: user.phoneNumber },
                {
                  label: "가입날짜",
                  value: user.createdAt.toLocaleString("ko-KR"),
                },
                {
                  label: "가입유형",
                  value: user.businessNum === "" ? "비사업자" : "사업자",
                },
                { label: "사업자등록번호", value: user.businessNum },
                { label: "팀명", value: user.teamName },
                { label: "은행명", value: user.bankAccount.bankName },
                { label: "계좌번호", value: user.bankAccount.accountNum },
                { label: "예금주", value: user.bankAccount.depositor },
              ].map(({ label, value }, index) => (
                <div className="flex w-full items-center" key={index}>
                  <dt className="mr-2 w-[80px]">{label}</dt>
                  <dd className="flex items-center">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex justify-end gap-1 mt-2">
              {/* 거절 버튼: 승인/거절 전 */}
              {isApproved === null && (
                <Button
                  onClick={handleRejection}
                  size="small"
                  className="text-gray-500 font-medium w-[50px]"
                >
                  거절
                </Button>
              )}

              {/* 승인 버튼: 승인/거절 클릭 전 */}
              {isApproved === null && (
                <Button
                  onClick={handleApproval}
                  highlight
                  size="small"
                  className="w-[50px]"
                >
                  승인
                </Button>
              )}

              {/* 승인/거절 후 상태 표시 */}
              {isApproved === "approved" && (
                <Button
                  size="small"
                  className="w-[50px] text-green-500 cursor-default"
                  disabled
                >
                  승인됨
                </Button>
              )}

              {isApproved === "rejected" && (
                <Button
                  size="small"
                  className="w-[50px] text-red-500 cursor-default"
                  disabled
                >
                  거절됨
                </Button>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* 변경 완료 모달 */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          className=" flex flex-col justify-center items-center z-[9999999] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-xs">
              {isApproved === "approved"
                ? "해당 사용자의 신청이 승인되었습니다."
                : "해당 사용자의 신청이 거절되었습니다."}
            </p>
            <Button
              highlight
              size="small"
              onClick={() => setIsApplyModalOpen(false)}
              className="mt-2 w-[60px]"
            >
              닫기
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
