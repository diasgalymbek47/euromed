<script setup>
import Promo from "@/components/Promo.vue";
import Map from "@/components/Map.vue";
import Welcome from "@/components/Welcome.vue";
import Video from "@/components/Video.vue";
import Card from "@/components/Card.vue";
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <Promo text="Рассрочка на 24 месяц без %"/>
  <Promo text="Акция на консультацию всего за 4990 тг вместо " lineThrough="15000 тг"/>
  <Promo text="Скидка на лечение варикоза"/>
  <div class="container mx-auto flex justify-center py-4">
    <router-link class="btn" to="">Посмотреть все акции</router-link>
  </div>

  <Welcome />

  <div class="container mx-auto my-8">
    <h2 class="flex items-center gap-2 text-3xl max-sm:text-2xl justify-center p-4 bg-[#f5f5f5] mb-4">
      Наша клиника
      <span class="text-4xl max-sm:text-2xl font-bold text-[#32b0d6]">EURO</span>
      <span class="text-4xl max-sm:text-2xl font-bold text-[#e73f7b]">MED</span>
    </h2>
    <Video/>
  </div>

  <div class="container mx-auto">
    <h2 class="head">Услуги</h2>
    <div class="flex max-md:flex-wrap gap-4">
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="monitor_heart" title="Лечение варикоза"/>
      </router-link>
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="hand_bones" title="Лечение сосуд"/>
      </router-link>
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="recent_patient" title="Полный осмотр"/>
      </router-link>
    </div>
    <router-link class="mx-auto w-max block btn mt-4 text-xl" to="/services">Посмотреть всех услуг</router-link>
  </div>

  <div class="container mx-auto mt-8">
    <h2 class="head">Врачи</h2>
    <div class="flex max-md:flex-wrap gap-4">
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="person" title="Ермаханов Наурызали"/>
      </router-link>
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="person" title="Ермаханов Наурызали"/>
      </router-link>
      <router-link to="/">
        <Card class="hover_card" bg-color="#f5f5f5" icon="person" title="Ермаханов Наурызали"/>
      </router-link>
    </div>
    <router-link class="mx-auto w-max block btn mt-4 text-xl" to="/doctors">Посмотреть всех врачей</router-link>
  </div>

  <Map/>

  <div class="container mx-auto">
    <ContactForm/>
  </div>
</template>