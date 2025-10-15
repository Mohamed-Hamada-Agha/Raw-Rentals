<template>
  <div class="top-12 left-6 flex items-center justify-center rounded-md">
    <InputGroup>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="code"
        placeholder="English"
        class=" w-40 md:w-56  text-lg bg-white rounded-lg border border-gray-200"
        panelClass="custom-lang-panel "
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

<style scoped>
:global(.custom-lang-panel) {
  width: 180px ;        
  background-color: white !important;
  border-radius: 20px ; 
  z-index: 9999 !important;
  padding: 10px;
  margin: 2px;
}
</style>
