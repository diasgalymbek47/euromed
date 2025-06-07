<script setup>
import WelcomeImage from '@/assets/images/welcome.jpg'
import Card from '@/components/Card.vue'
</script>

<template>
  <div class="container mx-auto relative mt-4 rounded-lg overflow-hidden">
    <img :src="WelcomeImage" class="w-full h-full absolute top-0 left-0 z-[-1] object-cover">
    <div class="content p-8 max-md:px-2 max-md:py-4">
      <h1 class="text-3xl text-shadow-white font-medium max-sm:text-xl mb-4 max-sm:px-2 inline-flex flex-wrap gap-2 items-center">
        Добро пожаловать на
        <div class="flex flex-wrap items-center justify-center gap-2">
          <span class="text-4xl max-sm:text-2xl font-bold text-[#32b0d6]">EURO</span>
          <span class="text-4xl max-sm:text-2xl font-bold text-[#e73f7b]">MED</span>
        </div>
      </h1>
      <p class="sm:text-xl text-[16px] max-sm:px-2 max-w-[768px] text-shadow-white">Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      <div class="mt-10 flex max-lg:flex-wrap gap-8 max-md:gap-4">
        <Card title="Корпоративные услуги" icon="analytics"/>
        <Card title="Гарантия лечения" icon="check"/>
      </div>
    </div>
  </div>
</template>