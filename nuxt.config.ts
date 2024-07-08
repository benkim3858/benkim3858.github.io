// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/benkim3858.github.io/' // GitHub 저장소 이름으로 설정
  },
  ssr: false, // GitHub Pages에서는 클라이언트 사이드 렌더링 사용
})