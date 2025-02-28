interface UserDataProps {
  label: "회원 유형" | "이름" | "이메일" | "휴대폰";
  data: string;
}

export function Li({ label, data }: UserDataProps) {
  return (
    <li className="flex gap-4 mb-1">
      <p className="flex-[1] text-end font-bold text-flesh-500 sm:text-lg">
        {label}
      </p>
      <span className="flex-[2] sm:flex-[1.5] sm:text-lg">{data}</span>
    </li>
  );
}