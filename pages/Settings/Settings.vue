<template>
    <div class="m-6">
     <h2 class="p-2 mx-8  text-2xl">الإعدادات</h2>
     <div class="p-2 mx-8 mb-6 navLink_">
       <NuxtLink to="/Settings" class="bg-white rounded-md p-3 ml-6 " >
        عرض بيانات الملف الشخصي
        </NuxtLink>
        <NuxtLink to="/Settings/edit-data" class="bg-white rounded-md p-3 ml-6">
         تعديل البيانات
        </NuxtLink>
       <button 
          id="loginBtn"
          @click.prevent="sendVerificationCode" 
          class="bg-white rounded-md p-3 " active-class="!bg-[#F5BE1C]">تغير رقم الجوال</button>  
     </div>
     <div>
        <LoginForm @submit="handleLogin" />
        
        <OtpModal 
          v-if="showVerifyModal"
          :is-loading="isLoading"  :error-message="error"   @input-change="handleInput"
         @verify-click="verifyOtp"     @verified="handleOtpVerified"
        />
    </div>
    
     <NuxtPage />
     </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import OtpModal from '~/components/auth/OtpModal.vue'
import { useOtp } from '~/composables/useOtp'

const showVerifyModal = ref(false);
const showSuccessDialog = () => {
  showVerifyModal.value = false;
   navigateTo('/');
};

const sendVerificationCode = () => {
  showVerifyModal.value = true;
};
// الدالة المسؤلة عن تسجيل الدخول
const handleSubmit = () => {
  //  OTPModel ظهور ال 
  showVerifyModal.value = true;
};
const {  digits, isLoading, error,  isComplete, otpCode, handleInput, handleBackspace, verifyOtp, resetOtp} = useOtp()
</script>
<style>
.navLink_ .router-link-exact-active{
  background-color: #F5BE1C;
}
</style>