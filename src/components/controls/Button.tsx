export default function Button({
  highlight,
  children,
  className,
  disabled,
  type,
  size,
  onClick,
}: {
  highlight?: boolean;
  children: any;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "default" | "small" | "full";
  onClick?: () => void;
}) {
  let colorClass = highlight
    ? "bg-flesh-400 border-flesh-400 text-background"
    : "bg-background border-flesh-200 text-foreground";

  if (disabled) {
    colorClass = "bg-gray-200 border-gray-200 text-gray-50 cursor-not-allowed";
  }

  let sizeClass = "px-4 py-2";

  if (size === "small") {
    sizeClass = "px-2 py-1 text-xs";
  } else if (size === "full") {
    sizeClass += " w-full";
  }

  if (!className) {
    className = "";
  }

  return (
    <button
      className={`break-keep h-fit ${className} ${colorClass} border-2 rounded-lg ${sizeClass} font-bold `}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
