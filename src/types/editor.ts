import { Editor } from "@tiptap/react";
import { LucideIcon } from "lucide-react";

export interface ToolbarButtonsConfig {
  type: string;
  label: string;
  icon: LucideIcon;
  level?: Level;
}
export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface EditorCommands {
  toggleBold: () => void;
}

export interface EditorToolbarProps {
  editor: Editor | null;
  headingButtons: ToolbarButtonsConfig[];
  formattingButtons: ToolbarButtonsConfig[];
  codeBlockButton: ToolbarButtonsConfig;
  onClickCodeBlockButton: () => void;
}
