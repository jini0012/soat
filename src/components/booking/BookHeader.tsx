export default function BookHeader({ showName }: { showName: string }) {
  return (
    <header className="flex items-center p-4 gap-x-2 overflow-hidden">
      <h1 className="flex-shrink-0">
        <img
          src="/images/icons/logo-temp.svg"
          className="w-[77px] h-[36px]"
          alt="쏘앳"
        />
      </h1>
      <h2 className="w-full flex-1 max-w-full whitespace-nowrap overflow-hidden text-ellipsis font-bold text-center">
        예매: {showName}
      </h2>
    </header>
  );
}
