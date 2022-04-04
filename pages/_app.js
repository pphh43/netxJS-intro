//페이지 렌더링하기 전 _app.js 먼저 실행

// 1. 페이지 변경 간에 레이아웃 유지
// 2. 페이지 탐색 시 state 유지
// 3. componentDidCatch를 사용한 Custom 에러 처리
// 4. 페이지에 추가 데이터 삽입
// 5. Global CSS 추가

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
