<template>
        <div class="mb-6 ">
            <label for="mobile" class="block text-md font-semibold text-black">City</label>
            <div class="relative flex items-center selectparent border border-gray-200 ">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" class="w-full p-2 bg-white" />
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
