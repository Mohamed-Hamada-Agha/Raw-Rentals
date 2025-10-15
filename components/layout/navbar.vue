<template>
   <div class="h-[50px] flex justify-between bg-[#dec8ab]">
    <!-- Icons-sochial-Links -->
     <Icons-Links />
    <div class="upperbar flex justify-end items-center gap-10 mr-28  ">
    <a href="" class="links flex items-center gap-2 text-lg">
        <span><NuxtLink to="/cart">Cart</NuxtLink></span>
        <i class="pi pi-shopping-bag"></i>
    </a>
    <a href="" class="links flex items-center gap-2 text-lg">
        <span><NuxtLink to="/auth/login">Notification</NuxtLink></span>
        <i class="pi pi-bell"></i>
    </a>
    <NuxtLink to="/auth/login" class="flex items-center gap-2 text-lg">
        <span>Login / Register</span>
    </NuxtLink>
    <LanguageSelector />
   </div>
  </div>

</template>

<script setup>
 import LanguageSelector from '../auth/LanguageSelector.vue';
 import IconsLinks from '../auth/Icons-Links.vue';
</script>

<style>
.upperbar .links {
    gap: 5px;
}

</style>