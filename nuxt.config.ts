export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  experimental: {
    payloadExtraction: false
  },
  generate: {
    fallback: true
  },
  app: {
    buildAssetsDir: '/assets/'
  }
})