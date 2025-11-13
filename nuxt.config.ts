import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: { shim: false, strict: true },
  vite: { esbuild: { jsx: 'automatic' } },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon', 
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
  ],

  // i18n: استخدم "files" مع langDir (تحميل كسول)
  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-SA', name: 'العربية', file: 'ar.json', dir: 'rtl' },
      { code: 'en', iso: 'en-US', name: 'English',  file: 'en.json', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // PrimeVue v4 — الثيم عبر JS preset (متوافق وبدون CSS إضافي)
  primevue: {
    components: { 
      // ضيف اللي محتاجه فقط؛ InputGroup من @primevue/forms هيشتغل
      include: ['Select', 'InputGroup', 'Carousel']
    },
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'class', // سيب الثيم يتبع نظام الجهاز
          cssLayer: true              // يحط الـ CSS في layer، أحسن مع Tailwind
        }
      }
    }
  },

  // ترتيب الـ CSS: Tailwind أولًا (reset/utilities) ثم الأيقونات ثم ملفاتك
  css: [
    '@/assets/css/tailwind.css',
    'primeicons/primeicons.css',
    '~/assets/css/fonts.css',
    '~/assets/css/style.css'
  ]
})
