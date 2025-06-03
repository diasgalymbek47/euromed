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
    <h1 class="mt-8 p-4 head">Результаты операции
      <span class="font-bold text-[#32b0d6]">ДО</span>
      и
      <span class="font-bold text-[#e73f7b]">ПОСЛЕ</span>
    </h1>
  </div>
  <Slider :items="images"/>
</template>