<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 1 → 2 → 3 → 4 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch md:place-items-center">

      <!-- Card 1 -->
      <div class="w-full md:max-w-[320px] overflow-hidden rounded-lg bg-white">
        <img
          src="/assets/images/1.png"
          class="w-full object-cover rounded-t-lg
                 h-64 sm:h-72 md:h-[190px] lg:h-[200px]"
          alt="Accessories rental"
        />
        <div class="px-3 py-2">
          <h2 class="font-semibold text-lg my-2">Accessories rental</h2>
          <p class="text-black/50">
            The ideal way to achieve elegance and distinction for every occasion. We offer you
            a collection that suits all tastes and occasions
          </p>
        </div>
        <!-- زر الواتساب: فول-ويدث على الموبايل، طبيعي على التابلت/الديسكتوب -->
        <div class="px-3 pb-3 wa-btn">
          <WhatsappButton />
        </div>
      </div>

      <!-- Card 2 -->
      <div class="w-full md:max-w-[320px] overflow-hidden rounded-lg bg-white">
        <img
          src="/assets/images/2.png"
          class="w-full object-cover rounded-t-lg
                 h-64 sm:h-72 md:h-[190px] lg:h-[200px]"
          alt="Bag rental"
        />
        <div class="px-3 py-2">
          <h2 class="font-semibold text-lg my-2">Bag rental</h2>
          <p class="text-black/50">
            The smart and economical solution for all women who seek elegance and versatility
            for all occasions, whether for luxurious
          </p>
        </div>
        <div class="px-3 pb-3 wa-btn">
          <WhatsappButton />
        </div>
      </div>

      <!-- Card 3 -->
      <div class="w-full md:max-w-[320px] overflow-hidden rounded-lg bg-white">
        <img
          src="/assets/images/3.jpg"
          class="w-full object-cover rounded-t-lg
                 h-64 sm:h-72 md:h-[190px] lg:h-[200px]"
          alt="Rent dresses"
        />
        <div class="px-3 py-2">
          <h2 class="font-semibold text-lg my-2">Rent dresses</h2>
          <p class="text-black/50">
            A service that allows customers to rent the perfect dresses for all their occasions,
            whether weddings, evening allows customers to rent
          </p>
        </div>
        <div class="px-3 pb-3 wa-btn">
          <WhatsappButton />
        </div>
      </div>

      <!-- Card 4 -->
      <div class="w-full md:max-w-[320px] overflow-hidden rounded-lg bg-white">
        <img
          src="/assets/images/4.jpg"
          class="w-full object-cover rounded-t-lg
                 h-64 sm:h-72 md:h-[190px] lg:h-[200px]"
          alt="Shoes Rent"
        />
        <div class="px-3 py-2">
          <h2 class="font-semibold text-lg my-2">Shoes Rent</h2>
          <p class="text-black/50">
            The smart and comfortable solution for all people who are looking for elegance and comfort
            for every occasion without
          </p>
        </div>
        <div class="px-3 pb-3 wa-btn">
          <WhatsappButton />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import WhatsappButton from '~/components/auth/WhatsappButton.vue'
</script>

<style scoped>
/* زر الواتساب: فول-ويدث على الموبايل + توسيط الأيقونة والنص */
.wa-btn :deep(button),
.wa-btn :deep(a),
.wa-btn :deep(.btn),
.wa-btn :deep(.p-button) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  width: 100% !important;          /* موبايل: عرض كامل */
  padding: 0.75rem 1rem !important;
  line-height: 1.25 !important;
  text-align: center !important;
}

/* توحيد حجم الأيقونة داخل الزر */
.wa-btn :deep(i),
.wa-btn :deep(svg),
.wa-btn :deep(img) {
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  vertical-align: middle;
}

/* من أول التابلت: عرض طبيعي ومتوسّط */
@media (min-width: 768px) {
  .wa-btn :deep(button),
  .wa-btn :deep(a),
  .wa-btn :deep(.btn),
  .wa-btn :deep(.p-button) {
    width: auto !important;
    min-width: 220px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
