<template>
  <footer class="bg-[#dec8ab]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- ====== Desktop (يظل كما هو) ====== -->
      <div class="hidden lg:grid grid-cols-3 items-center gap-10 text-lg">
        <!-- LEFT -->
        <ul class="space-y-3 text-left">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/aboutUs">About Us</NuxtLink></li>
          <li><NuxtLink to="/terms-Conditions">Terms and Conditions</NuxtLink></li>
          <li><NuxtLink to="/contactUs">Contact Us</NuxtLink></li>
        </ul>

        <!-- CENTER -->
        <div class="flex flex-col items-center gap-4">
          <NuxtLink to="/" aria-label="RAW RENTALS">
            <img src="/assets/images/logo1.svg" alt="RAW RENTALS" class="h-[130px] w-[90px] object-contain" />
          </NuxtLink>
          <div class="flex justify-center">
            <Icons-Links />
          </div>
        </div>

        <!-- RIGHT -->
        <ul class="space-y-3 text-right">
          <li><button @click="openDialog" class="hover:opacity-80">Wallet</button></li>
          <li><button @click="openDialog" class="hover:opacity-80">My Orders</button></li>
          <li><NuxtLink to="/VisionandMission">Vision and Mission</NuxtLink></li>
          <li><button @click="openDialog" class="hover:opacity-80">Complaints and Suggestions</button></li>
        </ul>
      </div>

      <!-- ====== Mobile + Tablet (الشكل المطلوب) ====== -->
      <div class="lg:hidden flex flex-col items-center gap-6">
        <!-- Logo + Social -->
        <NuxtLink to="/" aria-label="RAW RENTALS">
          <img src="/assets/images/logo1.svg" alt="RAW RENTALS" class="h-[110px] w-[80px] object-contain" />
        </NuxtLink>
        <Icons-Links />

        <!-- شبكة 2 صف × 4 أعمدة -->
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
          <li v-for="item in compactLinks" :key="item.text" class="flex flex-col items-center text-center">
            <!-- أيقونة فوق -->
            <i :class="['pi', item.icon, 'text-xl mb-2']"></i>

            <!-- نص اللينك تحت -->
            <button
              v-if="item.action === 'dialog'"
              @click="openDialog"
              class="hover:underline"
            >
              {{ item.text }}
            </button>
            <NuxtLink
              v-else
              :to="item.to"
              class="hover:underline"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import IconsLinks from '../auth/Icons-Links.vue'
import SuccessDialog from '../auth/SuccessDialog.vue'

const showSuccessDialog = ref(false)
const openDialog = () => { showSuccessDialog.value = true }

// نفس عناصر القوائم لكن متجمّعة لشبكة الموبايل/التابلت (8 عناصر = 4 يمين + 4 شمال)
const compactLinks = [
  { to: '/', text: 'Home', icon: 'pi-home' },
  { to: '/aboutUs', text: 'About Us', icon: 'pi-info-circle' },
  { to: '/terms-Conditions', text: 'Terms and Conditions', icon: 'pi-file' },
  { to: '/contactUs', text: 'Contact Us', icon: 'pi-envelope' },
  { action: 'dialog', text: 'Wallet', icon: 'pi-wallet' },
  { action: 'dialog', text: 'My Orders', icon: 'pi-shopping-bag' },
  { to: '/VisionandMission', text: 'Vision and Mission', icon: 'pi-bullseye' },
  { action: 'dialog', text: 'Complaints and Suggestions', icon: 'pi-megaphone' }
]
</script>

<style scoped>
a, button { transition: opacity .2s ease }
a:hover { opacity: .85 }
</style>
