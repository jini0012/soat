interface UserDataProps {
  type: "회원 유형" | "이름" | "이메일" | "휴대폰";
  data: string;
}

export default function Li({ type, data }: UserDataProps) {
  return (
    <li className="flex gap-4 mb-1">
      <p className="flex-[1] text-end font-bold text-flesh-500">{type}</p>
      <span className="flex-[2]">{data}</span>
    </li>
  );
}
