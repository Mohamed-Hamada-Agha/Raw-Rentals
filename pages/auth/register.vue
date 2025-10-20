<template>
  <!-- سكرول بسيط -->
  <div class="min-h-[105vh] grid grid-cols-1 md:grid-cols-2 font-sans">
    <!-- فورم التسجيل -->
    <section class="order-1 flex items-center justify-center px-5 py-10 md:px-10">
      <div class="w-full max-w-2xl ml-16">
        <h1 class="text-3xl sm:text-4xl text-center font-semibold mb-8 mt-6 text-black">New Registration</h1>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Username -->
          <div>
            <label for="username" class="block text-sm font-semibold mb-2 text-black">Username</label>
            <input
              id="username"
              v-model.trim="username"
              type="text"
              placeholder="Enter Username"
              class="w-full py-3 px-4 text-sm border border-gray-300 rounded-lg outline-none placeholder:text-gray-400 focus:border-yellow-600"
              required
              aria-required="true"
            />
            <p v-if="errors.username" class="mt-1 text-xs text-red-600">{{ errors.username }}</p>
          </div>

          <!-- رقم الموبايل -->
          <div>
            <CountryPhoneInput v-model="phone" class="m-0 p-0" />
            <p v-if="errors.phone" class="mt-1 text-xs text-red-600">{{ errors.phone }}</p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-semibold mb-2 text-black">Email</label>
            <input
              id="email"
              v-model.trim="email"
              type="email"
              placeholder="Enter email"
              class="w-full py-3 px-4 text-sm border border-gray-300 rounded-lg outline-none placeholder:text-gray-400 focus:border-yellow-600"
              autocomplete="email"
              required
              aria-required="true"
            />
            <p v-if="errors.email" class="mt-1 text-xs text-red-600">{{ errors.email }}</p>
          </div>

          <!-- City -->
          <div>
            <SelectedCity v-model="city" />
            <p v-if="errors.city" class="mt-1 text-xs text-red-600">{{ errors.city }}</p>
          </div>

          <!-- New Password -->
          <div>
            <label for="password" class="block text-sm font-semibold mb-2 text-black">New Password</label>
            <div class="relative flex items-center rounded-lg border border-gray-200">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password"
                class="w-full py-3 px-4 text-sm rounded-lg outline-none placeholder:text-gray-400"
                autocomplete="new-password"
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

          <!-- Confirm Password -->
          <div>
            <label for="confirm" class="block text-sm font-semibold mb-2 text-black">Confirm Password</label>
            <div class="relative flex items-center rounded-lg border border-gray-300">
              <input
                id="confirm"
                v-model="confirm"
                :type="showConfirm ? 'text' : 'password'"
                placeholder="Re-enter password"
                class="w-full py-3 px-4 text-sm rounded-lg outline-none placeholder:text-gray-400"
                autocomplete="new-password"
                required
                aria-required="true"
              />
              <button
                type="button"
                @click="showConfirm = !showConfirm"
                class="absolute right-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/30"
                :aria-label="showConfirm ? 'Hide password' : 'Show password'"
              >
                <svg v-if="!showConfirm" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
            <p v-if="errors.confirm" class="mt-1 text-xs text-red-600">{{ errors.confirm }}</p>
          </div>

          <!-- الشروط -->
          <div class="flex items-center gap-2 text-sm">
            <input id="terms" v-model="accepted" type="checkbox" class="h-4 w-4 rounded border-gray-300" />
            <label for="terms" class="text-gray-700">Accept</label>
            <NuxtLink to="/terms-Conditions" class="text-[#c5b29a] underline text-md">Terms and Conditions</NuxtLink>
          </div>
          <p v-if="errors.accepted" class="mt-1 text-xs text-red-600">{{ errors.accepted }}</p>

          <!-- زر التسجيل -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full sm:w-[260px] mx-auto block text-center p-3 text-base font-semibold text-black bg-[#dec8ab] hover:bg-[#d5bd9a] rounded-lg transition-colors disabled:opacity-60"
              :disabled="loading"
            >
              <span v-if="!loading">Register</span>
              <span v-else>Processing…</span>
            </button>
          </div>
        </form>

        <!-- footer -->
        <div class="text-center mt-8">
          <div class="text-md text-gray-600">
            Already have an account?
            <NuxtLink to="/auth/login" class="underline text-[#dec8ab]">Login</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <aside class="order-2 flex items-end justify-center md:items-center bg-transparent px-5 pb-6 md:pb-0">
      <div class="relative w-full max-w-xl">
        <img
          src="/assets/images/auth-img.png"
          alt="Clothing rack"
          class="rounded-[28px] md:rounded-[2.5vw] object-cover w-full h-auto"
          loading="lazy"
        />
        <a href="/" class="bg-white rounded-tl-[2.6vw] bottom-0 right-0 pt-[5%] pl-[5%] absolute w-1/4">
     
            <img
              src="/assets/images/rr.svg"
              alt="Brand logo"
              class="h-full w-full rounded-md object-contain"
            />
        </a>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CountryPhoneInput from '~/components/auth/CountryPhoneInput.vue'
import SelectedCity from '~/components/auth/SelectedCity.vue'

definePageMeta({ layout: 'auth' })

// حقول
const username = ref('')
const phone = ref({ phone: '', country: null }) // CountryPhoneInput v-model
const email = ref('')
const city = ref(null)
const password = ref('')
const confirm = ref('')
const accepted = ref(false)

// حالة UI
const showPassword = ref(false)
const showConfirm = ref(false)
const loading = ref(false)

// أخطاء
const errors = ref({
  username: '', phone: '', email: '', city: '', password: '', confirm: '', accepted: ''
})

// ڤاليديشن + submit
async function handleRegister () {
  errors.value = { username: '', phone: '', email: '', city: '', password: '', confirm: '', accepted: '' }

  if (!username.value) errors.value.username = 'Username is required'
  if (!phone.value?.phone) errors.value.phone = 'Phone is required'
  if (!email.value) errors.value.email = 'Email is required'
  if (!city.value) errors.value.city = 'City is required'
  if (!password.value) errors.value.password = 'Password is required'
  if (confirm.value !== password.value) errors.value.confirm = 'Passwords do not match'
  if (!accepted.value) errors.value.accepted = 'Please accept terms'

  if (Object.values(errors.value).some(Boolean)) return

  loading.value = true
  try {
    // TODO: اربط API التسجيل
    // await $fetch('/api/auth/register', { method:'POST', body:{ username: username.value, phone: phone.value, email: email.value, city: city.value, password: password.value } })
    // navigateTo('/auth/login')
    console.log('Register payload', {
      username: username.value,
      phone: phone.value,
      email: email.value,
      city: city.value,
      password: password.value
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* لو CountryPhoneInput/SelectedCity مبنيين على PrimeVue Select */
:deep(.p-select-list) {
  margin: 0;
  padding: var(--p-select-list-padding, 4px);
  display: flex;
  flex-direction: column;
  gap: var(--p-select-list-gap, 4px);
  list-style: none;
}
</style>
