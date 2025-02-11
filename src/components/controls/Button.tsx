import Link from "next/link";

export function Button({
  highlight,
  children,
  className,
  disabled,
  type,
  size,
  onClick,
  href,
}: {
  highlight?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "default" | "small" | "full";
  onClick?: () => void;
  href?: string;
}) {
  let colorClass = highlight
    ? "bg-flesh-400 border-flesh-400 text-background"
    : "bg-background border-flesh-200 text-foreground";
  let hoverClass = highlight
    ? "hover:bg-flesh-500 hover:border-flesh-500 transition"
    : "hover:bg-flesh-200 transition";
  let activeClass = highlight
    ? "active:bg-flesh-600 active:border-flesh-600 transition"
    : "active:bg-flesh-300 active:border-flesh-300 transition";
  let focusClass = highlight
    ? "focus-visible:bg-flesh-500 focus-visible:border-flesh-500 transition focus:outline-none"
    : "focus-visible:bg-flesh-200 focus-visible:border-flesh-200 transition focus:outline-none";

  if (disabled) {
    colorClass = "bg-gray-300 border-gray-300 text-gray-50 cursor-not-allowed";
    hoverClass = "";
    activeClass = "";
    focusClass = "";
  }

  let sizeClass = "px-4 py-2";

  if (size === "small") {
    sizeClass = "px-2 py-1 text-xs";
  } else if (size === "full") {
    sizeClass += " w-full";
  } else {
    sizeClass += " w-fit";
  }

  if (!className) {
    className = "";
  }

  if (href) {
    return (
      <Link
        className={`break-keep h-fit block ${className} ${colorClass} border-2 rounded-lg ${sizeClass} font-bold ${hoverClass} ${activeClass} ${focusClass}`}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`flex justify-center items-center break-keep h-fit ${className} ${colorClass} border-2 rounded-lg ${sizeClass} font-bold ${hoverClass} ${activeClass} ${focusClass}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function CloseButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-cover w-4 h-4 bg-close-btn transition hover:bg-close-btn-hover focus:bg-close-btn-hover active:bg-close-btn-active ${className}`}
      aria-label="닫기"
    ></button>
  );
}
