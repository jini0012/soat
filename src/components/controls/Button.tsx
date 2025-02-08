export default function Button({
  highlight,
  children,
  className,
  disabled,
  type,
  size,
}: {
  highlight?: boolean;
  children: any;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "default" | "small" | "full";
}) {
  let colorClass = highlight
    ? "bg-flesh-400 border-background text-background"
    : "bg-background border-flesh-400 text-foreground";

  if (disabled) {
    colorClass = "bg-gray-200 text-background cursor-not-allowed";
  }

  let sizeClass = "px-4 py-2";

  if (size === "small") {
    sizeClass = "px-2 py-1 text-xs";
  } else if (size === "full") {
    sizeClass += " w-full";
  }

  return (
    <button
      className={`${className} ${colorClass} border-2 rounded-lg ${sizeClass} font-bold `}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
