<template>
    <div class="grid grid-cols-4 gap-6  ">
     <div class=" overflow-hidden border-none rounded-lg">
        <img src="/assets/images/1.png" class="w-[300px] h-[200px] object-cover">
        <div class="pr-16 py-2 ml-2">
            <h2 class=" font-semibold text-lg my-2">Accessories rental</h2>
            <p class=" text-black/50">The ideal way to achieve elegance and distinction for every occasion. We offer you
               a collection that suits all tastes and occasions
            </p>
        </div>
         <WhatsappButton />
     </div>
     <div class=" overflow-hidden border-none rounded-lg">
        <img src="/assets/images/2.png" class="w-[300px] h-[200px] object-cover">
        <div class="pr-16 py-2 ml-2">
            <h2 class=" font-semibold text-lg my-2">Bag rental</h2>
            <p class=" text-black/50">The smart and economical solution for all women who seek elegance and versatility
               for all occasions, whether for luxurious 
            </p>
        </div>
        <WhatsappButton />
     </div>
     <div class=" overflow-hidden border-none rounded-lg">
        <img src="/assets/images/3.jpg" class="w-[300px] h-[200px] object-cover">
        <div class="pr-16 py-2 ml-2">
            <h2 class=" font-semibold text-lg my-2">Rent dresses</h2>
            <p class=" text-black/50">A service that allows customers to rent the perfect dresses for 
              all their occasions, whether weddings, evening 
            </p>
        </div>
        <WhatsappButton />
     </div>
     <div class=" overflow-hidden border-none rounded-lg">
        <img src="/assets/images/4.jpg" class="w-[300px] h-[200px] object-cover">
        <div class="pr-16 py-2 ml-2">
            <h2 class=" font-semibold text-lg my-2">Shoes Rent</h2>
            <p class=" text-black/50">The smart and comfortable solution 
              for all people who are looking for elegance and comfort for every occasion without
            </p>
        </div>
        <WhatsappButton />
     </div>
  
    </div>
</template>

<script setup>
import WhatsappButton from '~/components/auth/WhatsappButton.vue';
</script>

<style scoped>
:deep(.btn-Icon) {
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: #000;
  border-radius: 3px;
  color: #dec8ab;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: center;
  width: 22px;
}
</style>