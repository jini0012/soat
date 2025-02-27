import { ReactNode } from "react";

interface AdminMainProps {
  children: ReactNode;
}

export default function AdminMain({ children }: AdminMainProps) {
  return <main className="px-[6%] w-full">{children}</main>;
}
