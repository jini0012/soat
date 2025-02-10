export default function SearchResult() {
  return (
    <>
      <header>검색창</header>
      <main>
        <p>
          <span>&quot;검색어&quot;</span>검색 결과입니다.
          {/* 이 값은 동적으로 처리될 예정 */}
        </p>
        <section>
          <h2 className="sr-only">검색 옵션</h2>
          <button>카테고리</button>
          <button>날짜</button>
        </section>
        <section>
          <h2 className="sr-only">검색 정보</h2>
          <div>
            <p>
              공연 <span>(13건)</span>
              {/* 이 값은 동적으로 처리될 예정 */}
            </p>
            <button>낮은 가격순</button>
          </div>
        </section>
        <section>
          <h2 className="sr-only">검색 결과</h2>
          <ul>
            <li>
              <article>
                <img src="" alt="공연이미지" />
                <div>
                  <div>판매예정</div>
                  <div>D - 16</div>
                  {/* 이 값은 동적으로 처리될 예정 */}
                  <h3>공연명</h3>
                  <p>팀명</p>
                  <p>날짜</p>
                  <p>한줄평(10)</p>
                  {/* 이 값은 동적으로 처리될 예정 */}
                  <button>예매하기</button>
                </div>
              </article>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="sr-only">더보기</h2>
          <button>검색 결과 더보기</button>
        </section>
        {/* 검색 결과 없음 */}
        <section>
          <h2 className="sr-only">검색 결과 없음</h2>
          <p>[검색어] 에 대한 검색결과가 없습니다.</p>
          <p>다른 키워드로 다시 검색해주세요.</p>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}
