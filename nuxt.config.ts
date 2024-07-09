export default defineNuxtConfig({
  app: {
    baseURL: '/benkim3858.github.io/'
  },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  router: {
    base: '/benkim3858.github.io/'
  },
  experimental: {
    payloadExtraction: false
  },
  generate: {
    fallback: '404.html'
  }
})