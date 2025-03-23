"use client";
import { useState } from "react";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";
import Modal from "../Modal";
import { SiteAdmin } from "@/types/admin";

interface SiteAdminRegisterProps {
  onClose: () => void;
  onApply: (newAdmin: SiteAdmin) => void;
}

export default function SiteAdminRegister({
  onClose,
  onApply,
}: SiteAdminRegisterProps) {
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [permissions, setPermissions] = useState("전체권한");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApply = () => {
    const newAdmin: SiteAdmin = {
      email: adminEmail,
      siteAdmin: adminName,
      permissions: permissions,
    };
    onApply(newAdmin);
    setIsApplyModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="w-[280px] h-[290px] max-h-[560px] p-4 bg-white relative">
          <div className="relative flex justify-center w-full">
            <h2 className="font-semibold text-center">관리자 등록</h2>
            <CloseButton onClick={onClose} className="absolute right-0" />
          </div>

          <section className="mt-4 text-xs">
            <h3 className="sr-only">관리자 등록</h3>
            <form className="flex flex-col gap-1">
              <label htmlFor="siteAdminName" className="font-semibold text-sm">
                관리자명
              </label>
              <input
                type="text"
                id="siteAdminName"
                name="siteAdminName"
                className="border border-gray-400 p-1 rounded-sm"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />
              <label
                htmlFor="siteAdminEmail"
                className="font-semibold text-sm mt-2"
              >
                이메일
              </label>
              <input
                type="text"
                id="siteAdminEmail"
                name="siteAdminEmail"
                className="border border-gray-400 p-1 rounded-sm "
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
            </form>
            {/* 권한 설정 */}
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-sm">권한 설정하기</h4>
              <Radio
                checked={permissions}
                onChange={setPermissions}
                items={[
                  { value: "전체권한", label: "전체권한" },
                  { value: "일부권한", label: "일부권한" },
                  { value: "읽기 전용", label: "읽기 전용" },
                ]}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleApply} highlight size="small">
                등록하기
              </Button>
            </div>
          </section>
        </div>
      </div>
      {/* 등록 완료 모달 */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000] flex flex-col items-center">
            <p className="text-xs">성공적으로 등록되었습니다.</p>
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
