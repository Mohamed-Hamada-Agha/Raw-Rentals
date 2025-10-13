<template>
  <div class="h-[250px] flex flex-row justify-between items-center  bg-[#dec8ab] gap-20 text-lg">
 
      <ul class="grid grid-cols-3 justify-center items-center flex-row flex-nowrap gap-6 ml-28">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="">Wallet</NuxtLink></li>
        <li><NuxtLink to="">About Us</NuxtLink></li>
        <li><NuxtLink to="">My Orders</NuxtLink></li>
        <li><NuxtLink to="">Terms and Conditions</NuxtLink></li>
        <li><NuxtLink to="">Vision and Mission</NuxtLink></li>
      </ul>
  
        <div class="flex flex-col justify-center items-center  ">
          <NuxtLink to="/"><img src="/assets/images/logo1.svg" alt="" class=" w-[90px] h[130px] object-content"></NuxtLink>
          <div class="flex justify-center items-center p-4 text-center mr-28">
            <Icons-Links />
          </div>
        </div>
  
      <ul class="grid grid-cols-2 gap-9  mr-32">
        <li><NuxtLink to="/contactUs">Contact Us</NuxtLink></li>
        <li><NuxtLink to="">Complaints and Suggestions</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
import IconsLinks from '../auth/Icons-Links.vue';
</script>