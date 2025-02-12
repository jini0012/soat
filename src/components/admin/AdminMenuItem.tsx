"use client";
import { useState } from "react";
import Link from "next/link";

interface AdminMenuLink {
  text: string;
  url: string;
}

interface AdminMenuItemProps {
  title: string;
  links: AdminMenuLink[];
}

export default function AdminMenuItem({ title, links }: AdminMenuItemProps) {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false); // sub menu 아이템 토글 상태를 관리

  function handleToggleSubMenu() {
    setIsOpenSubMenu((prev) => !prev);
  }

  return (
    <li>
      <h2
        className="bg-chevron-down-dark bg-no-repeat bg-[center_right] bg-[length:16px] font-medium"
        onClick={handleToggleSubMenu} // 클릭 시 토글
      >
        {title}
      </h2>
      {isOpenSubMenu && (
        <ul className="flex flex-col gap-1 mt-1">
          {links.map((link) => (
            <li key={link.url} className="pl-2 text-[12px]">
              <Link href={link.url} className="no-underline text-inherit">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
