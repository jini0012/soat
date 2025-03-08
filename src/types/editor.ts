import { Editor } from "@tiptap/react";
import { LucideIcon } from "lucide-react";

export interface ToolbarButtonsConfig {
  type: string;
  label: string;
  icon: LucideIcon;
  level?: Level;
}
export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type EditMode = "WYSIWYG" | "HTML";

export interface EditorCommands {
  toggleBold: () => void;
}

export interface EditorToolbarProps {
  editor: Editor | null;
  headingButtons: ToolbarButtonsConfig[];
  formattingButtons: ToolbarButtonsConfig[];
  imageUpload: ToolbarButtonsConfig;
  imageURL: ToolbarButtonsConfig;
  handleImageURLUploadModal: (state: boolean) => void;
  HTMLEditModeButton: ToolbarButtonsConfig;
  handleEditMode: () => void;
}
