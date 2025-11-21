<template>
  <div class="flex flex-col  min-h-screen">  
  <OccasionCarousel />
  <!-- فساتين للمناسبات -->
  <div class="mx-28">
  <div class="mx-4 md:mx-10 lg:mx-28 p-4">
  <h1 class="text-center text-3xl font-extrabold mb-4">Dress for Occasion</h1>

  <!-- Grid layout for different screen sizes -->
  <div
    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center"
  >
    <!-- Wedding -->
    <div class="flex flex-col items-center justify-center bg-[#dec8ab80] w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-lg">
      <img src="/assets/images/Occasion-1.png" alt="" class="w-[70px] object-contain mb-2">
      <h2 class="text-lg">Wedding</h2>
    </div>

    <!-- Birthday -->
    <div class="flex flex-col items-center justify-center bg-[#dec8ab80] w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-lg">
      <img src="/assets/images/Occasion-2.png" alt="" class="w-[70px] object-contain mb-2">
      <h2 class="text-lg">Birthday</h2>
    </div>

    <!-- Evening -->
    <div class="flex flex-col items-center justify-center bg-[#dec8ab80] w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-lg">
      <img src="/assets/images/Occasion-3.png" alt="" class="w-[70px] object-contain mb-2">
      <h2 class="text-lg">Evening</h2>
    </div>

    <!-- Daily -->
    <div class="flex flex-col items-center justify-center bg-[#dec8ab80] w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-lg">
      <img src="/assets/images/Occasion-4.png" alt="" class="w-[70px] object-contain mb-2">
      <h2 class="text-lg">Daily</h2>
    </div>

    <!-- Engagement -->
    <div class="flex flex-col items-center justify-center bg-[#dec8ab80] w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] rounded-lg">
      <img src="/assets/images/Occasion-5.png" alt="" class="w-[70px] object-contain mb-2">
      <h2 class="text-lg">Engagement</h2>
    </div>
  </div>
  </div>


     <!-- أحدث المنتجات -->
<div class="mb-32">
  <h1 class="px-4 font-semibold text-3xl">Latest Products</h1>

  <!-- 1 ⟶ 2 ⟶ 3 ⟶ 4 -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    <!-- Card 1 -->
    <div class="overflow-hidden rounded-lg">
      <img src="/assets/images/5.jpg" class="w-full aspect-[3/4] object-cover rounded-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg my-2">Desiree Black</h2>
        <p class="text-black/50">Officia sint sunt se</p>
      </div>
      <div class="flex items-end justify-between gap-3 px-3 pb-2">
        <p class="font-semibold text-lg">442.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="overflow-hidden rounded-lg">
      <img src="/assets/images/6.png" class="w-full aspect-[3/4] object-cover rounded-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg my-2">Desiree Black</h2>
        <p class="text-black/50">Officia sint sunt se</p>
      </div>
      <div class="flex items-end justify-between gap-3 px-3 pb-2">
        <p class="font-semibold text-lg">442.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="overflow-hidden rounded-lg">
      <img src="/assets/images/7.png" class="w-full aspect-[3/4] object-cover rounded-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg my-2">Desiree Black</h2>
        <p class="text-black/50">Officia sint sunt se</p>
      </div>
      <div class="flex items-end justify-between gap-3 px-3 pb-2">
        <p class="font-semibold text-lg">442.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="overflow-hidden rounded-lg">
      <img src="/assets/images/5.jpg" class="w-full aspect-[3/4] object-cover rounded-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg my-2">Desiree Black</h2>
        <p class="text-black/50">Officia sint sunt se</p>
      </div>
      <div class="flex items-end justify-between gap-3 px-3 pb-2">
        <p class="font-semibold text-lg">442.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>
  </div>
</div>

    <!-- يمكنك التواصل معنا عبر -->
    <div class="border border-[#dec8ab] bg-[#fcf9f6] rounded-lg m-4">
      <h1 class="text-3xl font-semibold text-center p-4">You can reach us via</h1>
    <div class="flex flex-wrap justify-center items-center p-4  ">
        <ul class="flex space-x-3"> 
            <li>
                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"
                class="flex justify-center rounded-sm bg-white w-[70px] aspect-square">
                <img src="https://backend.rawrentals.org/public/storage/images/socials/1715670978_1176.png"
                class="w-full aspect-square object-contain h-full overflow-hidden ">
                </a>
            </li>
            <li>
                <a href="https://www.whatsapp.com" rel="noopener noreferrer" target="_blank"
                class="flex justify-center rounded-sm bg-white w-[70px] aspect-square">
                <img src="https://backend.rawrentals.org/public/storage/images/socials/1714561234_1552.png"
                class="w-full aspect-square object-contain h-full overflow-hidden ">
                </a>
            </li>
            <li>
                <a href="http://www.telegram.org" rel="noopener noreferrer" target="_blank"
                class="flex justify-center rounded-sm bg-white w-[70px] aspect-square">
                <img src="https://backend.rawrentals.org/public/storage/images/socials/1714561054_3336.png" 
                class="w-full aspect-square object-contain h-full overflow-hidden "></a>
            </li>
            <li>
                <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"
                class="flex justify-center rounded-sm bg-white w-[70px] aspect-square">
                <img src="https://backend.rawrentals.org/public/storage/images/socials/1714560263_2345.png" 
                class="w-full aspect-square object-contain h-full overflow-hidden "></a>
            </li>
        </ul>
    </div>
    </div>
    <!-- العروض -->
   <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
  <div class="flex items-center justify-between">
    <h1 class="py-4 font-semibold text-2xl md:text-3xl">Offers</h1>
    <a href="/en/offers" class="text-black/60 text-sm md:text-lg underline">Show More</a>
  </div>

  <!-- 1 → 2 → 3 → 4 -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
    <!-- Card -->
    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded">15%</span>
      <img src="/assets/images/o1.png" class="w-full aspect-[3/4] object-cover rounded-t-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1 min-h-[2.75rem]">Comfortable and elegant dress</h2>
        <p class="text-black/50 text-sm">The dress features an elegant and simple cut, showing the natural beauty of the bride</p>
      </div>
      <s class="text-black/50 px-3 text-sm">1000.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">700.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded">37%</span>
      <img src="/assets/images/o2.png" class="w-full aspect-[3/4] object-cover rounded-t-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1 min-h-[2.75rem]">LV Iconic Louisa necklace</h2>
        <p class="text-black/50 text-sm">Elegant gold necklace</p>
      </div>
      <s class="text-black/50 px-3 text-sm">900.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">567.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded">25%</span>
      <img src="/assets/images/o3.png" class="w-full aspect-[3/4] object-cover rounded-t-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1 min-h-[2.75rem]">D-FUSION RING</h2>
        <p class="text-black/50 text-sm">Gold-Finish Metal with a White Resin Pearl and Silver-Tone Crystals</p>
      </div>
      <s class="text-black/50 px-3 text-sm">500.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">364.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded">30%</span>
      <img src="/assets/images/o4.png" class="w-full aspect-[3/4] object-cover rounded-t-lg">
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1 min-h-[2.75rem]">Silk satin dress</h2>
        <p class="text-black/50 text-sm">Satin georgette in black</p>
      </div>
      <s class="text-black/50 px-3 text-sm">000.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">420.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>
  </div>
</div>

  <!-- المنتجات الاكثر طلبا -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <div class="flex items-center justify-between">
    <h1 class="py-4 font-semibold text-2xl md:text-3xl">Most Requested Products</h1>
    <a href="/en/offers" class="text-black/60 text-sm md:text-lg underline">Show More</a>
  </div>

  <!-- 1 ⟶ 2 ⟶ 3 ⟶ 4 -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="discount-badge">30%</span>
      <img src="/assets/images/mr1.png" class="w-full aspect-[3/4] object-cover" />
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1">Mini Dior bag or Lady Dior bag</h2>
        <p class="text-black/50 text-sm">Gold-colored diamond jacquard with metallic thread</p>
      </div>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">900.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <img src="/assets/images/o1.png" class="w-full aspect-[3/4] object-cover" />
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1">Comfortable and elegant dress</h2>
        <p class="text-black/50 text-sm">The dress features an elegant and simple cut, showing the natural beauty of the bride</p>
      </div>
      <s class="text-black/50 px-3 text-sm">1000.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">700.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <span class="discount-badge">25%</span>
      <img src="/assets/images/o2.png" class="w-full aspect-[3/4] object-cover" />
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1">LV Iconic Louisa necklace</h2>
        <p class="text-black/50 text-sm">Elegant gold necklace</p>
      </div>
      <s class="text-black/50 px-3 text-sm">900.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">567.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg bg-white">
      <img src="/assets/images/7.png" class="w-full aspect-[3/4] object-cover" />
      <div class="px-3 py-2">
        <h2 class="font-semibold text-lg pb-1">Silk satin dress</h2>
        <p class="text-black/50 text-sm">Satin georgette in black The dress features an elegant and simple cut, showing</p>
      </div>
      <s class="text-black/50 px-3 text-sm">000.00 SAR</s>
      <div class="flex items-end justify-between gap-3 px-3 pb-3">
        <p class="font-semibold text-xl">420.00 SAR</p>
        <a href="/en/product-158" class="p-button p-0"><i class="pi pi-shopping-bag"></i> Add to Cart</a>
      </div>
    </div>
  </div>
</div>

    <div class="p-4 mb-16">
      <h1 class="py-4 font-semibold text-3xl">Services </h1>
      <Services />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import OccasionCarousel from '~/components/layout/OccasionCarousel.vue';
import Services from '~/components/layout/Services.vue';
</script>

<style>
.p-button {
    align-items: center;
    background-color: transparent;
    color: #dec8ab;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: flex-start;
}
.discount-badge {
    background-color: #fff;
    border-end-end-radius: 6px;
    border-start-end-radius: 6px;
    inset-block-start: 65px;
    inset-inline-start: 0;
    padding: 10px 15px;
    position: absolute;
    font-weight: bolder;
    font-size: larger;
}
</style>