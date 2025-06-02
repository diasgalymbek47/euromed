<script setup>
import home from '@/assets/images/home.png'
import instagram from '@/assets/images/instagram.png'
import whatsapp from '@/assets/images/whatsapp.png'
import location from '@/assets/images/location.png'
import telegram from '@/assets/images/telegram.png'
</script>

<template>
  <div class="hidden max-sm:block fixed left-0 right-0 bottom-0">
    <div class="flex justify-between items-center bg-gray-50 ">
      <router-link class="navigation_link" to="/">
        <img class="w-[24px] h-[24px]" :src="home">
      </router-link>
      <a class="navigation_link" href="https://www.instagram.com/euro_med24?igsh=MW00ODBseW4yOXozeA==">
        <img class="w-[24px] h-[24px]" :src="instagram">
      </a>
      <a class="navigation_link" href="https://wa.me/+77025052474">
        <img class="w-[24px] h-[24px]" :src="whatsapp">
      </a>
      <a class="navigation_link" href="https://t.me/+77020772266">
        <img class="w-[24px] h-[24px]" :src="telegram">
      </a>
      <a class="navigation_link" href="https://go.2gis.com/H1OP0">
        <img class="w-[24px] h-[24px]" :src="location">
      </a>
    </div>
  </div>
</template>