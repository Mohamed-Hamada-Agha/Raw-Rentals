<template>
  <div class="h-[250px] flex flex-row justify-between items-center  bg-[#dec8ab] gap-4 text-lg">
      <ul class="grid grid-cols-3 justify-center items-center flex-row flex-nowrap gap-9 ml-28">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>
          <button @click="openDialog">Wallet</button>
        </li>
        <li><NuxtLink to="/aboutUs">About Us</NuxtLink></li>
        <li>
          <button @click="openDialog">My Orders</button>
        </li>
        <li><NuxtLink to="/terms-Conditions">Terms and Conditions</NuxtLink></li>
        <li><NuxtLink to="/VisionandMission">Vision and Mission</NuxtLink></li>
      </ul>
        <div class="flex flex-col justify-center items-center flex-nowrap">
          <NuxtLink to="/"><img src="/assets/images/logo1.svg" alt="" class=" overflow-hidden h-[130px] w-[90px] object-cover align-middle"></NuxtLink>
          <div class="flex justify-center items-center p-4 text-center mr-28">
            <Icons-Links />
          </div>
        </div>
      <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
      <ul class="grid grid-cols-2 gap-9 text-center  mr-28">
        <li><NuxtLink to="/contactUs">Contact Us</NuxtLink></li>
        <li>
          <button @click="openDialog">Complaints and Suggestions</button>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconsLinks from '../auth/Icons-Links.vue';
import SuccessDialog from '../auth/SuccessDialog.vue';

const showSuccessDialog = ref(false);

const openDialog = () => {
    showSuccessDialog.value = true
}
</script>