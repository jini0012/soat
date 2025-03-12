"use client";

import { useCallback, useEffect } from "react";

interface RefreshDetectionOptions {
  onRefreshAttempt?: () => boolean;
  message?: string;
  enabled?: boolean;
}

/**
 * 브라우저 새로고침이나 페이지 이탈을 감지하는 훅
 */
export function useRefreshDetection({
  onRefreshAttempt,
  message = "변경사항이 저장되지 않을 수 있습니다. 정말 페이지를 떠나시겠습니까?",
  enabled = true,
}: RefreshDetectionOptions = {}) {
  // beforeunload 이벤트 핸들러
  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      // 비활성화 상태면 아무 동작도 하지 않음
      if (!enabled) return;

      // 콜백이 있으면 실행하고 결과에 따라 페이지 이탈 허용 여부 결정
      const shouldAllowUnload = onRefreshAttempt ? onRefreshAttempt() : false;

      // 페이지 이탈을 허용하지 않을 경우 표준 동작 방지
      if (!shouldAllowUnload) {
        event.preventDefault();

        // 크로스 브라우저 지원을 위한 처리
        // 크롬과 모던 브라우저는 returnValue 설정만으로 충분
        // 일부 레거시 브라우저는 returnValue와 함께 문자열 반환 필요
        event.returnValue = message;
        return message;
      }
    },
    [onRefreshAttempt, message, enabled]
  );

  useEffect(() => {
    // 새로고침이나 페이지 이탈 감지 이벤트 등록
    window.addEventListener("beforeunload", handleBeforeUnload);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  // 훅 설정을 업데이트하는 함수
}
