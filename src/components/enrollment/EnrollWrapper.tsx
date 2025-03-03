"use client";
import { useNavigateWarning } from "@/hooks/useNavigateWarning";
import { EnrollInitialState } from "@/redux/slices/enrollSlice";
import { enrollPersistConfig, persistor, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStoredState } from "redux-persist";
import Modal from "../Modal";
import { Button } from "../controls/Button";

interface EnrollWrapperProps {
  children: React.ReactNode;
}
export default function EnrollWrapper({ children }: EnrollWrapperProps) {
  const isDirty = useSelector((state: RootState) => state.enroll.isDirty);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRehydration = () => {
    persistor.persist();
    handleCloseModal();
  };

  const handleDoNotReHydration = () => {
    persistor.purge();
    persistor.persist(); // 상태 초기화 후 저장소에 반영
    handleCloseModal();
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

      setShowModal(true);
    };
    checkPersistedState();
  }, []);

  useNavigateWarning(isDirty);

  if (isLoading) {
    console.log("로딩중 왜 안뜨냐");
    return <div>Loading...</div>;
  }
  return (
    <>
      <Modal onClose={handleCloseModal} isOpen={showModal}>
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
