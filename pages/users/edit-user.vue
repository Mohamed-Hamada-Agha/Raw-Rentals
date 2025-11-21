<template>
    <div class="pl-8 mx-8">
     <h2 class="text-2xl p-4 my-4  ">تعديل مستخدم</h2>
     <div class="bg-white p-2 m-4">
        <h2 class="  text-lg">بيانات المستخدم</h2>
        <img src="/assets/images/6.png" alt="صورة المستخدم" class="w-[120px] h-[120px] object-contain ml-8">
        <div class="p-2">
        <p class="text-lg">الجوال</p>
        <input type="text" placeholder="أدخل رقم الجوال"  class="p-3 border border-black w-[360px] rounded-md mb-2 bg-white">
        <p class="text-lg">الاسم</p>
        <input type="text" placeholder="أدخل الاسم"  class="p-3 border border-black w-[360px] rounded-md bg-white">
     </div>
     </div>
     <div class="bg-white p-2 m-4">
        <h2 class="text-lg  py-2">الصلاحيات</h2>
     <div class=" flex justify-between">
      <div class="card my-4">
        <Checkbox v-model="checked" binary />
        <label for="ingredient1" class="text-black/80 p-1 ">سياراتي</label>
     </div>
      <div class="card my-4">
        <Checkbox v-model="checked" binary />
        <label for="ingredient1" class="text-black/80 p-1">طلباتي</label>
     </div>
      <div class="card my-4">
        <Checkbox v-model="checked" binary  class=" bg-white"/>
        <label for="ingredient1" class="text-black/80 p-1 ml-[250px]">المعاملات المالية</label>
     </div>
     </div>
     </div>
    <NuxtLink to="/users" class="flex justify-center">
     <div class="flex justify-center bg-yellow-400 p-3 m-2 w-[250px] rounded-lg text-lg ">
          تعديل
     </div>
    </NuxtLink>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from 'primevue/checkbox'; 
import CheckboxGroup from 'primevue/checkboxgroup';
import { label } from "@primeuix/themes/aura/metergroup";

const checked = ref(true);

</script>
<style>
 .card {
   background-color: white;
 }
</style>
