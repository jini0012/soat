import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "@/components/controls/Button";

interface Props {
  router: AppRouterInstance;
}

export default function Error({ router }: Props) {
  return (
    <>
      <h2 className="text-3xl text-flesh-600 italic font-bold">404 Error</h2>
      <p className="text-xl mt-[71px] mb-[70px]">
        요청하신 페이지를 찾을 수 없습니다
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
