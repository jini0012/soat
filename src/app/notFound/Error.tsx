import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Button } from "@/components/controls/Button";

interface Props {
  router: AppRouterInstance;
}

export default function Error({ router }: Props) {
  return (
    <>
      <h2 className="text-3xl text-flesh-600 italic font-bold sm:text-5xl">
        404 Error
      </h2>
      <p className="text-xl mt-[71px] mb-[70px] sm:text-3xl">
        요청하신 페이지를 찾을 수 없습니다
      </p>
      <ul className="flex gap-[5px] w-full justify-center max-w-[clamp(205px,50vw,525px)]">
        <li className="w-full min-w-[100px]">
          <Button
            highlight={true}
            href="/"
            className="w-full h-[30px] text-xs py-[7.5px] font-normal text-center sm:text-xl sm:font-bold"
          >
            메인으로
          </Button>
        </li>
        <li className="w-full min-w-[100px]">
          <Button
            onClick={() => router.back()}
            className="w-full h-[30px] text-xs py-[7.5px] font-normal text-center sm:text-xl sm:font-bold"
          >
            이전페이지로
          </Button>
        </li>
      </ul>
    </>
  );
}
