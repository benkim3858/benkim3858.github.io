export default defineNuxtConfig({
  app: {
    baseURL: '/benkim3858.github.io/',
    buildAssetsDir: '_nuxt/'
  },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  vite: {
    build: {
      assetsDir: '_nuxt'
    }
  }
})