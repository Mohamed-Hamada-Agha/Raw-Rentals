<template>
  <div class="flex flex-row justify-between items-center bg-white gap-20 text-lg mx-28">
 
      <ul class="flex justify-start items-center flex-row flex-nowrap gap-12 ">
        <li class="menu-item active:"><NuxtLink to="/">Home</NuxtLink></li>
        <li>
        <Menue
          :label="'Menue'"
          :categories="categories"
          localePrefix="/en/category-"
        />
        </li>
        <li class="menu-item">
          <button @click="openDialog">My Orders</button>
          <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
        </li>
      </ul>
      <NuxtLink to="/">
        <div class="flex flex-col justify-center items-center   py-4">
          <img src="/assets/images/logo.svg" alt="" class=" w-[90px] h[130px] object-cover">
          <h1 class="text-2xl font-semibold my-4">RAW RENTALS</h1>
        </div>
      </NuxtLink>
      <ul class="flex justify-end items-center flex-row flex-nowrap gap-12 ">
        <li><NuxtLink to="/Services" class="menu-item">Services</NuxtLink></li>
        <li><NuxtLink to="/Favourites" class="menu-item">Favourites</NuxtLink></li>
        <li><NuxtLink to="/contactUs" class="menu-item">Contact Us</NuxtLink></li>
    
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menue from '../auth/Menue.vue';
import SuccessDialog from '../auth/SuccessDialog.vue';

const showSuccessDialog = ref(false);

const openDialog = () => {
    showSuccessDialog.value = true
}
import { useRouter } from 'vue-router'

const router = useRouter()
const categories = ref([
  { id: 1, name: 'Dresses' },
  { id: 2, name: 'Bags' },
  { id: 3, name: 'Shoes' },
  { id: 4, name: 'Accessories' },
  { id: 5, name: 'Fjff' }
]);
</script>

<style scoped>
:deep(.menu-item) {
  position: relative;
  display: inline-block;       
  padding-bottom: 4px;      
}

:deep(.menu-item::after) {
  content: "";
  position: absolute;
  left: 0;                
  bottom: -2px;            
  height: 2px;           
  width: 100%;
  background: #dec8ab;   
  transform: scaleX(0);
  transform-origin: left center; 
  transition: transform .25s ease;
}
:deep(.menu-item:hover::after),
:deep(.p-menuitem-content:focus-within .menu-item::after) {
  transform: scaleX(1);
}
</style>