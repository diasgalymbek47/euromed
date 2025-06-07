<script setup>
import icon from '@/assets/images/service-bg.jpg'
</script>

<template>
  <router-link to="/service">
    <div class="service w-full">
      <h2 class="service-title text-white font-medium">Склеротерапия</h2>
      <img class="w-full h-full object-cover" :src="icon">
    </div>
  </router-link>
</template>

<style scoped>
.service {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.service:hover .service-title{
  text-decoration: underline;
}

.service::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .3s ease;
  background-color: rgba(0, 0, 0, 0.3);
}

.service:hover::after {
  background-color: rgba(0, 0, 0, 0.5);
}

.service-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  z-index: 1;
}
</style>