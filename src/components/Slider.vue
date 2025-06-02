<script setup>
import {ref} from "vue";

const props = defineProps({
  items: Array
})

let index = ref(0);

const prev = () => {
  index.value--;
}

const next = () => {
  index.value++;
}
</script>

<template>
  <div class="container mx-auto mt-8 relative">
    <button :disabled="index == 0" @click="prev"
            class="btn slider_btn_left flex items-center justify-center">
      <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <div class="lg:w-4/5 m-auto">
      <img class="w-full" :src="items[index]">
    </div>
    <button :disabled="index == items.length - 1" @click="next"
            class="btn slider_btn_right flex items-center justify-center">
      <span class="material-symbols-outlined">arrow_forward</span>
    </button>
  </div>
</template>

<style scoped>
.slider_btn_left {
  position: absolute;
  left: 0;

  @media (max-width: 1023px) {
    bottom: 0;
  }

  @media (min-width: 1023px) {
    transform: translateY(-50%);
    top: 50%;
    left: 10px;
  }
}

.slider_btn_right {
  position: absolute;
  right: 0;

  @media (max-width: 1023px) {
    bottom: 0;
  }

  @media (min-width: 1023px) {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}

.material-symbols-outlined {
  @media (max-width: 767px) {
    font-size: 12px;
  }
}
</style>