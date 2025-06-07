<script setup>
import { ref, watch, nextTick } from 'vue';

const props = defineProps({
  items: Array
});

const isLoaded = ref(false);
const showImage = ref(true);
const index = ref(0);

watch(index, async () => {
  isLoaded.value = false;
  showImage.value = false;

  // Даем Vue возможность "вырезать" картинку из DOM (v-if), чтобы reset был визуален
  await nextTick();

  showImage.value = true;
});

const handleLoad = () => {
  isLoaded.value = true;
};

const prev = () => {
  if (index.value > 0) index.value--;
};

const next = () => {
  if (index.value < props.items.length - 1) index.value++;
};
</script>

<template>
  <div class="container mx-auto my-8 relative">
    <button :disabled="index == 0" @click="prev"
            class="btn slider_btn_left flex items-center justify-center">
      <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <div class="lg:w-4/5 m-auto">
      <span
          class="py-1 px-2 absolute left-1 top-1 bg-[#32b0d6] md:text-xl text-[12px] text-white">{{ index + 1 }}/{{ items.length }}</span>
      <img
          v-if="showImage"
          :src="items[index]"
          @load="handleLoad"
          :class="{ 'img-loaded': isLoaded }"
          class="fade-img w-full lg:h-[800px] md:h-[600px] h-400px"
      />
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

.fade-img {
  user-select: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.img-loaded {
  opacity: 1;
}
</style>