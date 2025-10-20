<template>
  <div>
    <nuxt-layout>
       <NuxtPage />
    </nuxt-layout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'
const { initLang } = useLocale()
onMounted(() => initLang())   
const head = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true })
useHead(head)
useHead({
  htmlAttrs: head.value.htmlAttrs,
  link: head.value.link,
  meta: head.value.meta,
})
</script>
