"use client";
import { useEffect } from "react";

export function useNavigateWarning(isDirty: boolean) {
  useEffect(() => {
    if (!isDirty) {
      return;
    }
    const handleBeforeUnloaded = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const handlePopState = (e: PopStateEvent) => {
      history.pushState(null, "", location.href);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnloaded);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnloaded);
    };
  }, [isDirty]);
}
