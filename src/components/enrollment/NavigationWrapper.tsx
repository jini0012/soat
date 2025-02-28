"use client";
import { useNavigateWarning } from "@/hooks/useNavigateWarning";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface NavigationWrapperProps {
  children: React.ReactNode;
}
export default function NavigationWrapper({
  children,
}: NavigationWrapperProps) {
  const isDirty = useSelector((state: RootState) => state.enroll.isDirty);
  useNavigateWarning(isDirty);
  return <>{children}</>;
}
