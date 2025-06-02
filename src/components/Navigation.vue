<script setup>
import home from '@/assets/images/home.png'
import instagram from '@/assets/images/instagram.png'
import whatsapp from '@/assets/images/whatsapp.png'
import location from '@/assets/images/location.png'
import up from '@/assets/images/up-arrow.png'
</script>

<template>
  <div class="hidden max-sm:block fixed left-0 right-0 bottom-0">
    <div class="flex justify-between items-center bg-gray-50 ">
      <router-link class="navigation_link" to="/">
        <img class="w-[24px] h-[24px]" :src="home">
      </router-link>
      <a class="navigation_link" href="#">
        <img class="w-[24px] h-[24px]" :src="instagram">
      </a>
      <a class="navigation_link" href="#">
        <img class="w-[24px] h-[24px]" :src="whatsapp">
      </a>
      <a class="navigation_link" href="#">
        <img class="w-[24px] h-[24px]" :src="location">
      </a>
      <div class="navigation_link">
        <img class="w-[24px] h-[24px]" :src="up">
      </div>
    </div>
  </div>
</template>