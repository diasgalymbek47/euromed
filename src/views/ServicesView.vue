<script setup>
import Service from "@/components/Service.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="head">Наши услуги</h1>

    <div class="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 gap-5 max-lg:justify-center">
      <Service/>
      <Service/>
      <Service/>
      <Service/>
      <Service/>
    </div>
  </div>
</template>

<style scoped>

</style>