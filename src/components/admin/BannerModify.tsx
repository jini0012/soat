"use client";
import { useState } from "react";
import { CloseButton, Button } from "../controls/Button";
import { Radio } from "../controls/Inputs";

interface BannerModifyProps {
  onClose: () => void;
  bannerData: any; // 수정할 배너 데이터를 받는 prop 추가
}

export default function BannerModify({
  onClose,
  bannerData,
}: BannerModifyProps) {
  const [radio, setRadio] = useState(bannerData.bannerStatus);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg flex-1 text-center">
          배너 수정하기
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
            defaultValue={bannerData.bannerTitle} // 기존 배너 제목 표시
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
        <Button highlight size="small">
          저장하기
        </Button>
      </div>
    </div>
  );
}
