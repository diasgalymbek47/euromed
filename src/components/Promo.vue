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
  <div class="promo container flex justify-between items-center m-auto mt-4 gap-2">
    <p class="font-medium text-white md:text-xl sm:text-lg max-sm:text-[15px] ms-4">
      {{text}}
      <span class="line-through font-bold">{{lineThrough}}</span>
      <span class="material-symbols-outlined">{{icon}}</span>
    </p>
    <button class="px-10! max-sm:px-5! btn flex items-center justify-center max-sm:text-[14px]">
      <span class="material-symbols-outlined">visibility</span>
    </button>
  </div>
</template>

<style scoped>
.promo {
  background: linear-gradient(135deg, #e73f7b, #32b0d6);
}
</style>