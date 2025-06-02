<script setup>
import logo from '@/assets/images/euro-med-logo.png'
import instagram from '@/assets/images/instagram.png'
import whatsapp from '@/assets/images/whatsapp.png'
import location from '@/assets/images/location.png'
import telegram from "@/assets/images/telegram.png";
</script>

<template>
  <footer class="bg-[#32b0d6] max-sm:pb-[60px]">
    <div class="container pt-8 pb-8 mx-auto flex justify-between max-md:flex-col max-md:ps-2 max-md:pe-2">
      <div>
          <div class="container mx-auto flex justify-between gap-8 pt-4 pb-4 flex-col">
            <img class="max-sm:w-[180px] w-max h-max" :src="logo">
            <div class="flex flex-col gap-2">
              <div class="text-xl">
                <a href="https://go.2gis.com/H1OP0" class="flex items-center gap-4">
                  <img :src="location" class="w-[38px] h-[38px]">
                  <span class="footer_link">Улица Санаторная, 2/2</span>
                </a>
              </div>
              <div class="flex gap-4 text-xl items-center">
                <h3 class="text-white">Социальные сети:</h3>
                <div class="flex gap-4">
                  <a href="https://www.instagram.com/euro_med24?igsh=MW00ODBseW4yOXozeA==">
                    <img :src="instagram" class="w-[32px] h-[32px]">
                  </a>
                  <a href="https://wa.me/+77025052474">
                    <img :src="whatsapp" class="w-[32px] h-[32px]">
                  </a>
                  <a href="https://t.me/+77020772266">
                    <img class="w-[32px] h-[32px]" :src="telegram">
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="flex flex-wrap gap-10 items-center">
        <div class="flex flex-col gap-1">
          <h2 class="mb-3 font-medium text-2xl max-md:text-xl text-[#111]">Полезные ссылки</h2>
          <router-link class="footer_link" to="/">Вопросы и ответы</router-link>
          <router-link class="footer_link" to="/">Консультация</router-link>
          <router-link class="footer_link" to="/">Виды варикоза</router-link>
          <router-link class="footer_link" to="/">Описание болезней</router-link>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="mb-3 font-medium text-2xl max-md:text-xl text-[#111]">Помощь</h2>
          <router-link class="footer_link" to="/">Вопросы и ответы</router-link>
          <router-link class="footer_link" to="/">Консультация</router-link>
          <router-link class="footer_link" to="/">Виды варикоза</router-link>
          <router-link class="footer_link" to="/">Описание болезней</router-link>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="mb-3 font-medium text-2xl max-md:text-xl text-[#111]">Услуги</h2>
          <router-link class="footer_link" to="/">Лечение варикоза</router-link>
          <router-link class="footer_link" to="/">Лечение варикоза</router-link>
          <router-link class="footer_link" to="/">Лечение варикоза</router-link>
          <router-link class="footer_link" to="/">Лечение варикоза</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>