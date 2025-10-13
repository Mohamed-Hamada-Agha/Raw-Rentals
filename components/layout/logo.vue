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
        </li>
      </ul>
      <NuxtLink to="/">
        <div class="flex flex-col justify-center items-center p-4">
          <img src="/assets/images/logo.svg" alt="" class=" w-[90px] h[130px] object-cover">
          <h1 class="text-2xl font-semibold  m-4">RAW RENTALS</h1>
        </div>
      </NuxtLink>
      <ul class="flex justify-end items-center flex-row flex-nowrap gap-12 ">
        <li><NuxtLink to="/Services" class="menu-item">Services</NuxtLink></li>
        <li><NuxtLink to="/Favourites" class="menu-item">Favourites</NuxtLink></li>
        <li><NuxtLink to="/contactUs" class="menu-item">Contact Us</NuxtLink></li>
    
    </ul>
       <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menue from '../auth/Menue.vue';
import SuccessDialog from '../auth/SuccessDialog.vue';

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
/* داخل <style scoped> استخدم :deep() لو الكلاس جوّه PrimeVue */
:deep(.menu-item) {
  position: relative;
  display: inline-block;       /* مهم عشان الخط مايملاش السطر كله */
  padding-bottom: 4px;         /* مسافة صغيرة تحت للنظر */
}

/* الخط المتحرك */
:deep(.menu-item::after) {
  content: "";
  position: absolute;
  left: 0;                     /* يبدأ من الشمال */
  bottom: -2px;                /* المسافة تحت النص */
  height: 2px;                 /* سُمك الخط */
  width: 100%;
  background: #dec8ab;    /* نفس لون النص */
  transform: scaleX(0);
  transform-origin: left center; /* يبدأ من الشمال */
  transition: transform .25s ease;
}

/* عند الهوفر (وبرضه عند التركيز بالكيبورد) */
:deep(.menu-item:hover::after),
:deep(.p-menuitem-content:focus-within .menu-item::after) {
  transform: scaleX(1);
}

/* احترام تفضيل تقليل الحركة */
@media (prefers-reduced-motion: reduce) {
  :deep(.menu-item::after) { transition: none; }
}

</style>