import { LOCALES } from './locales/setting'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-lodash',
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_SERVER_URL,
      apiServeBaseUrl: process.env.NUXT_JUST_SERVER_URL,
      title: process.env.NUXT_TITLE,
      baseURL: '',
    },
  },
  lodash: {
    prefix: '_',
    prefixSkip: [],
    upperAfterPrefix: false,
    exclude: [],
    alias: [],
  },
  i18n: {
    strategy: 'prefix_and_default',
    locales: LOCALES,
    defaultLocale: 'en',
    baseUrl: process.env.NUXT_WEB_HOST,
    lazy: true,
    langDir: '../locales/lazy',
    vueI18n: '../locales/index.ts',
    detectBrowserLanguage: false,
  },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    'animate.css',
  ],
  nitro: {
    compressPublicAssets: true,
    externals: {
      inline: ['cookie-es'],
    },
    unenv: {
      alias: {
        'cookie-es': 'cookie-es',
      },
    },
    devProxy: {
      '/api': {
        target: 'http://dev920.logobot.cn/api',
        changeOrigin: true,
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover, user-scalable=no' },
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: ['cookie-es'],
    },
    build: {
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('element-plus')) return 'vendor-element-plus'
              if (id.includes('lodash')) return 'vendor-lodash'
              if (id.includes('@vue') || id.includes('vue-router') || id.includes('pinia')) return 'vendor-vue'
              if (id.includes('@vueuse')) return 'vendor-vueuse'
            }
          },
        },
      },
    },
    esbuild: {
      drop: process.env.NUXT_NODE_ENV === 'prod' ? ['console'] : [],
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  devtools: {
    enabled: true,
  },
  features: {
    inlineStyles: false,
  },
  vue: {
    propsDestructure: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
})
