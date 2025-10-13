<template>
  <div class="w-full h-[350px] relative overflow-hidden bg-gray-900">
    <!-- Slides Container -->
    <div class="relative w-full h-full">
      <!-- الصور -->
      <div 
        v-for="(occasion, index) in occasions" 
        :key="index"
        :class="[
          'absolute inset-0 w-full h-full transition-all duration-700 ease-in-out',
          currentIndex === index 
            ? 'translate-x-0 opacity-100' 
            : index < currentIndex 
              ? '-translate-x-full opacity-0'
              : 'translate-x-full opacity-0'
        ]"
      >
        <img 
          :src="occasion.image" 
          :alt="occasion.title"
          class="w-full h-full object-cover"
        />
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex">
          <div class="p-6 md:p-10 w-full flex items-center justify-center flex-col">
            <h3 class="text-white text-3xl  md:text-5xl font-bold mb-2">
              {{ occasion.title }}
            </h3>
            <p class="text-white/90 text-lg  md:text-xl">
              {{ occasion.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <!-- <button 
      @click="prevSlide"
      class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:scale-110 z-10"
      aria-label="Previous"
    >
      <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg hover:scale-110 z-10"
      aria-label="Next"
    >
      <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button> -->

    <!-- Dots Indicators -->
    <!-- <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(occasion, index) in occasions"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'transition-all duration-300 rounded-full',
          currentIndex === index 
            ? 'w-10 h-2.5 bg-white' 
            : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/90'
        ]"
        :aria-label="`Slide ${index + 1}`"
      />
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const occasions = ref([
  {
    title: 'Wedding',
    description: 'Elegant accessories for your special day',
    image: '/images/101.jpg'
  },
  {
    title: 'Dolorem',
    description: 'ipsa quaera Nemo odit quam labor',
    image: '/images/102.jpg'
  },
  {
    title: 'Party',
    description: 'Glamorous pieces for unforgettable nights',
    image: '/images/103.png'
  },
  {
    title: 'Engagement',
    description: 'Celebrate your love in style',
    image: '/images/104.jpg'
  },
  {
    title: 'Graduation',
    description: 'Mark your achievement with elegance',
    image: '/images/105.jpg'
  }
]);

const currentIndex = ref(0);
const totalSlides = occasions.value.length;
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? totalSlides - 1 
    : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // كل 3 ثواني
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>