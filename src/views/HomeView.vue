<script setup>
import Promo from "@/components/Promo.vue";
import Map from "@/components/Map.vue";
import Welcome from "@/components/Welcome.vue";
import Video from "@/components/Video.vue";
import Card from "@/components/Card.vue";
import ContactForm from "@/components/ContactForm.vue";
import Service from "@/components/Service.vue";
</script>

<template>
  <Promo text="Рассрочка на 24 месяц без %"/>
  <Promo text="Акция на консультацию всего за 4990 тг вместо " lineThrough="15000 тг"/>
  <Promo text="Скидка на лечение варикоза"/>
  <div class="container mx-auto flex justify-center py-8">
    <router-link class="btn rounded-lg" to="">Посмотреть все акции</router-link>
  </div>

  <Welcome/>

  <div class="container mx-auto my-8">
    <Video/>
  </div>

  <div class="container mx-auto">
    <h2 class="head">Услуги</h2>
    <div class="flex max-md:flex-wrap gap-4 max-sm:px-2">
      <Service/>
      <Service/>
      <Service/>
    </div>
    <router-link class="mx-auto w-max block btn mt-8 rounded-lg" to="/services">Посмотреть всех услуг</router-link>
  </div>

  <div class="container mx-auto mt-8">
    <h2 class="head">Врачи</h2>
    <div class="flex max-md:flex-wrap gap-4 max-sm:px-2">
      <router-link to="/">
        <Card class="hover_card" bg-color="#f2f2f2" icon="person" title="Ермаханов Наурызали"/>
      </router-link>
      <router-link to="/">
        <Card class="hover_card" bg-color="#f2f2f2" icon="person" title="Ермаханов Наурызали"/>
      </router-link>
    </div>
    <router-link class="mx-auto w-max block btn mt-4 rounded-lg" to="/doctors">Посмотреть всех врачей</router-link>
  </div>

  <Map/>

  <div class="container mx-auto">
    <ContactForm/>
  </div>
</template>