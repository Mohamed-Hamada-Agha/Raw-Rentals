<template>
  <div class="w-full">
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
</script>