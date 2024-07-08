// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/benkim3858.github.io/', // GitHub 저장소 이름으로 설정
    buildAssetsDir: 'assets', // 정적 자산 디렉토리 설정
  },

  // GitHub Pages에서는 클라이언트 사이드 렌더링 사용
  ssr: false,

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
  },

  vite: {
    build: {
      assetsDir: '_nuxt' // 이 줄을 추가하세요
    }
  },

  compatibilityDate: '2024-07-09'
})