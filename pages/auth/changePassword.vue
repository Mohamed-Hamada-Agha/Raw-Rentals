<template>
  <div class="flex font-sans">
    <!-- form section -->
    <div class="flex mt-56 justify-center pl-16 px-8 w-[800px] bg-white">
      <div class="w-full m-8">
        <h1 class="text-4xl text-center font-semibold mb-10 text-black">Change Password</h1>
        <h2 class="text-xl text-center font-thin mb-10 text-black">Please enter your mobile number to receive a verification code</h2>

        <form @submit.prevent="handleLogin">
          <!-- Mobile Number -->
          <form @submit.prevent="handleSubmit">
            <CountryPhoneInput v-model="formData" />
          </form>
      

          <!-- login button -->
          <div class="flex justify-center items-center">
          <NuxtLink to=""
          type="submit"
          class=" text-center w-[250px] p-3 text-xl font-semibold text-black bg-[#dec8ab] rounded-lg m-12"
         >
          send
         </NuxtLink>
          </div>
        </form>

        <!-- contact -->
        <div class="text-center text-md text-gray-600 mt-24">
          Having problems signing up?
          <NuxtLink to="/contactUs" class="underline text-[#dec8ab]">Contact Us</NuxtLink>
        </div>
      </div>
    </div>

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