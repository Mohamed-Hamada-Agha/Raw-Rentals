// nuxt.config.ts
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
    // 👇 هنا المكان الصحيح للثيم
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: true,
      },
    },
  },

  // Tailwind inline config (تمام)
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            // حط الخط أولًا وباقي الاحتياطي بعده + اقتباس الاسم
            sans: ['"JF Flat"', 'Cairo', 'Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    },
  },

  css: [
    'primeicons/primeicons.css',   // أيقونات Prime
    '@/assets/css/tailwind.css',   // ملفك اللي فيه @tailwind base/components/utilities
    '~/assets/css/fonts.css',      // @font-face لـ JF Flat
    '~/assets/css/style.css',      // ستايلاتك (اتأكد ما تغيّرش ألوان Prime عموميًا)
  ],
})
