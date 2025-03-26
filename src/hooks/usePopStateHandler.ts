"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface PopStateHandlerProps {
  onNavigationAttempt?: (url: string) => void;
  enabled?: boolean;
}
export function usePopStateHandler({
  onNavigationAttempt,
  enabled = false,
}: PopStateHandlerProps) {
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 페이지 로드 시 실행되는 함수
    const setupInitialState = () => {
      // 현재 상태를 history.state에 저장
      const currentState = { ...history.state, handled: true };
      history.replaceState(currentState, "");
    };

    setupInitialState();

    // popstate 이벤트 처리
    const handlePopState = (event: PopStateEvent): void => {
      // 이미 처리된 이벤트인지 확인
      if (event.state && event.state.handled) {
        return;
      }

      // 기본 이벤트 동작 방지
      event.preventDefault();

      // 이동하려는 URL 저장
      const targetUrl = window.location.href;

      if (enabled) {
        setPendingUrl(targetUrl);
        // 외부 콜백 호출 (모달 표시 등)
        if (onNavigationAttempt) {
          onNavigationAttempt(targetUrl);
        }
        window.history.pushState({ handled: true }, "", window.location.href);
        // 현재 URL로 다시 상태 변경
      } else {
        setPendingUrl(null); //변경 사항 없으면 즉시 이동
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onNavigationAttempt]);

  // 확인 시 네비게이션 진행
  const confirmNavigation = useCallback(() => {
    if (pendingUrl) {
      router.push(pendingUrl);
      setPendingUrl(null);
      return true;
    }
    return false;
  }, [pendingUrl, router]);

  // 취소 시 네비게이션 취소
  const cancelNavigation = useCallback(() => {
    setPendingUrl(null);
    return true;
  }, []);

  return {
    pendingUrl,
    confirmNavigation,
    cancelNavigation,
  };
}
