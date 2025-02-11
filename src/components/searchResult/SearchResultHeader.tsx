export default function SearchResultHeader() {
  return (
    <header className="flex items-center justify-start py-[20px] px-[8%]">
      <h1>
        <img
          src="/images/icons/logo-temp.svg"
          alt="Soat로고"
          className="color-flesh-500 mr-4"
        />
      </h1>
      <form action="">
        <label htmlFor="search-word" className="sr-only">
          검색어 입력하기
        </label>
        <input
          type="text"
          id="search-word"
          name="searchWord"
          className="w-[60vw] border-b-2 border-b-flesh-500 outline-none ring-0 focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
        />
      </form>
    </header>
  );
}
