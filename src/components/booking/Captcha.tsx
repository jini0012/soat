"use client";

import { useState, useEffect } from "react";
import { TextInput } from "../controls/Inputs";
import { Button } from "../controls/Button";

interface CaptchaData {
  captchaId: string;
  image: string;
  audio: string;
}

export default function Captcha({
  className,
  verifyCallback,
  setProcess,
  nextProcess,
}: {
  className?: string;
  verifyCallback?: (token: string) => void;
  setProcess?: (process: string) => void;
  nextProcess?: string;
}) {
  const [captchaData, setCaptchaData] = useState<CaptchaData | null>(null);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CAPTCHA_API_URL = process.env.NEXT_PUBLIC_CAPTCHA_API_URL || "";

  // CAPTCHA 데이터 가져오기
  const getCaptcha = async () => {
    setCaptchaData({ captchaId: "", image: "", audio: "" });
    setAnswer("");
    try {
      const response = await fetch(CAPTCHA_API_URL + "/captchas", {
        method: "POST",
      });
      const data = await response.json();
      setCaptchaData(data);
    } catch (error) {
      console.error("CAPTCHA 로딩 실패:", error);
    }
  };

  // 답안 제출
  const verifyCaptcha = async () => {
    if (!captchaData?.captchaId) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${CAPTCHA_API_URL}/captchas/${captchaData.captchaId}/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer: answer,
          }),
        }
      );

      if (!response.ok) {
        // 틀렸을 경우 새로운 CAPTCHA 요청
        getCaptcha();
        setAnswer("");
        setMessage("다시 시도해주세요.");
        setIsSubmitting(false);
        throw new Error("CAPTCHA 검증 실패");
      }

      const result = await response.json();
      if (result.token) {
        if (verifyCallback) {
          verifyCallback(result.token);
        }
        if (setProcess && nextProcess) {
          setProcess(nextProcess);
        }
      }
    } catch (error) {
      console.error("검증 실패:", error);
    }
  };

  // 음성 재생
  const playAudio = () => {
    if (captchaData?.audio) {
      const audio = new Audio(`data:audio/mp3;base64,${captchaData.audio}`);
      audio.play();
    }
  };

  // 컴포넌트 마운트 시 CAPTCHA 로드
  useEffect(() => {
    getCaptcha();
  }, []);

  return (
    <article
      className={`${
        className || ""
      } flex flex-col items-center gap-y-3 w-full max-w-96`}
    >
      <h3 className="sr-only">보안 문자 입력</h3>
      <p>먼저, 아래의 보안 문자를 정확히 입력해 주세요.</p>
      {captchaData && (
        <>
          {/* CAPTCHA 이미지 */}
          <img
            src={
              captchaData.image
                ? captchaData.image
                : "/images/icons/loading-spinner.svg"
            }
            alt="CAPTCHA"
            className="border rounded-lg w-[150px] h-[50px]"
            width={150}
            height={50}
          />
          <ul className="flex flex-row justify-center items-center gap-x-4">
            <li className="flex justify-center items-center">
              <button onClick={playAudio}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:text-flesh-400 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
                <span className="sr-only">음성으로 듣기</span>
              </button>
            </li>
            <li className="flex justify-center items-center">
              <button onClick={getCaptcha}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:text-flesh-400 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <span className="sr-only">새로 고침</span>
              </button>
            </li>
          </ul>

          {/* 메시지 표시 */}
          {message && <p>{message}</p>}

          {/* 입력 폼 */}
          <TextInput
            ariaLabel="보안 문자 입력"
            value={answer}
            onChange={setAnswer}
            onEnter={verifyCaptcha}
          />
          <Button
            highlight
            size="full"
            onClick={verifyCaptcha}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <img
                src="/images/icons/loading-spinner.svg"
                alt="확인 중..."
                width={24}
                height={24}
              />
            ) : (
              "확인"
            )}
          </Button>
        </>
      )}
    </article>
  );
}
