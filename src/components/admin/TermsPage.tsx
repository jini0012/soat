"use client";

import React, { useState, useEffect } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

// 마크다운 파서 설정
const mdParser = new MarkdownIt();

export default function TermsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [terms, setTerms] = useState("");

  // mock date
  const mockTermsData = `
  # 쏘앳 이용약관
  
  제1조 (목적)
  이 약관은 쏘앳 (이하 "회사"라 함)이 제공하는 온라인 예매 및 공연 관련 서비스(이하 "서비스"라 함)를 
  이용함에 있어 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
  
  제2조 (용어의 정의)
  1. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
  2. "회원"이란 회사와 이용계약을 체결하고 아이디(ID)를 부여받은 자를 의미합니다.
  3. "비회원"이란 회원 가입 없이 회사가 제공하는 서비스를 이용하는 자를 의미합니다.
  
  제3조 (약관의 효력 및 변경)
  1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
  2. 회사는 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시에는 적용일자와 변경 사유를
      명시하여 공지합니다.
  
  제4조 (서비스의 제공 및 변경)
  1. 회사는 이용자에게 다음과 같은 서비스를 제공합니다:
     - 공연 예매 및 정보 제공 서비스
     - 이벤트 및 할인 정보 제공 서비스
     - 기타 회사가 정하는 서비스
  
  2. 회사는 서비스의 내용 및 제공 방식을 사전 예고 없이 변경하거나 중단할 수 있으며, 이로 인한 손해에 대해 
     책임을 지지 않습니다.
  `;

  // 컴포넌트가 처음 렌더링될 때 목업 데이터를 setTerms로 설정
  useEffect(function () {
    setTerms(mockTermsData);
  }, []);

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  function handleSave() {
    // 저장된 약관을 처리 (예: API로 전송)
    console.log("저장된 약관:", terms);
    setIsEditing(false);
  }

  // handleEditorChange 함수의 매개변수에 타입 지정
  function handleEditorChange({ text }: { text: string }) {
    setTerms(text);
  }

  return (
    <>
      <div className="w-full bg-gray-100">
        {isEditing ? (
          <div className="max-h-[400px] overflow-y-auto">
            <MarkdownEditor
              value={terms}
              renderHTML={(text) => mdParser.render(text)} // 마크다운을 HTML로 렌더링
              onChange={handleEditorChange}
            />
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto p-2 mb-4">
            <div dangerouslySetInnerHTML={{ __html: mdParser.render(terms) }} />
            {/* 마크다운을 HTML로 변환하여 렌더링 */}
          </div>
        )}
      </div>
      <div className="w-full flex justify-end gap-2 ">
        <button
          onClick={handleEditToggle}
          className="w-[70px] py-1 rounded-md text-[14px] bold-medium border border-flesh-500 flex items-center justify-center"
        >
          {isEditing ? "취소" : "수정하기"}
        </button>
        {isEditing && (
          <button
            onClick={handleSave}
            className="w-[70px] py-1 rounded-md text-white text-[14px] bold-medium flex items-center justify-center bg-flesh-500"
          >
            저장
          </button>
        )}
      </div>
    </>
  );
}
