// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/benkim3858.github.io/', // GitHub 저장소 이름으로 설정
    buildAssetsDir: 'assets', // 정적 자산 디렉토리 설정
  },
  ssr: false, // GitHub Pages에서는 클라이언트 사이드 렌더링 사용
  nitro: {
    preset: 'github-pages',
    output: {
      publicDir: '.output/public'
    },
    prerender: {
      crawlLinks: true,
      routes: ['/404.html'] // 404 페이지 프리렌더링
    },
    static: true
  }
})