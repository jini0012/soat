import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PerformanceData } from "@/app/api/performance/route";
import PerformanceMoreBtn from "./PerformanceMoreBtn";

interface SliceProps {
  data: PerformanceData;
  isOpen: boolean;
  handleClick: () => void;
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PerformanceSlide({
  data,
  isOpen,
  handleClick,
  handleButtonClick,
}: SliceProps) {
  return (
    <article key={data.id} className="flex-shrink-0 min-w-0 mb-5">
      <Card
        className={`w-40 transition-all duration-200  ${
          isOpen ? "shadow-lg" : "hover:shadow-md"
        }`}
        onClick={(event) => {
          event.stopPropagation();
          handleClick();
        }}
      >
        <CardContent className="p-0">
          <img
            src={data.poster.url}
            alt={data.poster.fileName}
            className="h-60 rounded-t-md object-cover"
          />
          <div className="p-3">
            <Badge variant="outline" className="mb-2">
              {data.category}
            </Badge>
            <h3 className="font-medium text-sm truncate">{data.title}</h3>
            <span className="text-gray-500 text-sm">
              {new Date(data.createdAt).toLocaleDateString("ko-KR")}
            </span>
            {isOpen && (
              <div className="mt-3">
                <PerformanceMoreBtn onClick={handleButtonClick} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
