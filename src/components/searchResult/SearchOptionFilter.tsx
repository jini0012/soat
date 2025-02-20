interface SearchFilterProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function SearchOptionFilter({
  children,
  onClick,
}: SearchFilterProps) {
  return (
    <button
      onClick={onClick} // 부모로부터 받은 onClick 이벤트 props 적용
      className="flex justify-center items-center mt-[10px] mb-[23px] border border-gray-300 rounded-2xl pl-2 w-[68px] h-[30px] text-xs text-gray-500"
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 21 21"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.51788 7.89562C5.70541 7.70815 5.95972 7.60283 6.22488 7.60283C6.49005 7.60283 6.74436 7.70815 6.93188 7.89562L10.2249 11.1886L13.5179 7.89562C13.6101 7.80011 13.7205 7.72393 13.8425 7.67152C13.9645 7.61911 14.0957 7.59152 14.2285 7.59037C14.3613 7.58922 14.4929 7.61452 14.6158 7.6648C14.7387 7.71508 14.8504 7.78933 14.9443 7.88323C15.0382 7.97712 15.1124 8.08877 15.1627 8.21167C15.213 8.33456 15.2383 8.46624 15.2371 8.59902C15.236 8.7318 15.2084 8.86302 15.156 8.98502C15.1036 9.10703 15.0274 9.21737 14.9319 9.30962L10.9319 13.3096C10.7444 13.4971 10.49 13.6024 10.2249 13.6024C9.95972 13.6024 9.70541 13.4971 9.51788 13.3096L5.51788 9.30962C5.33041 9.12209 5.2251 8.86778 5.2251 8.60262C5.2251 8.33746 5.33041 8.08315 5.51788 7.89562Z"
        />
      </svg>
    </button>
  );
}
