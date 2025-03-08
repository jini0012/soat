import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
interface ControlRowButtonProps {
  rowNums: number;
  onPlus: () => void;
  onMinus: () => void;
}
export default function ControlRowButton({
  rowNums,
  onMinus,
  onPlus,
}: ControlRowButtonProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onMinus}
        disabled={rowNums <= 1}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <Label>전체 행 수: {rowNums}</Label>
      <Button
        variant="outline"
        size="sm"
        onClick={onPlus}
        disabled={rowNums >= 26}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
