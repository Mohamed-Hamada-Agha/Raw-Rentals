<template>
  <div class="top-12 left-6 flex items-center justify-center rounded-md">
    <InputGroup>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="code"
        placeholder="English"
        dir="rtl"
        class="w-40 md:w-56 bg-white rounded-lg"
        panelClass="custom-lang-panel"
      />
    </InputGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedCity = ref(null)
const cities = ref([
  { code: 'العربية' },
  { code: 'English' },
])
</script>

<style>
.custom-lang-panel {
  width: 150px !important;        
  background: #fff !important;    
  border-radius: 0.5rem !important; 
  z-index: 9999 !important;
  padding: 10px;
  margin: 8px;
}
</style>
