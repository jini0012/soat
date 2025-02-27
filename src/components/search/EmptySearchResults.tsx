export default function EmptySearchResult() {
  return (
    <section className="h-[100vh] flex flex-col items-center gap-2">
      <h2 className="sr-only">검색 결과 없음</h2>
      <img src="" alt="결과없음 이미지" className="w-[100px] h-[120px] mt-4" />
      <p className="text-gray-500 font-normal mt-8">
        <span className="text-flesh-500 font-bold">[ 랴 ]</span> 에 대한
        검색결과가 없습니다.
      </p>
      <p className="text-gray-500 font-light text-[13px]">
        다른 키워드로 다시 검색해주세요.
      </p>
    </section>
  );
}
