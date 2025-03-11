import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

// 서버 환경인지 클라이언트 환경인지 체크
const isServer = typeof window === "undefined";

let domPurify;
if (isServer) {
  // 서버 환경 (Next.js API Route 등)에서는 JSDOM을 사용
  const window = new JSDOM("").window;
  domPurify = DOMPurify(window);
} else {
  // 클라이언트 환경에서는 DOMPurify만 사용
  domPurify = DOMPurify;
}

// 안전한 이미지 src를 위한 정규 표현식
const allowedProtocolRegexp = /^https:\/\//; // https 프로토콜만 허용

// img와 srcset 속성 검증을 위한 DOMPurify 훅 설정
domPurify.addHook("beforeSanitizeAttributes", (node) => {
  if (node.tagName === "IMG") {
    // src 속성 검증
    if (node.hasAttribute("src")) {
      const src = node.getAttribute("src");
      // 안전하지 않은 src는 빈 값으로 설정
      if (src === null) {
        return;
      }

      if (!allowedProtocolRegexp.test(src)) {
        node.setAttribute("src", ""); // 안전하지 않으면 빈 src로 설정
      }
    }

    // srcset 속성 검증
    if (node.hasAttribute("srcset")) {
      const srcset = node.getAttribute("srcset");
      if (srcset === null) {
        return;
      }
      const srcsetUrls = srcset
        .split(",")
        .map((url) => url.trim().split(" ")[0]); // srcset에서 URL 추출
      // 각 srcset URL에 대해 안전성 검증
      const invalidSrcset = srcsetUrls.some(
        (url) => !allowedProtocolRegexp.test(url)
      );
      if (invalidSrcset) {
        node.setAttribute("srcset", ""); // 안전하지 않으면 srcset 속성 제거
      }
    }
  }
});

// 🚀 공통 sanitize 함수
export const sanitizeHTML = (html: string) => {
  return domPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "p",
      "b",
      "i",
      "strong",
      "em",
      "a",
      "ul",
      "ol",
      "li",
      "br",
      "img",
      "s",
      "blockquote",
    ],
    ALLOW_DATA_ATTR: false,
    ALLOWED_ATTR: [
      "href",
      "target",
      "src",
      "alt",
      "title",
      "data-key",
      "rel",
      "srcset",
    ],
    FORBID_TAGS: [
      "script",
      "style",
      "iframe",
      "form",
      "input",
      "button",
      "object",
      "embed",
      "audio",
      "video",
      "canvas",
      "math",
      "svg",
    ],
    FORBID_ATTR: [
      "onerror",
      "onload",
      "onclick",
      "onmouseover",
      "style",
      "class",
    ],
    USE_PROFILES: {
      html: true, // HTML 프로필 사용
      svg: false, // SVG 비활성화
      svgFilters: false, // SVG 필터 비활성화
      mathMl: false, // MathML 비활성화
    },
    WHOLE_DOCUMENT: false, // 전체 HTML 문서가 아닌 부분적인 HTML만 처리
    SANITIZE_DOM: true, // DOM 요소 정리 활성화
    KEEP_CONTENT: false, // 금지된 태그 내부의 컨텐츠는 유지
    FORCE_BODY: true, // 항상 body 태그 내 컨텐츠로 취급
    RETURN_DOM: false, // HTML 문자열 반환
    RETURN_DOM_FRAGMENT: false, // DocumentFragment 객체 대신 문자열 반환
  });
};
