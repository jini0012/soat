"use client";

import React, { useState, useEffect } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";
import Modal from "../Modal";
import { Button } from "../controls/Button";

// 마크다운 파서 설정
const mdParser = new MarkdownIt();

export default function PrivacyPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [privacy, setPrivacy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); //저장여부 모달 상태 관리
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false); //저장 확인 모달 상태 관리

  // mock date
  const mockPrivacyData = `
  # 쏘앳 개인정보처리방침
  
  제1조 (목적)
  이 개인정보처리방침은 쏘앳 (이하 "회사"라 함)이 이용자의 개인정보를 어떻게 수집하고, 사용하며, 보호하는지에 대한 방침을 규정합니다.
  
  제2조 (개인정보의 수집 항목)
  회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
  1. 이름, 이메일 주소, 전화번호
  2. 서비스 이용 기록 및 접속 로그
  3. 결제 및 배송 정보
  
  제3조 (개인정보의 이용 목적)
  회사는 수집한 개인정보를 다음과 같은 목적으로 사용합니다:
  1. 서비스 제공 및 고객 지원
  2. 서비스 개선 및 연구
  3. 마케팅 및 광고 목적
  
  제4조 (개인정보의 보유 및 이용 기간)
  회사는 이용자가 제공한 개인정보를 서비스 제공을 위해 필요한 기간 동안 보유합니다.
  서비스 이용 중 개인정보는 이용자가 직접 삭제하거나 회사에 요청할 수 있습니다.
  
  제5조 (개인정보의 제3자 제공)
  회사는 이용자의 개인정보를 제3자에게 제공하지 않으며, 법률에 의한 요구가 있을 경우에만 제공합니다.
  
  제6조 (개인정보의 안전성 확보 조치)
  회사는 개인정보를 안전하게 보호하기 위해 다양한 보안 기술 및 절차를 적용하고 있습니다.
  이는 개인정보 유출을 방지하고, 사용자의 권리와 자유를 보호하기 위함입니다.
  `;

  // 컴포넌트가 처음 렌더링될 때 목업 데이터를 setPrivacy로 설정
  useEffect(function () {
    setPrivacy(mockPrivacyData);
  }, []);

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  function handleSave() {
    // 저장된 개인정보처리방침을 처리 (예: API로 전송)
    console.log("저장된 개인정보처리방침:", privacy);
    setIsEditing(false);
  }

  // handleEditorChange 함수의 매개변수에 타입 지정
  function handleEditorChange({ text }: { text: string }) {
    setPrivacy(text);
  }

  return (
    <>
      <div className="w-full bg-gray-100">
        {isEditing ? (
          <div className="max-h-[400px] overflow-y-auto">
            <MarkdownEditor
              value={privacy}
              renderHTML={(text) => mdParser.render(text)} // 마크다운을 HTML로 렌더링
              onChange={handleEditorChange}
            />
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto p-2 mb-4">
            <div
              dangerouslySetInnerHTML={{ __html: mdParser.render(privacy) }}
            />
            {/* 마크다운을 HTML로 변환하여 렌더링 */}
          </div>
        )}
      </div>
      <div className="w-full flex justify-end gap-2 ">
        <button
          onClick={handleEditToggle}
          className="w-[70px] py-1 rounded-md text-sm bold-medium border border-flesh-500 flex items-center justify-center"
        >
          {isEditing ? "취소" : "수정하기"}
        </button>
        {isEditing && (
          <button
            onClick={() => {
              handleSave();
              setIsModalOpen(true);
            }}
            className="w-[70px] py-1 rounded-md text-white text-sm font-medium flex items-center justify-center bg-flesh-500"
          >
            저장
          </button>
        )}
      </div>
      {/* 저장 여부 모달 */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="flex flex-col justify-center items-center"
        >
          <div className="z-[1000]">
            <p className="text-xs">해당 내용을 저장하시겠습니까?</p>
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
    </>
  );
}
