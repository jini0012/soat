import { EditorToolbarProps, Level } from "@/types/editor";
import { ChainedCommands } from "@tiptap/react";
import React from "react";

export default function Toolbar({
  editor,
  headingButtons,
  formattingButtons,
  codeBlockButton,
  onClickCodeBlockButton,
}: EditorToolbarProps) {
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

  return (
    <div>
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
    </div>
  );
}
