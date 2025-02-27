interface ListTitleProps {
  children: React.ReactNode;
}

export default function ListTitle({ children }: ListTitleProps) {
  return <h2 className="font-semibold text-base">{children}</h2>;
}
