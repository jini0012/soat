import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Eye, Trash } from "lucide-react";

interface PerformanceMoreBtnProps {
  iconSrc?: string;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function PerformanceButton({
  iconSrc,
  label,
  onClick,
  className,
}: PerformanceMoreBtnProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 원래의 onClick 함수가 있을 경우 추가적으로 실행
    if (onClick) {
      onClick(event);
    }
  };

  const getIcon = () => {
    if (iconSrc?.includes("pen")) {
      return <Pencil className="h-4 w-4 mr-2" />;
    } else if (iconSrc?.includes("reading-glasses")) {
      return <Eye className="h-4 w-4 mr-2" />;
    } else if (iconSrc?.includes("delete")) {
      return <Trash className="h-4 w-4 mr-2" />;
    }
    return null;
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`flex justify-start items-center w-full rounded-none text-sm font-medium py-2 h-auto
      hover:bg-muted hover:text-foreground
      ${className}`}
    >
      {getIcon()}
      {label}
    </Button>
  );
}

export default function PerformanceMoreBtn({
  onClick,
}: PerformanceMoreBtnProps) {
  return (
    <Card className="w-full border shadow-sm">
      <CardContent className="p-0">
        <PerformanceButton
          iconSrc="/images/icons/pen.svg"
          label="예매 정보 수정"
          onClick={onClick}
        />
        <div className="w-full h-px bg-border" />
        <PerformanceButton
          iconSrc="/images/icons/reading-glasses.svg"
          label="예매 확인"
          onClick={onClick}
        />
        <div className="w-full h-px bg-border" />
        <PerformanceButton
          iconSrc="/images/icons/delete.svg"
          label="삭제"
          onClick={onClick}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        />
      </CardContent>
    </Card>
  );
}
