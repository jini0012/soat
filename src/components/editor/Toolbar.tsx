import { addFile } from "@/redux/slices/enrollSlice";
import { EditorToolbarProps, Level } from "@/types/editor";
import { ChainedCommands } from "@tiptap/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Toolbar({
  editor,
  headingButtons,
  formattingButtons,
  codeBlockButton,
  imageInput,
}: EditorToolbarProps) {
  const dispatch = useDispatch();
  const fileKey = useRef(1);
  const handleEditorHeadingOnClick = (level: Level) => {
    if (!editor) {
      return;
    }
    editor.chain().focus().toggleHeading({ level }).run();
  };

  const handleEditorFormatButtonOnClick = (type: string) => {
    if (!editor) {
      return;
    }
    const command = `toggle${type}` as keyof ChainedCommands;
    const chain = editor.chain().focus();

    if (type)
      if (typeof chain[command] === "function") {
        (chain[command] as () => ChainedCommands)().run();
      }
    editor.chain().focus().toggleHeading({ level: 1 });
  };

  const imageToBase64 = (file: File): Promise<string> => {
    return new Promise((res) => {
      const blob = new Blob([file]);
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64String = reader.result;
        res(base64String as string);
      };
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const prevUrls = await Promise.all(
        Array.from(files).map(async (file, index) => {
          const currentKey = fileKey.current + index;
          const base64 = await imageToBase64(file); // base64 처리
          dispatch(
            addFile({
              fileKey: currentKey,
              fileName: file.name,
              fileSize: file.size,
              fileType: file.type,
              base64Data: base64, // base64 데이터 Redux에 저장
            })
          );
          return { src: base64, key: currentKey };
        })
      );

      if (prevUrls && editor) {
        prevUrls.forEach((item) => {
          editor
            .chain()
            .focus()
            .setImage({ src: item.src, key: item.key })
            .run();
        });
      }
      fileKey.current += files.length;
    }
  };

  /*  const onClickCodeBlockButton = () => {
    if (!editor) {
      return;
    }
    const { from, to } = editor.state.selection; // 현재 커서 위치 가져오기
    if (from === to) {
      const resolvedPos = editor.state.doc.resolve(from);

      const parent = resolvedPos.parent;
      if (parent) {
        let textContent = "";

        parent.forEach((node) => {
          if (node.isText) {
            textContent += node.text;
          }
        });

        if (textContent) {
          // 부모 노드의 시작과 끝 위치 찾기
          const parentStart = resolvedPos.start();
          const parentEnd = resolvedPos.end();

          // 해당 영역을 일반 텍스트로 교체
          editor
            .chain()
            .focus()
            .deleteRange({ from: parentStart, to: parentEnd })
            .insertContentAt(parentStart, textContent)
            .run();
        }
      }
      return;
    }

    // 범위 선택
    let joinText = "";

    editor.state.doc.nodesBetween(from, to, (node, pos) => {
      if (node.type.isText) {
        joinText += node.text;
      }
    });

    if (joinText !== "") {
      editor
        .chain()
        .focus()
        .deleteRange({ from, to })
        .insertContentAt(from, joinText)
        .run();
    }
  }; */
  return (
    <div className="flex flex-wrap">
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

      {formattingButtons.map(({ type, label, icon: Icon }, index) => {
        const isActive = editor?.isActive(
          type[0].toLowerCase() + type.slice(1)
        );
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleEditorFormatButtonOnClick(type)}
            aria-label={label}
            className={`p-2 m-1 border rounded ${
              isActive ? "bg-gray-500 text-white" : "bg-transparent"
            }`}
          >
            <Icon />
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => console.log("클릭")}
        aria-label={codeBlockButton.label}
        className="p-2 m-1 border rounded"
      >
        {<codeBlockButton.icon />}
      </button>
      <label className="p-2 m-1 border rounded">
        {<imageInput.icon />}
        <input
          key={fileKey.current}
          type="file"
          className="sr-only"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
