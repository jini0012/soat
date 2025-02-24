//전역 객체를 확장할 때 쓰면 되는 파일입니다.
interface Window {
  daum: any;
}

declare global {
  interface Window {
    daum: any;
  }
}
