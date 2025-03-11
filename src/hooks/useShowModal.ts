"use client";
import { useState } from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = (state: boolean): void => {
    setShowModal(state);
  };

  return { showModal, handleShowModal };
};
