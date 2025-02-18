import { Button } from "@/components/controls/Button";

interface JoinGreetingProps {
  userType: "buyer" | "seller";
}

export default function JoinGreeting({ userType }: JoinGreetingProps) {
  if (userType === "buyer") {
    return (
      <>
        <h2 className="text-xl">
          회원가입이 완료되었습니다 <br />
          가입을 환영합니다🎉
        </h2>
        <p className="text-sm text-gray-300 mt-7 mb-4">
          이제 공연의 모든 순간을 <br /> 쉽게 예매하고 즐길 수 있습니다.
        </p>
        <p className="text-sm text-flesh-500 mb-7">
          SO@과 함께 <br />
          다양한 공연 정보와 특별한 혜택을 만나보세요 :)
        </p>

        <ul className="flex gap-[5px]">
          <li>
            <Button highlight={true} href="/">
              메인으로
            </Button>
          </li>
          <li>
            <Button href="/login">로그인하기</Button>
          </li>
        </ul>

        <p className="absolute bottom-3 text-flesh-500 text-sm font-bold">
          작은 극장의 큰 이야기, SO@ 에서 만나요
        </p>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-xl">
          회원가입이 완료되었습니다
          <br />
          당신의 멋진 공연을 함께 알리겠습니다😎
        </h2>
        <p className="text-sm text-gray-300 mt-7 mb-4">
          창의적인 작품을 더 많은 관객에게 <br /> 소개할 수 있는 기회가
          시작됩니다.
        </p>
        <p className="text-sm text-flesh-500 mb-7">
          당신의 예술적 비전을 <br />
          SO@에서 마음껏 펼처보세요 :)
        </p>

        <ul className="flex gap-[5px]">
          <li>
            <Button highlight={true} href="/">
              메인으로
            </Button>
          </li>
          <li>
            <Button href="/login">로그인하기</Button>
          </li>
        </ul>

        <p className="absolute bottom-3 text-flesh-500 text-sm font-bold">
          작은 극장의 큰 이야기, SO@ 에서 만나요
        </p>
      </>
    );
  }
}
