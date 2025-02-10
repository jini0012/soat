import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "@/components/controls/Button";

interface Props {
  router: AppRouterInstance;
}

export default function UnderConstruction({ router }: Props) {
  return (
    <>
      <h2 className="text-3xl text-flesh-600 font-bold">🚧공사중🚧</h2>
      <p className="text-xl mt-[42px] mb-[51px] text-center">
        👷열심히 만들고 있어요! <br /> 곧 멋진 기능으로 찾아뵙겠습니다 <br />
        기대해주세요😊
      </p>
      <ul className="flex gap-[5px]">
        <li>
          <Button
            highlight={true}
            href="/"
            className="w-[100px] h-[30px] text-xs py-[7.5px] font-normal flex items-center justify-center"
          >
            메인으로
          </Button>
        </li>
        <li>
          <Button
            onClick={() => router.back()}
            className="w-[100px] h-[30px] text-xs py-[7.5px] font-normal flex items-center justify-center"
          >
            이전페이지로
          </Button>
        </li>
      </ul>
    </>
  );
}
