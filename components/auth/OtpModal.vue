<template>
     <div
      v-show="props.show" dir="ltr"
      class="fixed inset-0 z-50 grid place-items-center"
      role="dialog"
      aria-modal="true"
    >
      <!-- الخلفية الشفافة -->
      <div class="absolute inset-0 bg-black/40" @click="closeModal"></div>
      <!-- رسالة التحقق -->
      <div class="relative z-10 w-full max-w-lg px-4">
        <div class="bg-white flex flex-col items-center justify-center rounded-xl p-4">
          <!-- الجزء العلوي: كود التفعيل وعلامة X -->
          <div class="w-full max-w-md flex justify-start items-center mb-2">
            <h2 class="text-xl text-center  w-full">كود التفعيل</h2>
            <button 
              @click="navigateTo('/Settings')" 
              class="bg-red-500 text-white rounded-full hover:opacity-90 p-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- الخط الفاصل -->
          <div class="w-full max-w-lg h-px bg-gray-400 mb-6"></div>
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            class="w-32 h-32 mb-6 object-contain"
          />
          <h3 class="text-2xl font-medium mb-1">كود التفعيل</h3>
          <p class="text-gray-500 text-lg mb-6">يرجي إدخال كود التفعيل</p>
          <!-- OTP مربعات  -->
          <div class="flex justify-center gap-4 mb-8">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              type="text"
              v-model="otp[index]"
              @input="handleInput(index, $event)"
              @keydown.delete="handleBackspace(index, $event)"
              maxlength="1"
              ref="otpInputs"
              class="w-16 h-16 text-2xl text-center border-2 border-gray-700 rounded-lg bg-white"
            />
          </div>
          <!-- زر التفعيل الأصفر -->
          <NuxtLink to="/"
            @click="handleSubmit"
            :disabled="isLoading || !isOtpComplete"
            class="w-44 max-w-lg py-3 bg-yellow-400 hover:bg-yellow-600 text-black text-xl
              rounded-lg transition text-center">
            {{ isLoading ? 'جاري التفعيل...' : 'تأكيد' }}
           </NuxtLink>
        </div> 
      </div>
    </div>
  </template>
  

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  code: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close', 'verified'])

const otp = ref(['', '', '', ''])
const otpInputs = ref([])
const isLoading = ref(false)

const isOtpComplete = computed(() => otp.value.every(d => d !== ''))

const handleInput = (index, event) => {
  const value = (event.target.value || '').replace(/\D/g, '').slice(0, 1)
  otp.value[index] = value
  if (value && index < otp.value.length - 1) {
    otpInputs.value[index + 1]?.focus()
  } 
}
const handleBackspace = (index, event) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
}

const handleSubmit = () => {
  if (!isOtpComplete.value) return;
  const enteredCode = otp.value.join('');
  if (enteredCode === props.code) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      emit('verified');
    }, 600);
  } 
};

watch(() => props.show, (newVal) => {
  if (newVal) {
    otp.value = ['', '', '', '']
    requestAnimationFrame(() => {
      const inputs = otpInputs.value
      if (inputs && inputs[0] && typeof inputs[0].focus === 'function') inputs[0].focus()
    })
  }
})
</script>