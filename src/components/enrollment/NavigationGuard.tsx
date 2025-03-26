// NavigationGuard.tsx
import React, { useState, useCallback } from "react";
import { usePopStateHandler } from "@/hooks/usePopStateHandler";
import { useRefreshDetection } from "@/hooks/useRefreshDetection";
import { useShowModal } from "@/hooks/useShowModal";
import Modal from "../Modal";
import { Button } from "../controls/Button";

// 네비게이션 타입 열거형
enum NavigationType {
  REFRESH = "refresh",
  NAVIGATION = "navigation",
  NONE = "none",
}

interface NavigationState {
  type: NavigationType;
  url: string | null;
}

interface NavigationGuardProps {
  isDirty?: boolean;
}
const NavigationGuard = ({ isDirty = false }: NavigationGuardProps) => {
  // 모달 훅 사용
  const { handleShowModal, showModal } = useShowModal();

  // 현재 네비게이션 상태 (새로고침 or 앞/뒤로가기)
  const [navState, setNavState] = useState<NavigationState>({
    type: NavigationType.NONE,
    url: null,
  });

  // 모달 열기 처리
  const handleOpenModal = useCallback(
    (type: NavigationType, url: string | null = null) => {
      setNavState({ type, url });
      handleShowModal(true);
    },
    [handleShowModal]
  );

  // popstate 이벤트 처리 훅
  const { confirmNavigation, cancelNavigation } = usePopStateHandler({
    onNavigationAttempt: (url) =>
      handleOpenModal(NavigationType.NAVIGATION, url),
  });

  // 새로고침 감지 훅
  useRefreshDetection({
    onRefreshAttempt: () => {
      // 동기적으로 처리해야 하므로 모달을 직접 사용할 수 없음
      // 대신 native confirm 사용
      return window.confirm(
        "변경사항이 저장되지 않을 수 있습니다. 정말 페이지를 새로고침하시겠습니까?"
      );
    },
    enabled: isDirty,
  });

  // 모달 확인 버튼 처리
  const handleConfirm = useCallback(() => {
    if (navState.type === NavigationType.NAVIGATION) {
      confirmNavigation();
    }
    // 새로고침의 경우 이미 native confirm에서 처리됨

    handleShowModal(false);
    setNavState({ type: NavigationType.NONE, url: null });
  }, [navState, confirmNavigation, handleShowModal]);

  // 모달 취소 버튼 처리
  const handleCancel = useCallback(() => {
    if (navState.type === NavigationType.NAVIGATION) {
      cancelNavigation();
    }
    // 새로고침의 경우 이미 native confirm에서 처리됨

    handleShowModal(false);
    setNavState({ type: NavigationType.NONE, url: null });
  }, [navState, cancelNavigation, handleShowModal]);

  // 모달 타이틀과 내용 결정
  const getModalContent = () => {
    switch (navState.type) {
      case NavigationType.NAVIGATION:
        return {
          title: "페이지 이동",
          message:
            "다른 페이지로 이동하시겠습니까? 저장되지 않은 변경사항이 있을 수 있습니다.",
        };
      case NavigationType.REFRESH:
        return {
          title: "페이지 새로고침",
          message:
            "페이지를 새로고침하시겠습니까? 저장되지 않은 변경사항이 있을 수 있습니다.",
        };
      default:
        return {
          title: "알림",
          message: "계속 진행하시겠습니까?",
        };
    }
  };

  const { title, message } = getModalContent();

  return (
    <Modal isOpen={showModal} onClose={handleCancel}>
      <>
        <h2>{title}</h2>
        <p>{message}</p>
        <Button type="button" onClick={handleCancel}>
          아니오
        </Button>
        <Button highlight type="button" onClick={handleConfirm}>
          예
        </Button>
      </>
    </Modal>
  );
};

export default NavigationGuard;

// App.tsx 또는 레이아웃 컴포넌트에서 사용 예
/*
import NavigationGuard from './components/NavigationGuard';

function Layout({ children }) {
  return (
    <>
      {children}
      <NavigationGuard />
    </>
  );
}
*/
