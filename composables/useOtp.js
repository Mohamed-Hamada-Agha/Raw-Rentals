// composables/useOtp.js
export const useOtp = () => {
  // البيانات
  const digits = ref(['', '', '', ''])
  const isLoading = ref(false)
  const error = ref('')
  
  // computed properties
  const isComplete = computed(() => {
    return digits.value.every(digit => digit !== '')
  })
  
  const otpCode = computed(() => {
    return digits.value.join('')
  })
  
  // الدوال
  const handleInput = (index, value) => {
    // نأخذ الرقم فقط
    const digit = value.replace(/\D/g, '').slice(0, 1)
    digits.value[index] = digit
    
    // انتقل للحقل التالي إذا تم إدخال رقم
    if (digit && index < 3) {
      // هنا سنضيف الانتقال للحقل التالي لاحقاً
    }
  }
  
  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && !digits.value[index] && index > 0) {
      // ارجع للحقل السابق
    }
  }
  
  const verifyOtp = async () => {
    if (!isComplete.value) return
    
    isLoading.value = true
    error.value = ''
    
    try {
      // محاكاة الاتصال بالخادم
      const response = await $fetch('/api/verify-otp', {
        method: 'POST',
        body: { code: otpCode.value }
      })
      
      return response.success
    } catch (err) {
      error.value = 'رمز التحقق غير صحيح'
      return false
    } finally {
      isLoading.value = false
    }
  }
  
  const resetOtp = () => {
    digits.value = ['', '', '', '']
    error.value = ''
  }
  
  // نرجع كل ما نريد استخدامه
  return {
    // البيانات
    digits,
    isLoading,
    error,
    
    // computed
    isComplete,
    otpCode,
    
    // الدوال
    handleInput,
    handleBackspace,
    verifyOtp,
    resetOtp
  }
}