// 1. استخدام import القياسي
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // إخراج الخصائص للمستوى الأعلى
  typescript: {
    shim: false,
    strict: true,
  },

  vite: {
    esbuild: {
      jsx: 'automatic',
    },
  },

  // إعداد المكونات (حذف include المعيبة)
  components: true, 
   

  // الوحدات
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
  ],
  // إعداد PrimeVue المُصحح
  primevue: {
     components: {
      include: ['Carousel'] 
    },
    options: {
      ripple: true,
      inputVariant: 'filled',
    },
    // تصحيح هيكل الثيم
    theme: {
      preset: Aura, 
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: true,
      },
    },
  },
  //   i18n: {
  //   locales: [
  //     { code: 'ar', iso: 'ar-SA', file: 'ar.json', dir: 'rtl' },
  //     { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
  //   ],
  //   defaultLocale: 'ar',
  //   strategy: 'prefix_except_default',
  //   langDir: 'locales/',
  // },
  // CSS
  css: [
    'flag-icons/css/flag-icons.css',
    '~/node_modules/primeicons/primeicons.css',
    '~/assets/css/style.css',
  ],
});