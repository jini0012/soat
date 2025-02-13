interface TabDescriptionProps {
  children: string;
}

export default function SubTabDescription({ children }: TabDescriptionProps) {
  return <p className="mt-[14px] text-gray-400 text-[14px]">&gt; {children}</p>;
}
