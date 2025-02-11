interface SearchFilterProps {
  children: React.ReactNode;
}

export default function SearchOptionFilter({ children }: SearchFilterProps) {
  return (
    <button className="mt-[10px] mb-[23px] border border-gray-300 rounded-xl w-[63px] h-[26px] text-[10px] text-gray-400 ">
      {children}
    </button>
  );
}
