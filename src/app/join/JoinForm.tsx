import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/controls/Button";
import { JoinInput, Checkbox } from "@/components/controls/Inputs";
import { JoinSelect } from "@/components/controls/Select";
import Link from "next/link";
import { validations } from "@/utils/validations";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
const businessNumApiKey = process.env.NEXT_PUBLIC_JOIN_BUSINESS_NUM_API_KEY;

interface JoinFormProps {
  setUserType: (userType: "buyer" | "seller") => void;
  userType: "buyer" | "seller";
  setIsJoin: (isJoin: boolean) => void;
}

export default function JoinForm({
  setUserType,
  userType,
  setIsJoin,
}: JoinFormProps) {
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [checkAge, setCheckAge] = useState(false);
  const [checkAgree, setCheckAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
  const [emailSendMsg, setEmailSendMsg] = useState("");
  const [emailVerifyMsg, setEmailVerifyMsg] = useState("");
  const [verifyNum, setVerifyNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [businessNum, setBusinessNum] = useState("");
  const [selectAccount, setSelectAccount] = useState("000");
  const [accountNum, setAccountNum] = useState("");
  const [isBusinessNumValid, setIsBusinessNumValid] = useState<boolean>(false);
  const [businessNumVerifyMsg, setBusinessNumVerifyMsg] = useState("");
  const isEmailInputValid = validations.email.safeParse(email).success;
  const isBusinessNumInputValid =
    validations.businessNum.safeParse(businessNum).success;
  const isAccountNumInputValid =
    validations.accountNum.safeParse(accountNum).success;

  // 로그인 상태일 경우 로그아웃
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      signOut();
    }
  }, [status]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSendEmail && !isEmailValid) {
      timer = setTimeout(() => {
        setIsSendEmail(false);
      }, 60000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSendEmail, isEmailValid]);

  const formData =
    userType === "seller"
      ? {
          userType,
          email,
          password,
          teamName,
          managerName,
          phoneNumber: userPhone,
          businessNum,
        }
      : {
          userType,
          email,
          password,
          username: userName,
          phoneNumber: userPhone,
        };

  async function handleSendEmailVerification() {
    setEmailSendMsg("");
    try {
      const response = await axios.post("/api/auth/email-verification", {
        email,
        userType,
      });

      if (response.status === 200) {
        setIsSendEmail(true);
      }
    } catch (error) {
      console.error("이메일 인증 오류:", error);
      if (axios.isAxiosError(error)) {
        setEmailSendMsg(error.response?.data.error);
      }
    }
  }

  async function handleVerifyEmail() {
    setEmailVerifyMsg("");
    try {
      const response = await axios.put("/api/auth/email-verification/verify", {
        email,
        code: Number(verifyNum),
      });

      if (response.status === 200) {
        setIsEmailValid(true);
      }
    } catch (error) {
      console.error("이메일 인증 오류:", error);
      setEmailVerifyMsg("인증번호가 일치하지 않습니다.");
    }
  }

  async function handleBusinessNumVerification() {
    try {
      const response = await axios.post(
        "https://api.odcloud.kr/api/nts-businessman/v1/status",
        {
          b_no: [businessNum],
        },
        {
          params: {
            serviceKey: businessNumApiKey,
          },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const businessData = response.data.data[0];
        console.log("사업자등록정보 확인 결과:", response.data.data[0]);
        if (businessData.b_stt_cd !== "01") {
          throw new Error(`사업자의 상태가 ${businessData.b_stt} 입니다.`);
        } else {
          setIsBusinessNumValid(true);
          setBusinessNumVerifyMsg("사업자 번호 인증이 완료되었습니다.");
        }
      }
    } catch (error) {
      console.error("사업자등록번호 확인 오류:", error);
      setIsBusinessNumValid(false);
      setBusinessNumVerifyMsg("사업자등록번호가 유효하지 않습니다.");

      if (axios.isAxiosError(error)) {
        console.error("API 오류 메시지:", error.response?.data);
        setBusinessNumVerifyMsg("사업자 번호 인증에 오류가 발생되었습니다.");
      }
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("/api/auth/signup", formData);

      if (response.status === 201) {
        setIsJoin(true);
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-3 sm:text-3xl sm:mb-6">회원가입</h2>
      <ul className="flex justify-center w-full sm:max-w-[525px] text-xs sm:text-base sm:font-bold">
        <li className="flex-1">
          <button
            className={`w-full py-3 sm:py-5 sm:px-6 rounded-t-lg border-x border-t
            ${
              userType === "buyer"
                ? "bg-white border-gray-300 relative z-20"
                : "bg-gray-100 border-gray-200"
            }`}
            onClick={() => setUserType("buyer")}
            type="button"
          >
            예매회원
          </button>
        </li>
        <li className="flex-1">
          <button
            className={`w-full py-3 sm:py-5 sm:px-6 rounded-t-lg border-x border-t
            ${
              userType === "seller"
                ? "bg-white border-gray-300 relative z-20"
                : "bg-gray-100 border-gray-200"
            }`}
            onClick={() => setUserType("seller")}
            type="button"
          >
            공연 관리자
          </button>
        </li>
      </ul>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white sm:max-w-[525px] flex flex-col border rounded-xl border-gray-300 px-5 py-4 gap-[10px] sm:gap-[20px] -mt-[10px] relative sm:space-y-2"
      >
        <div className="bg-white w-1 h-4 absolute top-0 left-[49.5%] z-[100]"></div>
        <JoinInput
          label="이메일"
          type="email"
          value={email}
          onChange={setEmail}
          validation={validations.email}
          disabled={isSendEmail}
          message={
            isSendEmail
              ? "인증 번호가 이메일로 발송되었습니다. 이메일을 확인해 주세요"
              : emailSendMsg
          }
        >
          <Button
            highlight={true}
            type="button"
            onClick={(e) => {
              handleSendEmailVerification();
              (e.target as HTMLButtonElement).textContent = "재전송";
            }}
            size="small"
            className="mb-1 py-[2.5px] sm:max-w-32 sm:py-none sm:text-base sm:font-bold"
            disabled={!isEmailInputValid || isSendEmail || isEmailValid}
          >
            인증번호 받기
          </Button>
        </JoinInput>
        <JoinInput
          label="인증번호"
          value={verifyNum}
          onChange={setVerifyNum}
          disabled={isEmailValid}
          validation={validations.emailVerifyNum}
          message={
            isEmailValid ? "이메일 인증이 완료되었습니다." : emailVerifyMsg
          }
        >
          <Button
            highlight={true}
            type="button"
            onClick={handleVerifyEmail}
            size="small"
            className="mb-1 py-[2.5px] sm:max-w-16 sm:py-none sm:text-base sm:font-bold"
            disabled={isEmailValid || !verifyNum}
          >
            확인
          </Button>
        </JoinInput>
        <JoinInput
          label="비밀번호"
          value={password}
          onChange={setPassword}
          placeholder="8~24자의 영문, 숫자, 특수문자"
          validation={validations.password}
          type="password"
          max={24}
        />
        <JoinInput
          label="비밀번호 확인"
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          validation={validations.passwordConfirm(password)}
          type="password"
          max={24}
        />
        {userType === "buyer" ? (
          <JoinInput
            label="이름"
            value={userName}
            onChange={setUserName}
            placeholder="10자 이내의 국문 또는 영문"
            validation={validations.name}
            max={10}
          />
        ) : (
          <>
            <JoinInput
              label="팀명"
              value={teamName}
              onChange={setTeamName}
              placeholder="10자 이내의 국문 또는 영문"
              validation={validations.teamName}
              max={10}
            />
            <JoinInput
              label="관리자명"
              value={managerName}
              onChange={setManagerName}
              placeholder="10자 이내의 국문 또는 영문"
              validation={validations.managerName}
              max={10}
            />
          </>
        )}
        <JoinInput
          label="휴대폰"
          value={userPhone}
          onChange={setUserPhone}
          placeholder="11자 숫자 (‘-’ 문자 제외)"
          validation={validations.phone}
          max={11}
        />
        {userType === "seller" && (
          <>
            <JoinSelect
              label="은행정보"
              value={selectAccount}
              onChange={setSelectAccount}
              className="mb-5"
              options={[
                { value: "000", label: "은행" },
                { value: "001", label: "한국은행" },
                { value: "002", label: "산업은행" },
                { value: "003", label: "기업은행" },
                { value: "006", label: "국민은행" },
                { value: "007", label: "수협중앙회" },
                { value: "008", label: "수출입은행" },
                { value: "011", label: "농협은행" },
                { value: "012", label: "지역농축협" },
                { value: "020", label: "우리은행" },
                { value: "023", label: "SC제일은행" },
                { value: "027", label: "한국씨티은행" },
                { value: "031", label: "대구은행" },
                { value: "032", label: "부산은행" },
                { value: "034", label: "광주은행" },
                { value: "035", label: "제주은행" },
                { value: "037", label: "전북은행" },
                { value: "039", label: "경남은행" },
                { value: "045", label: "새마을금고" },
                { value: "048", label: "신협" },
                { value: "050", label: "상호저축은행" },
                { value: "052", label: "모간스탠리은행" },
                { value: "054", label: "HSBC은행" },
                { value: "055", label: "도이치은행" },
                { value: "056", label: "알비에스피엘씨은행" },
                { value: "057", label: "JP모간체이스은행" },
                { value: "058", label: "미즈호은행" },
                { value: "059", label: "미쓰비시도쿄UFJ은행" },
                { value: "060", label: "BOA은행" },
                { value: "061", label: "비엔피파리바은행" },
                { value: "062", label: "중국공상은행" },
                { value: "063", label: "중국은행" },
                { value: "064", label: "산림조합" },
                { value: "065", label: "대화은행" },
                { value: "071", label: "우체국" },
                { value: "076", label: "신용보증기금" },
                { value: "077", label: "기술보증기금" },
                { value: "081", label: "하나은행" },
                { value: "088", label: "신한은행" },
                { value: "089", label: "케이뱅크" },
                { value: "090", label: "카카오뱅크" },
                { value: "092", label: "토스뱅크" },
                { value: "093", label: "한국주택금융공사" },
                { value: "094", label: "서울보증보험" },
                { value: "095", label: "경찰청" },
                { value: "096", label: "한국전자금융(주)" },
                { value: "099", label: "금융결제원" },
                { value: "102", label: "대신저축은행" },
                { value: "103", label: "에스비아이저축은행" },
                { value: "104", label: "에이치케이저축은행" },
                { value: "105", label: "웰컴저축은행" },
                { value: "106", label: "신한저축은행" },
                { value: "209", label: "유안타증권" },
                { value: "218", label: "현대증권" },
                { value: "221", label: "골든브릿지투자증권" },
                { value: "222", label: "한양증권" },
                { value: "223", label: "리딩투자증권" },
                { value: "224", label: "BNK투자증권" },
                { value: "225", label: "IBK투자증권" },
                { value: "226", label: "KB투자증권" },
                { value: "227", label: "KTB투자증권" },
                { value: "230", label: "미래에셋증권" },
                { value: "238", label: "대우증권" },
                { value: "240", label: "삼성증권" },
                { value: "243", label: "한국투자증권" },
                { value: "261", label: "교보증권" },
                { value: "262", label: "하이투자증권" },
                { value: "263", label: "HMC투자증권" },
                { value: "264", label: "키움증권" },
                { value: "265", label: "이베스트투자증권" },
                { value: "266", label: "SK증권" },
                { value: "267", label: "대신증권" },
                { value: "269", label: "한화투자증권" },
                { value: "270", label: "하나대투증권" },
                { value: "278", label: "신한금융투자" },
                { value: "279", label: "DB금융투자" },
                { value: "280", label: "유진투자증권" },
                { value: "287", label: "메리츠종합금융증권" },
                { value: "289", label: "NH투자증권" },
                { value: "290", label: "부국증권" },
                { value: "291", label: "신영증권" },
                { value: "292", label: "엘아이지투자증권" },
                { value: "293", label: "한국증권금융" },
                { value: "294", label: "펀드온라인코리아" },
                { value: "295", label: "우리종합금융" },
                { value: "296", label: "삼성선물" },
                { value: "297", label: "외환선물" },
                { value: "298", label: "현대선물" },
              ]}
            />
            <JoinInput
              label="계좌번호"
              value={accountNum}
              onChange={setAccountNum}
              validation={validations.accountNum}
              placeholder="숫자 (‘-’ 문자 제외)"
              max={14}
            />
            <ul className="flex justify-center mb-2 gap-2">
              <li className="flex-1">
                <Button
                  type="button"
                  size="small"
                  onClick={() => setIsBusiness(false)}
                  highlight={!isBusiness}
                  className="w-full h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
                >
                  사업자가 아닙니다
                </Button>
              </li>
              <li className="flex-1">
                <Button
                  type="button"
                  size="small"
                  onClick={() => setIsBusiness(true)}
                  highlight={isBusiness}
                  className="w-full h-7 text-xs py-[6.5px] font-normal sm:h-full sm:text-base sm:py-2 sm:font-bold"
                >
                  사업자 입니다
                </Button>
              </li>
            </ul>
            {isBusiness && (
              <>
                <JoinInput
                  label="사업자등록번호"
                  value={businessNum}
                  onChange={setBusinessNum}
                  placeholder="10자 숫자 (‘-’ 문자 제외)"
                  validation={validations.businessNum}
                  message={businessNumVerifyMsg}
                  max={10}
                />
                <Button
                  highlight={true}
                  size="small"
                  className="mb-2 py-[2.5px] sm:text-base sm:font-bold"
                  disabled={!isBusinessNumInputValid || isBusinessNumValid}
                  onClick={() => {
                    handleBusinessNumVerification();
                  }}
                  type="button"
                >
                  사업자등록번호 인증
                </Button>
              </>
            )}
          </>
        )}
        {userType === "buyer" && (
          <Checkbox checked={checkAge} onChange={setCheckAge}>
            <span className="text-xs sm:text-base">
              저는 만 14세 이상 회원 입니다.
            </span>
          </Checkbox>
        )}
        <Checkbox checked={checkAgree} onChange={setCheckAgree}>
          <span className="text-[10px] sm:text-base">
            SO@의 <Link href="/">이용 정책</Link> 및
            <Link href="/">개인정보 처리방침</Link>에 동의합니다.
          </span>
        </Checkbox>
        <Button
          type="submit"
          size="full"
          disabled={
            userType === "buyer"
              ? !isSendEmail ||
                !isEmailValid ||
                !password ||
                !passwordConfirm ||
                !userName ||
                !userPhone ||
                !checkAge ||
                !checkAgree
              : !isSendEmail ||
                !isEmailValid ||
                !password ||
                !passwordConfirm ||
                !teamName ||
                !managerName ||
                !userPhone ||
                selectAccount === "000" ||
                !isAccountNumInputValid ||
                (isBusiness && !isBusinessNumValid) ||
                !checkAgree
          }
          className="absolute bottom-[-54px] right-0 max-w-24 max-h-[30px] text-sm py-[19.5px] px-[7.5px] sm:text-base sm:max-w-40 sm:max-h-12 sm:bottom-[-60px]"
          highlight={true}
        >
          가입 완료
        </Button>
      </form>
    </>
  );
}
