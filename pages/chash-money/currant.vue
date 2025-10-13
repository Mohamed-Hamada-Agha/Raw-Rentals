<template>
    <div class="mx-4">
     <h2 class="p-2 m-2  text-2xl">المعاملات المالية</h2>
      <div class="p-2">
       <NuxtLink to="/chash-money" @click="opendialog1()" class="bg-white w-[120px] rounded-md p-3 m-2">
          المستحقة 
        </NuxtLink>
        <NuxtLink to="/chash-money/currant" @click="opendialog2()" class="bg-white w-[120px] rounded-md p-3 m-2" active-class="!bg-[#F5BE1C]">
          تسوية حالية
        </NuxtLink>
        <NuxtLink to="/chash-money/fineshed" @click="opendialog3()" class="bg-white w-[120px] rounded-md p-3 m-2">
         تسوية منتهية
        </NuxtLink>
     </div>
    <!-- تسوية حالية -->
    <div class="bg-white rounded-lg p-4 ml-16 mt-4">
    <table class="w-full p-4 text-center">
      <thead>
        <tr>
          <th class="p-3 ">رقم الطلب</th>
          <th class="p-3 ">اسم العميل</th>
          <th class="p-3 ">اسم السيارة</th>
          <th class="p-3 ">تاريخ الطلب</th>
        </tr>
      </thead>
      <tbody >
          <tr v-for="item in cars" :key="item.cars">
            <td class="flex items-center justify-center gap-2 p-2 m-1"> {{ item.num }} </td>
            <td> {{ item.name }} </td>
            <td> {{ item.model }} </td>
            <td> {{ item.date }} </td>
          </tr>
      </tbody>
    </table>
    </div>
    </div> 

</template>

<script setup>
  const showDialog1 = ref(false);
  const showDialog2 = ref(false);
  const showDialog3 = ref(false);

  const openDialog1 = () => {
   showDialog1.value = true    
}

const openDialog2 = () => {
    showDialog2.value = true    
}

const openDialog3 = () => {
    showDialog3.value = true    
}

const cars = ref([
  {
    num : '1488',
    name : "أحمد عطية",
    model : "هوندا سيفيك 2020",
    date : "1/9/2024",
  },
  {
    num : '1487',
    name : "محمد رمضان",
    model : "تيوتا فورتنر 2024",
    date : "26/12/2018",
  },
  {
    num : '1486',
    name : "أشرف على",
    model : "فورد تيريتوري 2024",
    date : "15/11/2021",
  },
  {
    num : '1485',
    name : "زياد ياسر",
    model : "سبورتاج 2024",
    date : "21/8/2025",
  },
]);
</script>
