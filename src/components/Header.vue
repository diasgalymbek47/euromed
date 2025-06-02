<script setup>
import logo from '@/assets/images/euro-med-logo.png'
import {ref} from "vue";

const activeNav = ref(false);
</script>

<template>
  <header class="container m-auto">
    <div class="flex justify-between items-center gap-3 pt-4 pb-4 max-sm:justify-center">
      <img class="max-sm:w-[180px] w-max h-max" :src="logo" alt="EuroMed">
      <div class="flex lg:flex-row flex-col lg:gap-4 gap-3 max-sm:hidden">
        <a class="font-medium flex items-center gap-2" href="tel:+77020772266">
          <span class="material-symbols-outlined">call</span>
          <span>+7‒702‒077‒22‒66</span>
        </a>
        <a class="font-medium flex items-center gap-2" href="tel:+77025052474">
          <span class="material-symbols-outlined">call</span>
          <span>+7‒702‒505‒24‒74</span>
        </a>
        <a class="font-medium flex gap-2" target="_blank" href="https://go.2gis.com/H1OP0">
          <span class="material-symbols-outlined">pin_drop</span>
          г.Алматы, Улица Санаторная, 2/2
        </a>
      </div>
    </div>
    <div class="flex justify-between items-center gap-3 bg-[#32b0d6]">
      <button @click="activeNav = true" class="lg:hidden flex flex-col gap-1.5 p-4">
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
      </button>
      <nav class="flex max-lg:hidden" :class="activeNav && 'mobile_nav'">
        <div class="lg:hidden w-full flex justify-between">
          <div class="p-4">
            <img class="max-sm:w-48" :src="logo" alt="EuroMed">
          </div>
          <div class="flex items-center justify-center p-4 font-medium bg-[#e73f7b]">
            <span @click="activeNav = false" class="material-symbols-outlined text-white ">close</span>
          </div>
        </div>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link" to="/">
          <span class="material-symbols-outlined">home</span>
          Главная
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link" to="/prices">
          <span class="material-symbols-outlined">paid</span>
          Цены
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link" to="/services">
          <span class="material-symbols-outlined">medical_services</span>
          Услуги
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link" to="/doctors">
          <span class="material-symbols-outlined">clinical_notes</span>
          Врачи
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link" to="/results">
          <span class="material-symbols-outlined">image</span>
          Результаты
        </router-link>
      </nav>
      <button class="btn">Запись на прием</button>
    </div>
  </header>
</template>