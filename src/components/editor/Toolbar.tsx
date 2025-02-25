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
  onClickCodeBlockButton,
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
        onClick={onClickCodeBlockButton}
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
