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
          <div class="flex justify-center">
          <NuxtLink to=""
          type="submit"
          class=" text-center w-[250px] p-3 text-xl font-semibold text-black bg-[#dec8ab] rounded-lg mb-6"
         >
          send
         </NuxtLink>
          </div>
        </form>

        <!-- contact -->
        <div class="text-center text-md text-gray-600 mt-32">
          Having problems signing up?
          <NuxtLink to="/contactUs" class="underline hover:text-black">Contact Us</NuxtLink>
        </div>
      </div>
    </div>

    <!-- image section -->
    <div class="col-md-6 d-flex flex-column justify-center w-[650px] h-full object-cover">
      <div class=" relative w-[95%]">
        <img
        src="/assets//images/auth-img.png"
        alt="Clothing rack"
        class="my-16 mr-16 rounded-[3.1vw]"
      />
      </div>
    </div>
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