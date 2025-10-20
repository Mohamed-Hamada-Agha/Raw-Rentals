<template>
  <div  class="w-full">
    <LayoutNavbar />
    <logo />
    <main>
      <slot /> 
    </main>

    <LayoutAppFooter />
  </div>
</template>
<script setup>
import logo from '~/components/layout/logo.vue';
// const { locale } = useI18n();

// const direction = computed(() => {
//   return locale.value === 'ar' ? 'rtl' : 'ltr';
// });

// watch(locale, (newLocale) => {
//   document.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
//   document.documentElement.lang = newLocale;
// }, { immediate: true });
</script>