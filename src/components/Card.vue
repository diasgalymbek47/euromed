<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: 'color-mix(in srgb, #fff, transparent 10%)'
  },
  icon: String,
  title: String
})
</script>

<template>
  <div class="flex flex-col items-center p-4 bg rounded-xl" :style="{background: bgColor}">
    <div>
      <span class="material-symbols-outlined">{{icon}}</span>
    </div>
    <h2 class="text-center text-2xl max-md:text-xl max-sm:text-lg">{{title}}</h2>
    <div class="text-xl max-md:text-lg max-sm:text-[14px] p-2 text-center">
      Описание текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
      текст текст текст текст текст текст текст
    </div>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-size: 48px;

  @media (max-width: 435px) {
    font-size: 32px;
  }
}
</style>