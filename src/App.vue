<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ToUpButton from "@/components/ToUpButton.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <Header/>
  <router-view/>
  <Footer/>
  <ToUpButton/>
  <Navigation/>
</template>
