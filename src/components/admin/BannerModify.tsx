"use client";
import { useState } from "react";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";
import Modal from "../Modal";

interface BannerModifyProps {
  onClose: () => void;
  bannerData: any; // 수정할 배너 데이터를 받는 prop 추가
}

export default function BannerModify({
  onClose,
  bannerData,
}: BannerModifyProps) {
  const [radio, setRadio] = useState(bannerData.bannerStatus);
  const [isModalOpen, setIsModalOpen] = useState(false); // 수정 여부 모달 상태 관리
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); // 변경사항 저장 확인 모달 상태 관리
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // 배너 삭제 확인 모달 상태 관리
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false); // 삭제 성공 모달 상태 관리
  const [formData, setFormData] = useState({
    bannerTitle: bannerData.bannerTitle || "",
    bannerImage: null as File | null,
    alternativeText: "",
    bannerLink: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // 저장 버튼 클릭 시 유효성 검사
  const handleSave = () => {
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

    setIsModalOpen(true); // 저장 확인 모달 열기
  };

  // 배너 삭제 기능 추가
  const handleDelete = () => {
    setIsDeleteModalOpen(true); // 배너 삭제 확인 모달 열기
  };

  const confirmDelete = () => {
    // 배너 삭제 로직을 추가
    setIsDeleteSuccessModalOpen(true); // 삭제 성공 모달 열기
    setIsDeleteModalOpen(false); // 배너 삭제 확인 모달 닫기
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg flex-1 text-center">
            배너 편집
          </h2>
          <CloseButton onClick={onClose} />
        </div>

        <form className="border border-gray-400 p-4 rounded-md space-y-2">
          <div>
            <label htmlFor="bannerTitle" className="block text-xs font-medium">
              배너 제목 :
            </label>
            <input
              type="text"
              id="bannerTitle"
              name="bannerTitle"
              value={formData.bannerTitle}
              onChange={handleChange}
              required
              className="w-full h-[25px] border border-gray-500 text-xs rounded-sm p-2 mt-1 focus-visible:outline-none"
            />
          </div>

          <div>
            <label htmlFor="bannerImage" className="text-xs font-medium">
              배너 이미지 :
            </label>
            <div className="mt-1">
              <label className="inline-block px-3 py-1 text-xs font-medium border border-flesh-400 rounded-md cursor-pointer hover:bg-flesh-500">
                파일 선택
                <input
                  type="file"
                  id="bannerImage"
                  name="bannerImage"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
              {formData.bannerImage && (
                <p className="text-xs mt-1">{formData.bannerImage.name}</p>
              )}
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
              value={formData.alternativeText}
              onChange={handleChange}
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
              value={formData.bannerLink}
              onChange={handleChange}
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
          <Button
            onClick={handleDelete}
            size="small"
            className="mr-2 font-medium"
          >
            삭제하기
          </Button>
          <Button onClick={handleSave} highlight size="small">
            저장하기
          </Button>
        </div>
      </div>

      {/* 수정 여부 모달 */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000]">
            <p className="text-xs">변경사항을 저장하시겠습니까?</p>
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

      {/* 배너 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000]">
            <p className="text-xs">배너를 삭제하시겠습니까?</p>
            <div className="flex justify-center gap-2">
              <Button
                size="small"
                onClick={() => setIsDeleteModalOpen(false)}
                className="mt-2 w-[60px]"
              >
                아니오
              </Button>
              <Button
                highlight
                size="small"
                onClick={confirmDelete}
                className="mt-2 w-[60px]"
              >
                예
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* 배너 삭제 성공 모달 */}
      {isDeleteSuccessModalOpen && (
        <Modal
          isOpen={isDeleteSuccessModalOpen}
          onClose={() => setIsDeleteSuccessModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000] flex flex-col items-center">
            <p className="text-xs">배너가 삭제되었습니다.</p>
            <Button
              highlight
              size="small"
              onClick={() => {
                setIsDeleteSuccessModalOpen(false);
                onClose(); // 삭제 후 모달 닫고 부모 컴포넌트의 onClose 호출
              }}
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
