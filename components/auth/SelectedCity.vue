<template>
    <div class="mb-6 ">
      <label for="mobile" class="block text-md font-semibold text-black pb-2">City</label>
  <div class="relative flex items-center selectparent border border-gray-200 rounded-lg">
    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="selected city"
     class="w-full p-1 bg-transparent text-black/50" />
  </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<style scoped>
  :deep(.selectparent) {
    --p-form-field-background: #fff;
    --p-form-field-color: #111827;  
    --p-content-border-color: #e5e7eb;     
  }
</style>