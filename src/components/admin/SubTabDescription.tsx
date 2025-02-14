interface TabDescriptionProps {
  children: string;
}

export default function SubTabDescription({ children }: TabDescriptionProps) {
  return <p className="mt-[14px] text-gray-400 text-sm">&gt; {children}</p>;
}
