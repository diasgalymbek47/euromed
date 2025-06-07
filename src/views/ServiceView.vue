<script setup>
import icon from '@/assets/images/service-bg.jpg'
</script>

<template>
  <div class="service-view container mx-auto py-4 my-4">
    <span class="flex gap-2">
      <router-link class="link" to="/">Главная</router-link>
      <span>/</span>
      <router-link class="link"  to="/services">Услуги</router-link>
      <span>/</span>
      <span>Склеротерапия</span>
    </span>
    <h1 class="text-3xl text-center max-sm:text-2xl my-5">Склеротерапия</h1>
    <img class="w-full max-h-[400px] object-contain object-center my-6" :src="icon">
    <div class="max-sm:p-4">
      Существуют разные способы, чтобы добиться закрытия просвета варикозной вены. Один из них — это введение в вену
      склерозанта. Другой — термическое воздействие на стенку сосуда изнутри, которое также приводит к зарастанию его
      просвета. Такой эффект можно получить за счет воздействия лазерного луча. Процедура получила название
      эндовазальная лазерная коагуляция (ЭВЛК), но некоторые пациенты называют ее лазерным склерозированием.
    </div>

    <div class="info py-4 max-sm:p-4">
      <span class="inline-block px-6 py-2 font-bold bg-[#e73f7b] text-white">Цена: 10 000тг</span>
    </div>
  </div>
</template>

<style scoped>
.link:hover {
  text-decoration: underline;
  color: #32b0d6;
}
</style>