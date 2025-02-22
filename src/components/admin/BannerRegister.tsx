"use client";
import { useState } from "react";
import { Radio } from "../controls/Inputs";
import { Button, CloseButton } from "../controls/Button";
import Modal from "../Modal";

interface BannerRegisterProps {
  onClose: () => void; // onClose prop 추가
}

export default function BannerRegister({ onClose }: BannerRegisterProps) {
  const [radio, setRadio] = useState("비활성화");
  const [isModalOpen, setIsModalOpen] = useState(false); //등록 여부 모달 상태 관리
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); //변경사항 저장 확인 모달 상태 관리

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg flex-1 text-center">
            배너 등록하기
          </h2>
          <CloseButton onClick={onClose} />
        </div>

        <form
          action=""
          className="border border-gray-400 p-4 rounded-md space-y-2"
        >
          <div>
            <label htmlFor="bannerTitle" className="block text-xs font-medium">
              배너 제목 :
            </label>
            <input
              type="text"
              id="bannerTitle"
              name="bannerTitle"
              required
              className="w-full h-[25px] border border-gray-500 text-xs rounded-sm p-2 mt-1 focus-visible:outline-none"
            />
          </div>

          <div>
            <label htmlFor="bannerImage" className="text-xs font-medium">
              배너 이미지 :
            </label>
            <div className="mt-1">
              <label
                htmlFor="bannerImage"
                className="inline-block px-3 py-1 text-xs font-medium  border border-flesh-400 rounded-md cursor-pointer hover:bg-flesh-500"
              >
                파일 선택
              </label>
              <input
                type="file"
                id="bannerImage"
                name="bannerImage"
                required
                className="hidden"
                onChange={(e) => {
                  // 파일 선택시 파일명을 보여줄 수 있도록 할 수 있음
                  const fileName = e.target.files ? e.target.files[0].name : "";
                  alert(`선택한 파일: ${fileName}`);
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="alternativeText"
              className="block text-xs font-medium"
            >
              대체 텍스트 :
            </label>
            <input
              type="text"
              id="alternativeText"
              name="alternativeText"
              className="w-full h-[25px] border border-gray-500 text-xs rounded-sm p-2 mt-1 focus-visible:outline-none"
            />
          </div>

          <div>
            <label htmlFor="bannerLink" className="block text-xs font-medium">
              배너 링크 :
            </label>
            <input
              type="text"
              id="bannerLink"
              name="bannerLink"
              className="w-full h-[25px] border border-gray-500 text-xs rounded-sm p-2 mt-1 focus-visible:outline-none"
            />
          </div>

          <div>
            <label htmlFor="bannerStatus" className="block text-xs font-medium">
              상태 :
            </label>
            <Radio
              checked={radio}
              onChange={setRadio}
              items={[
                { value: "활성화", label: "활성화" },
                { value: "비활성화", label: "비활성화" },
              ]}
              className="mt-2 text-sm"
            />
          </div>
        </form>

        <div className="flex justify-end mt-4">
          <Button onClick={() => setIsModalOpen(true)} highlight size="small">
            등록하기
          </Button>
        </div>
      </div>
      {/* 등록 여부 모달 */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000]">
            <p className="text-xs">새로운 배너를 등록하시겠습니까?</p>
            <div className="flex justify-center gap-2">
              <Button
                size="small"
                onClick={() => setIsModalOpen(false)}
                className="mt-2 w-[60px]"
              >
                아니오
              </Button>
              <Button
                highlight
                size="small"
                onClick={() => {
                  setIsApplyModalOpen(true);
                  setIsModalOpen(false);
                }}
                className="mt-2 w-[60px]"
              >
                예
              </Button>
            </div>
          </div>
        </Modal>
      )}
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
