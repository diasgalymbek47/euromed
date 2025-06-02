<script setup>
  const props = defineProps({
    text: String,
    lineThrough: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div class="container flex justify-between items-center m-auto mt-4 border-2 border-[#e73f7b]  gap-2">
    <p class="font-medium text-xl max-sm:text-[14px] ms-4 flex items-center gap-1">
      {{text}}
      <span class="line-through font-bold">{{lineThrough}}</span>
      <span class="material-symbols-outlined">{{icon}}</span>
    </p>
    <button class="btn max-sm:text-[14px]">Подробнее</button>
  </div>
</template>