"use client";
import { useState } from "react";
import { Radio } from "../controls/Inputs";
import { Button, CloseButton } from "../controls/Button";
import Modal from "../Modal";

interface BannerRegisterProps {
  onClose: () => void;
}

export default function BannerRegister({ onClose }: BannerRegisterProps) {
  const [radio, setRadio] = useState("비활성화");
  const [isModalOpen, setIsModalOpen] = useState(false); //등록 여부 모달 상태 관리
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); // 확인 모달 상태 관리

  // 입력 상태 관리
  const [formData, setFormData] = useState({
    bannerTitle: "",
    bannerImage: null as File | null,
    alternativeText: "",
    bannerLink: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // 파일 입력 처리
    }));
  };

  // 등록 버튼 클릭 시 입력 값 유효성 검사
  const handleSubmit = () => {
    if (!formData.bannerTitle.trim()) {
      alert("배너 제목을 입력해주세요.");
      return;
    }
    if (!formData.bannerImage) {
      alert("배너 이미지를 선택해주세요.");
      return;
    }
    if (!formData.alternativeText.trim()) {
      alert("대체 텍스트를 입력해주세요.");
      return;
    }
    if (!formData.bannerLink.trim()) {
      alert("배너 링크를 입력해주세요.");
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg flex-1 text-center">
            배너 등록
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
              onChange={handleChange}
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
                onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
          <Button onClick={handleSubmit} highlight size="small">
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
