<template>
  <!-- min-h-[105vh] = سكرول بسيط على كل الشاشات -->
  <div class="min-h-[105vh] grid grid-cols-1 md:grid-cols-2 font-sans">
    <!-- الفورم: يظهر أولاً موبايل/تابلت/ديسكتوب -->
    <section class="order-1 flex items-center justify-center px-5 py-10 md:px-10">
      <div class="w-full max-w-md sm:max-w-lg">
        <h1 class="text-3xl sm:text-4xl text-center font-semibold mb-8 text-black">Login</h1>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- الموبايل -->
          <div>
            <!-- <label class="block text-sm font-semibold mb-2 text-black">Mobile Number</label> -->
            <CountryPhoneInput v-model="formData" />
            <p v-if="errors.phone" class="mt-1 text-xs text-red-600">{{ errors.phone }}</p>
          </div>

          <!-- كلمة السر -->
          <div>
            <label for="password" class="block text-sm font-semibold mb-2 text-black">Password</label>
            <div class="relative flex items-center rounded-lg border border-gray-300 focus-within:border-gray-900 transition">
              <input
                id="password"
                v-model.trim="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password"
                class="flex-1 w-full py-3 px-4 text-sm rounded-lg outline-none placeholder:text-gray-400"
                autocomplete="current-password"
                required
                aria-required="true"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/30"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-xs text-red-600">{{ errors.password }}</p>
          </div>

          <!-- نسيت كلمة السر -->
          <div class="flex justify-end">
            <NuxtLink to="/auth/changePassword" class="text-sm text-gray-600 hover:text-black underline">
              Forgot password?
            </NuxtLink>
          </div>

          <!-- زر الدخول -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full sm:w-[260px] mx-auto block text-center p-3 text-lg font-semibold text-black bg-[#dec8ab] hover:bg-[#d5bd9a] rounded-lg transition-colors disabled:opacity-60"
              :disabled="loading"
            >
              <span v-if="!loading">Login</span>
              <span v-else>Processing…</span>
            </button>
          </div>
        </form>

        <!-- روابط إضافية -->
        <div class="text-center mt-8 space-y-2">
          <div class="text-sm sm:text-md text-gray-600">
            Don't have an account?
            <NuxtLink to="/auth/register" class="underline hover:text-black">Register</NuxtLink>
          </div>
          <div class="text-sm text-gray-600">
            Enter as <NuxtLink to="/" class="underline hover:text-black">Visitor</NuxtLink>
          </div>
        </div>

        <!-- تواصل -->
        <div class="text-center text-sm sm:text-md text-gray-600 mt-10">
          Having problems signing up?
          <NuxtLink to="/contactUs" class="underline hover:text-black">Contact Us</NuxtLink>
        </div>
      </div>
    </section>

    <!-- الصورة: موجودة على كل الشاشات، وتظهر أسفل الصفحة على ≤767px -->
    <!-- order-2 على الموبايل (أسفل)، و md:order-2 برضه على الدِسك—نفس الموضع يمين -->
    <aside class="order-2 flex items-end justify-center md:items-center bg-transparent px-5 pb-6 md:pb-0">
      <div class="relative w-full max-w-xl">
        <img
          src="/assets/images/auth-img.png"
          alt="Clothing rack"
          class="rounded-[28px] md:rounded-[2.5vw] object-cover w-full h-auto"
          loading="lazy"
        />

        <!-- اللوجو أسفل يمين الصورة بنفس الستايل (بدِّل src باللوجو بتاعك) -->
        <div class="absolute bottom-3 right-3 md:bottom-5 md:right-5">
          <div class="flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl border border-gray-200 shadow-lg px-3 py-2">
            <img
              src="/assets/images/logo1.svg"
              alt="Brand logo"
              class="h-8 w-8 rounded-md object-contain"
            />
           
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CountryPhoneInput from '~/components/auth/CountryPhoneInput.vue'

definePageMeta({ layout: 'auth' })

const showPassword = ref(false)
const loading = ref(false)
const formData = ref({ phone: '', country: null })
const password = ref('')
const errors = ref({ phone: '', password: '' })

async function handleLogin () {
  errors.value = { phone: '', password: '' }
  if (!formData.value?.phone) errors.value.phone = 'Phone is required'
  if (!password.value) errors.value.password = 'Password is required'
  if (errors.value.phone || errors.value.password) return

  loading.value = true
  try {
    // TODO: اربط الـ API هنا
    console.log('Login payload', { ...formData.value, password: password.value })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* لو CountryPhoneInput مبني على PrimeVue Select */
:deep(.p-select-list) {
  margin: 0;
  padding: var(--p-select-list-padding, 4px);
  display: flex;
  flex-direction: column;
  gap: var(--p-select-list-gap, 4px);
  list-style: none;
}
</style>
