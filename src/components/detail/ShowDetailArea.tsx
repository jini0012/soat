import React from "react";

interface ShowInfoProps {
  performanceDataString: string;
}

export default function ShowDetailArea({
  performanceDataString,
}: ShowInfoProps) {
  const performanceData = JSON.parse(performanceDataString);

  const content = performanceData.content || "";

  return (
    <div className="px-[10px] mb-[50px]" dangerouslySetInnerHTML={{ __html: content }} />
  );
}