"use client";
import { EnrollInitialState } from "@/redux/slices/enrollSlice";
import { enrollPersistConfig, persistor } from "@/redux/store";
import React, { useEffect, useState } from "react";

import { getStoredState } from "redux-persist";
import Modal from "../Modal";
import { Button } from "../controls/Button";
import { useShowModal } from "@/hooks/useShowModal";

interface EnrollRehydrationProps {
  children: React.ReactNode;
}
export default function EnrollRehydration({
  children,
}: EnrollRehydrationProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showModal, handleShowModal } = useShowModal();

  const handleRehydration = () => {
    persistor.persist();
    handleShowModal(false);
  };

  const handleDoNotReHydration = () => {
    persistor.purge();
    persistor.persist(); // 상태 초기화 후 저장소에 반영
    handleShowModal(false);
  };

  useEffect(() => {
    const checkPersistedState = async () => {
      const storedState = await getStoredState(enrollPersistConfig);
      setIsLoading(false);

      if (!storedState) {
        //값 존재 안 하면
        persistor.persist();
        return;
      }

      // `isDirty, step` 값을 제외한 비교를 위해 필터링
      const { isDirty, step, _persist, ...filteredStoredState } = storedState;
      const {
        isDirty: ignoredIsDirty,
        step: ignoredStep,
        ...filteredInitialState
      } = EnrollInitialState;

      if (
        JSON.stringify(filteredStoredState) ===
        JSON.stringify(filteredInitialState)
      ) {
        persistor.persist();
        return; //동일하면
      }

      handleShowModal(true);
    };
    checkPersistedState();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Modal onClose={() => handleShowModal(false)} isOpen={showModal}>
        <>
          <p>작성중이던 글이 있습니다. 불러오시겠습니까?</p>
          <Button onClick={handleDoNotReHydration}>아니오</Button>
          <Button onClick={handleRehydration}>예</Button>
        </>
      </Modal>
      {children}
    </>
  );
}
