<template>
  <div class="h-[50px] bg-[#dec8ab] flex items-center">
    <!-- سوشيال: ديسكتوب فقط -->
    <Icons-Links class="hidden md:flex" />

    <!-- Upperbar -->
    <div
      class="upperbar flex items-center gap-3 md:gap-6 lg:gap-10 ml-auto mr-0 md:mr-6 lg:mr-24
             justify-center md:justify-end w-full lg:w-auto"
    >
      <!-- Cart -->
      <NuxtLink
        to="/cart"
        aria-label="Cart"
        class="links inline-flex items-center gap-2 text-base md:text-lg p-2 rounded-lg hover:bg-white/30"
      >
        <!-- النص يظهر فقط على lg+ -->
        <span class="hidden lg:inline">Cart</span>
        <i class="pi pi-shopping-bag text-[18px] md:text-[20px]"></i>
      </NuxtLink>

      <!-- Notification -->
      <NuxtLink
        to="/auth/login"
        aria-label="Notifications"
        class="links inline-flex items-center gap-2 text-base md:text-lg p-2 rounded-lg hover:bg-white/30"
      >
        <span class="hidden lg:inline">Notification</span>
        <i class="pi pi-bell text-[18px] md:text-[20px]"></i>
      </NuxtLink>

      <!-- Login / Register -->
      <NuxtLink
        to="/auth/login"
        aria-label="Login"
        class="inline-flex items-center gap-2 text-base md:text-lg p-2 rounded-lg hover:bg-white/30"
      >
        <span class="hidden lg:inline">Login / Register</span>
        <!-- أيقونة تسجيل الدخول -->
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </NuxtLink>

      <!-- اللغة: ديسكتوب فقط -->
      <LanguageSelector  />
    </div>
  </div>
</template>

<script setup>
import LanguageSelector from '../auth/LanguageSelector.vue'
import IconsLinks from '../auth/Icons-Links.vue'
</script>
