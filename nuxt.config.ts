export default defineNuxtConfig({
  app: {
    baseURL: 'benkim3858.github.io/',
    buildAssetsDir: 'assets'
  },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
})