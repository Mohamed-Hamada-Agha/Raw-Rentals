<!-- <template>
  <div class="flex flex-row justify-between items-center bg-white px-28">
      <ul class="flex justify-start items-center flex-row flex-nowrap gap-12 text-lg">
        <li class="menu-item active "><NuxtLink to="/">Home</NuxtLink></li>
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
        <div class="">
      <div class="flex items-center justify-between px-4 py-3">
        <button 
          @click="toggleMobileMenu"
          class="p-2 rounded-lg hover:bg-white/50 transition-colors hidden"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <NuxtLink to="/" class="flex flex-col items-center justify-center gap-4">
          <img src="/assets/images/logo.svg" alt="Logo" class="">
          <span class="text-lg text-center font-semibold">RAW RENTALS</span>
        </NuxtLink>
      </div>
    </div>
      <ul class="flex  justify-end items-center flex-row flex-nowrap gap-12 text-lg">
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
  bottom: -8px;            
  height: 4px;           
  width: 100%;
  background: #dec8ab;   
  transform: scaleX(0);
  transform-origin: left center; 
  transition: transform .25s ease;
}
  
:deep(.menu-item:hover::after),
:deep(.menu-item:focus-within::after),
:deep(.menu-item:active::after) {
  transform: scaleX(1);    
}
.navbar .content .nav-links .nav-link.router-link-active:after,
.menu-item::after {
    width: 100%;
}
</style>  -->

<!-- نسخة الresponsive -->

<!-- components/layout/navbar.vue -->
<template>
  <div>

    <div class="hidden lg:flex flex-row justify-between items-center bg-white gap-8 xl:gap-20 text-base xl:text-lg px-4 lg:px-8 xl:px-28">
      <ul class="flex justify-start items-center flex-row flex-nowrap gap-6 xl:gap-12">
        <li class="menu-item active"><NuxtLink to="/">Home</NuxtLink></li>
        <li>
          <Menue
            :label="'Menu'"
            :categories="categories"
            localePrefix="/en/category-"
          />
        </li>
        <li class="menu-item">
          <button @click="openDialog">My Orders</button>
          <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
        </li>
      </ul>

      <NuxtLink to="/" class="flex flex-col justify-center items-center py-4">
        <img src="/assets/images/logo.svg" alt="Logo" class="w-16 xl:w-[90px] h-auto object-cover">
        <h1 class="text-xl xl:text-2xl font-semibold my-2 xl:my-4">RAW RENTALS</h1>
      </NuxtLink>

      <ul class="flex justify-end items-center flex-row flex-nowrap gap-6 xl:gap-12">
        <li><NuxtLink to="/Services" class="menu-item">Services</NuxtLink></li>
        <li><NuxtLink to="/Favourites" class="menu-item">Favourites</NuxtLink></li>
        <li><NuxtLink to="/contactUs" class="menu-item">Contact Us</NuxtLink></li>
      </ul>
    </div>

    <div class="lg:hidden px-16 bg-[#f5f0e8] border-b border-gray-200">
      <div class="flex items-center justify-between px-4 py-3">
       <NuxtLink to="/" class="flex gap-2 items-center">
          <img src="/assets/images/logo.svg" alt="Logo" class="w-12 h-auto">
          <span class="text-sm font-semibold">RAW RENTALS</span>
        </NuxtLink> 
        <button 
          @click="toggleMobileMenu"
          class="p-2 rounded-lg hover:bg-white/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="toggleMobileMenu"
      />
    </Transition>

    <Transition name="slide">
      <div 
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
      
        <div class="flex items-center justify-between p-4 border-b bg-[#f5f0e8]">
          <div class="flex items-center gap-3">
            <img src="/assets/images/logo.svg" alt="Logo" class="w-10 h-10">
            <span class="font-bold text-lg">RAW RENTALS</span>
          </div>
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-white/50"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      
        <nav class="py-4">
          <ul class="space-y-1">
            <li>
              <NuxtLink 
                to="/" 
                @click="toggleMobileMenu"
                class="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NuxtLink>
            </li>

         
            <li>
              <button 
                @click="toggleCategoriesMenu"
                class="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Menu
                </div>
                <svg 
                  :class="['w-4 h-4 transition-transform', isCategoriesOpen && 'rotate-180']"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
             
              <Transition name="expand">
                <ul v-if="isCategoriesOpen" class="bg-gray-50 py-2">
                  <li v-for="category in categories" :key="category.id">
                    <NuxtLink 
                      :to="`/en/category-${category.id}`"
                      @click="toggleMobileMenu"
                      class="block px-12 py-2 text-gray-600 hover:bg-[#f5f0e8] hover:text-gray-900 transition-colors"
                    >
                      {{ category.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </Transition>
            </li>

            <li>
              <button 
                @click="handleMyOrders"
                class="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                My Orders
              </button>
            </li>

            <li>
              <NuxtLink 
                to="/Services"
                @click="toggleMobileMenu"
                class="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Services
              </NuxtLink>
            </li>

            <li>
              <NuxtLink 
                to="/Favourites"
                @click="toggleMobileMenu"
                class="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favourites
              </NuxtLink>
            </li>

            <li>
              <NuxtLink 
                to="/contactUs"
                @click="toggleMobileMenu"
                class="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f5f0e8] transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>

    <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Menue from '../auth/Menue.vue';
import SuccessDialog from '../auth/SuccessDialog.vue';

const showSuccessDialog = ref(false);
const isMobileMenuOpen = ref(false);
const isCategoriesOpen = ref(false);

const categories = ref([
  { id: 1, name: 'Dresses' },
  { id: 2, name: 'Bags' },
  { id: 3, name: 'Shoes' },
  { id: 4, name: 'Accessories' },
  { id: 5, name: 'Fjff' }
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isCategoriesOpen.value = false;
  }
};

const toggleCategoriesMenu = () => {
  isCategoriesOpen.value = !isCategoriesOpen.value;
};

const openDialog = () => {
  showSuccessDialog.value = true;
};

const handleMyOrders = () => {
  openDialog();
  toggleMobileMenu();
};
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
  bottom: -8px;
  height: 4px;
  width: 100%;
  background: #dec8ab;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

:deep(.menu-item:hover::after),
:deep(.menu-item:focus-within::after),
:deep(.menu-item:active::after) {
  transform: scaleX(1);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>