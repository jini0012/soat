"use client";
import React from "react";
import {
  useEditor,
  EditorContent,
  Editor as TsEditor,
  JSONContent,
} from "@tiptap/react";
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
  Image as ImageIcon,
} from "lucide-react";
import Toolbar from "./Toolbar";
import { useDispatch } from "react-redux";
import { deleteFile, setContent } from "@/redux/slices/enrollSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CustomImage from "./CustomImage";
import { useDebounce } from "@/hooks/useDebounce";

export default function Editor() {
  const content = useSelector((state: RootState) => state.enroll.content);
  const files = useSelector((state: RootState) => state.enroll.files);
  const dispatch = useDispatch();

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomImage.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content: content || "",
    editorProps: {
      attributes: { class: "focus:outline-none" },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onDeleteImage(editor);
      const json = editor.getJSON();
      debounceUpdate(json);
    },
  });

  const debounceUpdate = useDebounce((json: JSONContent) => {
    dispatch(setContent(json));
  }, 300);

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
    label: "HTML 입력",
    icon: Code2,
  };

  const inputImage: ToolbarButtonsConfig = {
    type: "Image",
    label: "이미지 추가",
    icon: ImageIcon,
  };

  const getImageSrcList = (editor: TsEditor): string[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(editor.getHTML(), "text/html");
    return Array.from(doc.querySelectorAll("img")).map(
      (img) => img.dataset.key
    ) as string[];
  };

  const onDeleteImage = (editor: TsEditor) => {
    const currentImages = getImageSrcList(editor);
    const deletedImages = files.filter(
      (file) => !currentImages.includes(String(file.fileKey))
    );

    if (deletedImages.length === 0) {
      return;
    }
    deletedImages.forEach((image) =>
      dispatch(deleteFile(image.fileKey as number))
    );
  };

  const handleOnClickEidtor = () => {
    if (!editor) {
      return;
    }
    editor?.chain().focus("end");
  };

  return (
    <div className="border w-full">
      <Toolbar
        editor={editor}
        headingButtons={headingButtons}
        formattingButtons={formattingButtons}
        codeBlockButton={codeBlock}
        imageInput={inputImage}
      />
      <EditorContent
        onClick={handleOnClickEidtor}
        className=" w-full prose border min-h-[600px]"
        editor={editor}
      />
    </div>
  );
}
