declare module '#app' {
  interface NuxtApp {
    $channelTalk: {
      show: () => void
      hide: () => void
      shutdown: () => void
      setPage: (page: string) => void
      track: (eventName: string, eventProperty?: Record<string, any>) => void
      isInitialized: boolean
    }
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $channelTalk: {
      show: () => void
      hide: () => void
      shutdown: () => void
      setPage: (page: string) => void
      track: (eventName: string, eventProperty?: Record<string, any>) => void
      isInitialized: boolean
    }
  }
}

export {}
