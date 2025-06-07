<script setup>
import icon from '@/assets/images/Склеротерапия.jpeg'
</script>

<template>
  <div class="service w-full p-4 bg-gray-50">
    <h2 class="text-2xl text-center max-sm:text-xl">Склеротерапия</h2>
    <img class="my-4" :src="icon">
    <router-link to="/service" class="hidden sm:inline-block px-10! py-3! text-[16px] btn">Подробнее</router-link>
    <router-link to="/service" class="hidden max-sm:inline-block text-lg underline text-[#32b0d6] underline-offset-2 hover:underline-offset-0">Подробнее</router-link>
  </div>
</template>

<style scoped>

</style>