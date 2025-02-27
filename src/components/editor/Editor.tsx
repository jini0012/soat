"use client";
import React, { useState } from "react";
import { useEditor, EditorContent, HTMLContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToolbarButtonsConfig } from "@/types/editor";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Code2,
} from "lucide-react";
import Toolbar from "./Toolbar";
import { useDispatch } from "react-redux";
import { setContent } from "@/redux/slices/enrollSlice";
import Modal from "../Modal";
import TextArea from "../controls/TextArea";
import { Button, CloseButton } from "../controls/Button";

export default function Editor() {
  const [isOpenHTMLCodeModal, setIsOpenHTMLCodeModal] =
    useState<boolean>(false);
  const [htmlCode, setHtmlCode] = useState<string>("");
  const dispatch = useDispatch();
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: { class: "focus:outline-none" },
    },
    onUpdate: ({ editor }) => {
      dispatch(setContent(editor.getJSON()));
    },
  });

  const headingButtons: ToolbarButtonsConfig[] = [
    { type: "heading", label: "헤딩 1", icon: Heading1, level: 1 },
    { type: "heading", label: "헤딩 2", icon: Heading2, level: 2 },
    { type: "heading", label: "헤딩 3", icon: Heading3, level: 3 },
    { type: "heading", label: "헤딩 4", icon: Heading4, level: 4 },
  ];

  const formattingButtons: ToolbarButtonsConfig[] = [
    { type: "Bold", label: "굵게", icon: Bold },
    { type: "Italic", label: "기울임", icon: Italic },
    { type: "Strike", label: "취소선", icon: Strikethrough },
    { type: "BulletList", label: "글머리 기호", icon: List },
    { type: "OrderedList", label: "번호 매기기", icon: ListOrdered },
    { type: "Blockquote", label: "인용", icon: Quote },
  ];

  const codeBlock: ToolbarButtonsConfig = {
    type: "HTMLCode",
    label: "HTML 삽입",
    icon: Code2,
  };

  const handleOpenHTMLCodeModal = () => {
    setIsOpenHTMLCodeModal(true);
  };

  const handleCloseHTMLCodeModal = () => {
    setIsOpenHTMLCodeModal(false);
  };

  const handleInsertHTML = () => {
    if (htmlCode && editor) {
      editor.commands.insertContent(htmlCode); // HTML 코드를 에디터에 삽입
      dispatch(setContent(editor.getJSON())); // 상태 업데이트
    }
    setHtmlCode(""); // 입력창 초기화
    handleCloseHTMLCodeModal(); // 모달 닫기
  };
  return (
    <div className="border w-full">
      <Toolbar
        editor={editor}
        headingButtons={headingButtons}
        formattingButtons={formattingButtons}
        codeBlockButton={codeBlock}
        onClickCodeBlockButton={handleOpenHTMLCodeModal}
      />
      <EditorContent
        className=" w-full prose border min-h-[600px]"
        editor={editor}
      />
      <Modal isOpen={isOpenHTMLCodeModal} onClose={handleCloseHTMLCodeModal}>
        <>
          <CloseButton />
          <TextArea value={htmlCode} onChange={setHtmlCode} />
          <Button onClick={handleInsertHTML} />
        </>
      </Modal>
    </div>
  );
}
