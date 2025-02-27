"use client";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";
import { SiteAdmin } from "@/types/admin"; // SiteAdmin 타입 import
import { useState } from "react"; // useState import 추가
import Modal from "../Modal";

interface SiteAdminModifyProps {
  user: SiteAdmin; // user prop 타입 정의
  onClose: () => void; // onClose prop 타입 정의
}

export default function SiteAdminModify({
  user,
  onClose,
}: SiteAdminModifyProps) {
  const [radio, setRadio] = useState("전체권한"); // 기본값을 '전체권한'으로 설정
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); //저장 확인 모달 상태 관리

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="w-[280px] h-[260px] max-h-[560px] p-4 bg-white relative">
          <div className="relative flex justify-center w-full">
            <h2 className="font-semibold text-center">관리자 정보</h2>
            <CloseButton
              onClick={onClose} // onClose 함수 사용
              className="absolute right-0"
            />
          </div>

          <section className="mt-4 text-xs">
            <h3 className="sr-only">관리자 정보</h3>
            <dl className="flex flex-wrap gap-x-1 gap-y-1">
              {[
                { label: "관리자명", value: user.siteAdmin },
                { label: "이메일", value: user.email },
                { label: "등록일", value: "-" },
                { label: "현재 권한", value: user.permissions },
              ].map(({ label, value }, index) => (
                <div className="flex w-full items-center" key={index}>
                  <dt className="mr-2 w-[80px]">{label}</dt> <dd>{value}</dd>
                </div>
              ))}
            </dl>

            {/* 권한 수정 부분: 라디오 버튼 추가 */}
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-sm">권한 변경하기</h4>
              <Radio
                checked={radio}
                onChange={setRadio}
                items={[
                  { value: "전체 권한", label: "전체 권한" },
                  { value: "일부 권한", label: "일부 권한" },
                  { value: "읽기 전용", label: "읽기 전용" },
                ]}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() => setIsApplyModalOpen(true)}
                highlight
                size="small"
              >
                저장하기
              </Button>
            </div>
          </section>
        </div>
      </div>
      {/* 저장 완료 모달 */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000] flex flex-col items-center">
            <p className="text-xs">성공적으로 저장되었습니다.</p>
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
