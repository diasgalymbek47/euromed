<script setup>
import WelcomeImage from '@/assets/images/welcome.jpg'
import Card from '@/components/Card.vue'
</script>

<template>
  <div class="container mx-auto relative mt-4">
    <img :src="WelcomeImage" class="w-full h-full absolute top-0 left-0 z-[-1] object-cover">
    <div class="content p-8 max-md:px-2 max-md:py-4">
      <h1 class="text-3xl max-sm:text-2xl mb-4 flex gap-2 items-center">
        Добро пожаловать на
        <span class="text-4xl max-sm:text-3xl font-bold text-[#32b0d6]">EURO</span>
        <span class="text-4xl max-sm:text-3xl font-bold text-[#e73f7b]">MED</span>
      </h1>
      <p class="text-lg max-w-96">Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
      <div class="mt-10 flex max-lg:flex-wrap gap-8 max-md:gap-4">
        <Card title="Корпоративные волонтерские услуги" icon="analytics"/>
        <Card title="Гарантия лечения" icon="check"/>
        <Card title="Быстрый результат" icon="trending_up"/>
      </div>
    </div>
  </div>
</template>