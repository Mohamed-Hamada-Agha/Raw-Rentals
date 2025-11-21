<template>
  <div class="flex flex-col md:flex-row font-sans">
    <!-- form section -->
    <div class="flex mt-16 justify-center pl-5 px-8 w-full md:w-[800px] bg-white">
      <div class="w-full m-8">
        <h1 class="text-3xl sm:text-4xl text-center font-semibold mb-8 text-black">Change Password</h1>
        <h2 class="text-xl sm:text-2xl text-center font-thin mb-10 text-black">Please enter your mobile number to receive a verification code</h2>

        <form @submit.prevent="handleLogin">
          <!-- Mobile Number -->
          <div class="mb-6">
            <CountryPhoneInput v-model="formData" class="w-full" />
          </div>

          <!-- Send button -->
          <div class="flex justify-center items-center">
            <NuxtLink to=""
              type="submit"
              class="w-full sm:w-[250px] p-3 text-xl font-semibold text-black bg-[#dec8ab] rounded-lg m-6 text-center"
            >
              Send
            </NuxtLink>
          </div>
        </form>

        <!-- Contact Us section -->
        <div class="text-center text-md text-gray-600 mt-8">
          Having problems signing up?
          <NuxtLink to="/contactUs" class="underline text-[#dec8ab]">Contact Us</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Image section -->
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
const mobileNumber = ref('')
const password = ref('')
const showPassword = ref(false)

definePageMeta({
  layout: "auth"
})

const formData = ref({
  phone: '',
  country: null,
});
</script>