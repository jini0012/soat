import { ModalProps } from "@/types/modal";
import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <section
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 모달 닫힘 방지
      >
        {children}
      </section>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
