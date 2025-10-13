<template>
  <div class="w-full bg-[#f2f2f2]">
    <h1 class="text-2xl p-8 text-center ">contact Us</h1>
  <form class="bg-white grid grid-cols-2 gap-6 rounded-lg mx-28 border mb-8 border-[#d2b895] p-6">
    <div class="flex flex-col gap-4">
      <div>
        <label class="block mb-1 text-lg">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          class="border border-[#cfcfcf] text-lg p-2 w-full rounded-md bg-white"
        />
      </div>
      <div>
        <label class="block mb-1 text-lg">Message Subject</label>
        <input
          type="text"
          placeholder="Enter Message Subject"
          class="border border-[#cfcfcf] text-lg p-2 w-full rounded-md bg-white"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      
      <form @submit.prevent="handleSubmit">
        <CountryPhoneInput v-model="formData" class="" />
        </form>
      <div>
        <label class="block  text-lg">Message</label>
        <textarea
          placeholder="Write Your Message"
          rows="5"
          class=" border border-[#cfcfcf] text-lg p-2 w-full rounded-md bg-white"></textarea>
      </div>
    </div>
  </form>

     <div class="flex justify-center items-center gap-4  p-4">
        <WhatsappButton  class="p-3"/>
      <button @click="navigateTo('/contactUs')" class="p-3 bg-[#dec8ab] font-semibold w-[300px] rounded-lg">Send</button>
     </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import CountryPhoneInput from '~/components/auth/CountryPhoneInput.vue'
import WhatsappButton from '~/components/auth/WhatsappButton.vue';
const mobileNumber = ref('')

const formData = ref({
  phone: '',
  country: null,
});
</script>
<style scoped>

</style>
