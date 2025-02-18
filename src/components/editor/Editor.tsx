"use client";
import React from "react";
import { useEditor, EditorContent, ChainedCommands } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Level, ToolbarButtonsConfig } from "@/types/editor";

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
} from "lucide-react";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Hello World</p>`,
    editorProps: {
      attributes: { class: "focus:outline-none" },
    },
  });

  const headingButtons: ToolbarButtonsConfig[] = [
    { type: "heading", label: "헤딩 1", icon: Heading1, level: 1 },
    { type: "heading", label: "헤딩 2", icon: Heading2, level: 2 },
    { type: "heading", label: "헤딩 3", icon: Heading3, level: 3 },
    { type: "heading", label: "헤딩 4", icon: Heading4, level: 4 },
  ];

  const buttons: ToolbarButtonsConfig[] = [
    { type: "Bold", label: "굵게", icon: Bold },
    { type: "Italic", label: "기울임", icon: Italic },
    { type: "Strike", label: "취소선", icon: Strikethrough },
    { type: "BulletList", label: "글머리 기호", icon: List },
    { type: "OrderedList", label: "번호 매기기", icon: ListOrdered },
    { type: "Blockquote", label: "인용", icon: Quote },
  ];

  const handleEditorHeadingOnClick = (level: Level) => {
    if (!editor) return;
    console.log(level);
    editor.chain().focus().toggleHeading({ level }).run();
  };

  const handleEditorToolBarOnClick = (type: string) => {
    //버튼으로 클릭하는 툴바
    if (!editor) return;

    const command = `toggle${type}` as keyof ChainedCommands;
    const chain = editor.chain().focus();

    if (type)
      if (typeof chain[command] === "function") {
        (chain[command] as () => ChainedCommands)().run();
      }
    editor.chain().focus().toggleHeading({ level: 1 });
  };

  return (
    <div className="border w-full">
      <section>
        <h3>툴바 버튼 그룹</h3>
        {headingButtons.map(({ type, label, icon: Icon, level }, index) => {
          const isActive = editor?.isActive(type, { level });
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleEditorHeadingOnClick(level as Level)}
              aria-label={label}
              className={`p-2 m-1 border rounded ${
                isActive ? "bg-gray-500 text-white" : "bg-transparent"
              }`}
            >
              <Icon />
            </button>
          );
        })}

        {buttons.map(({ type, label, icon: Icon }, index) => {
          const isActive = editor?.isActive(
            type[0].toLowerCase() + type.slice(1)
          );
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleEditorToolBarOnClick(type)}
              aria-label={label}
              className={`p-2 m-1 border rounded ${
                isActive ? "bg-gray-500 text-white" : "bg-transparent"
              }`}
            >
              <Icon />
            </button>
          );
        })}
      </section>
      <EditorContent
        className=" w-full prose border min-h-[600px]"
        editor={editor}
      />
    </div>
  );
}
