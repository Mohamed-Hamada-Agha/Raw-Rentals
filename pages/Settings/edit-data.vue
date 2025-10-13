<template>
  <div class="bg-white mx-10">
    <div class="m-2 p-2">
        <img src="/assets/images/Ellipse 6.png" alt="" class=" object-contain w-[100px] h-[100px]">
    </div>
    <div class="grid grid-cols-2 m-2">
      <div class="p-2 m-2">
        <p class="px-3 text-lg">الاسم</p>
      <input type="text" placeholder="ادخل السم" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
      </div>
      <div class="p-2 m-2">
        <p class="px-3 text-lg">الجول</p>
      <input type="text" placeholder="123 456 789 966+" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
      </div>
      <div class="p-2 m-2">
        <p class="px-3 text-lg">السجل التجاري</p>
      <input type="text" placeholder="رقم السجل التجاري" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
      </div>
      <div class="p-2 m-2">
        <p class="px-3 text-lg">الهوية</p>
      <input type="text" placeholder="رقم الهوية" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
      </div>
      <div class="p-2 m-2">
        <p class="px-3 text-lg">البريد الإلكتروني</p>
      <input type="text" placeholder="رقم البريد الإلكتروني" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
      </div> 
    </div>
    <div class="flex justify-center ml-10 ">
        <NuxtLink to="/Settings">
          <button class="w-[250px] p-3 bg-yellow-500 hover:bg-yellow-600  text-lg rounded-lg mb-16">تأكيد</button>
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>
