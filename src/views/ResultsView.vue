<script setup>
import Slider from "@/components/Slider.vue";
import image1 from '@/assets/images/image_1_result.webp';
import image2 from '@/assets/images/image_2_result.webp';
import image3 from '@/assets/images/image_3_result.webp';
import image4 from '@/assets/images/image_4_result.webp';
import image5 from '@/assets/images/image_5_result.webp';

const images = [image1, image2, image3, image4, image5];
</script>

<template>
  <div class="container mx-auto">
    <h1 class="mt-8 p-4 bg-[#eee] font-medium text-2xl max-lg:text-xl max-sm:text-[16px]">Результаты операции до и после</h1>
  </div>
  <Slider :items="images"/>
</template>