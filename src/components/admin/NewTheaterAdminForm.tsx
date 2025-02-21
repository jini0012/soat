import { CloseButton, Button } from "../controls/Button";
import { NewTheaterAdmin } from "@/types/admin";

export default function NewTheaterAdminForm({
  user,
  onClose,
}: {
  user: NewTheaterAdmin;
  onClose: () => void;
}) {
  return (
    <div className="w-full h-full">
      <div className="relative flex justify-center w-full">
        <h2 className="font-semibold text-center">
          <span>{user.name}</span>님의 회원정보
        </h2>
        <CloseButton onClick={onClose} className="absolute right-0" />
      </div>

      <section className="mt-4 text-xs">
        <h3 className="sr-only">회원정보</h3>
        <dl className="flex flex-wrap gap-x-1 gap-y-1">
          {[
            { label: "이름", value: user.name },
            { label: "이메일", value: user.email },
            { label: "휴대폰번호", value: "-" },
            { label: "회원유형", value: "-" },
            { label: "가입날짜", value: "-" },
            { label: "가입유형", value: "-" },
            { label: "사업자등록번호", value: "-" },
            { label: "팀명", value: user.team },
          ].map(({ label, value }, index) => (
            <div className="flex w-full items-center" key={index}>
              <dt className="mr-2 w-[80px]">{label}</dt>
              <dd className="flex items-center">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex justify-end gap-1 mt-2">
          <Button size="small" className="text-gray-500 font-medium w-[50px]">
            거절
          </Button>
          <Button highlight size="small" className="w-[50px]">
            승인
          </Button>
        </div>
      </section>
    </div>
  );
}
