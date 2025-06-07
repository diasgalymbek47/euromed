<script setup>
import logo from '@/assets/images/euro-med-logo.png'
import Modal from "@/components/Modal.vue";
import ContactForm from "@/components/ContactForm.vue";
import {ref, watch} from "vue";

const activeNav = ref(false);
const isActiveModal = ref(false);
const showModal = () => isActiveModal.value = true;
const closeModal = value => isActiveModal.value = value;

watch(isActiveModal, (value) => {
  if (value) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
})

watch(activeNav, (value) => {
  if (value) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
})
</script>

<template>
  <header class="container m-auto">
    <div class="flex justify-between items-center gap-3 pt-4 pb-4 max-sm:justify-center">
      <img class="max-sm:w-[180px] w-max h-max" :src="logo" alt="EuroMed">
      <div class="flex lg:flex-row flex-col lg:gap-4 gap-3 max-sm:hidden">
        <a class="link font-medium flex items-center gap-2" href="tel:+77020772266">
          <span class="material-symbols-outlined">call</span>
          <span class="link_text">+7‒702‒077‒22‒66</span>
        </a>
        <a class="link font-medium flex items-center gap-2" href="tel:+77025052474">
          <span class="material-symbols-outlined">call</span>
          <span class="link_text">+7‒702‒505‒24‒74</span>
        </a>
        <a class="link font-medium flex gap-2" target="_blank" href="https://go.2gis.com/H1OP0">
          <span class="material-symbols-outlined">pin_drop</span>
          <span class="link_text">г.Алматы, Улица Санаторная, 2/2</span>
        </a>
      </div>
    </div>
    <div class="flex justify-between items-center gap-3 bg-[#32b0d6] rounded-lg overflow-hidden">
      <button @click="activeNav = true" class="lg:hidden flex flex-col gap-1.5 p-4">
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
        <span class="sm:w-[35px] w-7 h-[3px] bg-[#e73f7b]"></span>
      </button>
      <nav class="flex max-lg:hidden" :class="activeNav && 'mobile_nav'">
        <div class="lg:hidden w-full flex justify-between">
          <div class="p-4">
            <img class="max-sm:w-[180px] w-max h-max" :src="logo" alt="EuroMed">
          </div>
          <div class="flex items-center justify-center p-4 font-medium bg-[#e73f7b]">
            <span @click="activeNav = false" class="material-symbols-outlined text-white ">close</span>
          </div>
        </div>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link transition-all" to="/">
          Главная
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link transition-all" to="/prices">
          Цены
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link transition-all" to="/services">
          Услуги
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link transition-all" to="/doctors">
          Врачи
        </router-link>
        <router-link @click="activeNav = false" active-class="bg-[#e73f7b]" class="header_link transition-all" to="/results">
          Результаты
        </router-link>
      </nav>
      <button @click="showModal" class="btn flex items-center justify-center gap-3">
        <span class="material-symbols-outlined">edit_note</span>
        Запись на прием
      </button>
    </div>
  </header>

  <Modal :is-active="isActiveModal" @close="closeModal">
    <ContactForm/>
  </Modal>
</template>

<style scoped>
.link:hover .link_text{
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>