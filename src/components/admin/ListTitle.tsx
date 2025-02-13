interface ListTitleProps {
  children: React.ReactNode;
}

export default function ListTitle({ children }: ListTitleProps) {
  return <h2 className="font-semibold text-[16px]">{children}</h2>;
}
