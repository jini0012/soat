"use client";
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent, Editor as TsEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditMode, ToolbarButtonsConfig } from "@/types/editor";
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
  ImageUp,
} from "lucide-react";
import Toolbar from "./Toolbar";
import { useDispatch } from "react-redux";
import { addFile, deleteFile, setContent } from "@/redux/slices/enrollSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CustomImage from "./CustomImage";
import { useDebounce } from "@/hooks/useDebounce";
import Modal from "../Modal";
import { useShowModal } from "@/hooks/useShowModal";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";
import HtmlEditor from "./HtmlEditor";
import { getImageURLIndexedDB } from "@/utils/images";
import { deleteImage } from "@/services/indexedDBService";

export default function Editor() {
  const [editMode, setEditMode] = useState<EditMode>("WYSIWYG");
  const [imageURL, setImageURL] = useState<string>("");
  const isPersisted = useSelector((state: RootState) => state.enroll._persist);
  const content = useSelector((state: RootState) => state.enroll.content);
  const files = useSelector((state: RootState) => state.enroll.files);
  const { showModal, handleShowModal } = useShowModal();
  const isRehydrated = isPersisted?.rehydrated;
  const dispatch = useDispatch();

  const editor = useEditor(
    {
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
        const htmlString = editor.getHTML();
        debounceUpdate(htmlString);
      },
    },
    [isRehydrated, editMode]
  );

  useEffect(() => {
    const replaceImageURL = async (): Promise<string> => {
      const imgTags = Array.from(
        content.matchAll(/<img[^>]*data-key="([^"]*)"[^>]*>/g)
      );
      let html = content;
      for (const imgTag of imgTags) {
        const imageKey = Number(imgTag[1]);
        try {
          const newImageURL = await getImageURLIndexedDB(imageKey);
          if (newImageURL) {
            html = html.replace(
              new RegExp(`<img[^>]*data-key="${imageKey}"[^>]*>`, "g"),
              `<img data-key="${imageKey}" src="${newImageURL}" />`
            );
          }
        } catch (error) {
          console.error("이미지 불러오기를 실패했습니다", error);
        }
      }
      return html;
    };

    if (isRehydrated) {
      replaceImageURL().then((newContent) => {
        dispatch(setContent(newContent));
        editor?.commands.setContent(newContent);
      });
    }
  }, [isRehydrated, editor]);

  const debounceUpdate = useDebounce((HtmlString: string) => {
    dispatch(setContent(HtmlString));
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

  const HTMLEditModeButton: ToolbarButtonsConfig = {
    type: "ToggleHTMLMode",
    label: "HTML 모드 변경",
    icon: Code2,
  };

  const inputImage: ToolbarButtonsConfig = {
    type: "ImageUpload",
    label: "이미지 파일 업로드",
    icon: ImageUp,
  };

  const urlImage: ToolbarButtonsConfig = {
    type: "ImageURL",
    label: "이미지 URL로 추가",
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
      (key) => !currentImages.includes(String(key))
    );

    if (deletedImages.length === 0) {
      return;
    }
    deletedImages.forEach((key) => {
      deleteImage(Number(key)); //indexDB제거
      dispatch(deleteFile(key)); //redux 제거
    });
  };

  const handleOnClickEidtor = () => {
    if (!editor) {
      return;
    }
    editor.chain().focus("end");
  };

  const hanldeUploadURLImage = () => {
    if (!editor || imageURL === "") {
      handleShowModal(false);
      return;
    }

    dispatch(addFile(imageURL));
    editor.chain().focus().setImage({ src: imageURL }).run();
    handleShowModal(false);
  };

  const handleEditorMode = () => {
    setEditMode((prev) => {
      if (prev === "WYSIWYG") {
        return "HTML";
      } else {
        return "WYSIWYG";
      }
    });
  };

  return (
    <div className="border w-full">
      <Toolbar
        editor={editor}
        headingButtons={headingButtons}
        formattingButtons={formattingButtons}
        HTMLEditModeButton={HTMLEditModeButton}
        imageUpload={inputImage}
        imageURL={urlImage}
        handleImageURLUploadModal={handleShowModal}
        handleEditMode={handleEditorMode}
      />
      <>
        <EditorContent
          onClick={handleOnClickEidtor}
          className={`w-full prose min-h-[600px] border-2 px-4 py-2 bg-background ${
            editMode === "HTML" && "hidden"
          }`}
          editor={editor}
        />
        {editMode === "HTML" && <HtmlEditor />}
      </>

      <Modal isOpen={showModal} onClose={() => handleShowModal(false)}>
        <article>
          <h2>이미지 URL을 입력하세요.</h2>
          <TextInput type="text" value={imageURL} onChange={setImageURL} />
          <div className="flex mt-4 gap-4 justify-end">
            <Button type="button" onClick={() => handleShowModal(false)}>
              취소
            </Button>
            <Button type="button" highlight onClick={hanldeUploadURLImage}>
              추가
            </Button>
          </div>
        </article>
      </Modal>
    </div>
  );
}
