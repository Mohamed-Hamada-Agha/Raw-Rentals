import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: { shim: false, strict: true },
  vite: { esbuild: { jsx: 'automatic' } },
  components: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
  ],

  primevue: {
    components: { include: ['Carousel'] },
    options: {
      ripple: true,
      inputVariant: 'filled',
    },
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system', // لو بتستخدم 'class' للوضع الليلي، غيّرها لاحقًا لـ 'class'
        cssLayer: true,
      },
    },
  },

  // ملاحظة: لو عندك tailwind.config.js مستقل، خليك بمكان واحد تفضلًا
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"JF Flat"', 'Cairo', 'Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    },
  },

  // يفضّل تحميل الخطوط قبل باقي الستايلات، ثم Tailwind، ثم style.css
  css: [
    '~/assets/css/fonts.css',
    'primeicons/primeicons.css',
    '@/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
})
