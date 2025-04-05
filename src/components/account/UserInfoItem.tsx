interface UserDataProps {
  label: "회원 유형" | "이름" | "이메일" | "휴대폰";
  data: string;
}

export function Li({ label, data }: UserDataProps) {
  return (
    <li className="flex gap-4 mb-1">
      <p className="flex-[1] ml-8 sm:ml-0 sm:min-w-16 font-bold text-flesh-500 sm:text-lg">
        {label}
      </p>
      <span className="flex-[3] sm:flex-[2] sm:text-lg min-w-32">{data}</span>
    </li>
  );
}
