import { z } from "zod";

export const validations = {
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다"),
  emailVerifyNum: z.string().min(1, "인증번호를 입력해주세요"),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상 이어야 합니다")
    .max(24, "비밀번호는 24자 이하여야 합니다")
    .regex(/[a-zA-Z]/, "영문을 포함해야 합니다")
    .regex(/[0-9]/, "숫자를 포함해야 합니다")
    .regex(/[!@#$%^&*]/, "특수문자를 포함해야 합니다"),
  passwordConfirm: (password: string) =>
    z.string().refine((val) => val === password, {
      message: "비밀번호가 일치하지 않습니다",
    }),
  name: z
    .string()
    .min(1, "이름을 입력해주세요")
    .max(10, "10자 이내로 입력해주세요")
    .regex(/^[a-zA-Z가-힣]*$/, "이름은 국문 또는 영문만 허용됩니다"),
  teamName: z
    .string()
    .min(1, "팀명을 입력해주세요")
    .max(10, "10자 이내로 입력해주세요")
    .regex(/^[a-zA-Z가-힣]*$/, "팀명은 국문 또는 영문만 허용됩니다"),
  managerName: z
    .string()
    .min(1, "관리자 이름을 입력해주세요")
    .max(10, "10자 이내로 입력해주세요")
    .regex(/^[a-zA-Z가-힣]*$/, "관리자 이름은 국문 또는 영문만 허용됩니다"),
  phone: z.string().regex(/^[0-9]{11}$/, "올바른 휴대폰 번호 형식이 아닙니다"),
  businessNum: z
    .string()
    .regex(/^[0-9]{10}$/, "올바른 사업자등록번호 형식이 아닙니다"),
};
