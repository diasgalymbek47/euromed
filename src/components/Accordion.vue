<script setup>
import {ref, watch, nextTick} from 'vue';

defineProps({
  title: String
})

const isActive = ref(false);
const accordionContent = ref(null);
const contentHeight = ref('0px');

watch(isActive, async (newVal) => {
  await nextTick();

  if (accordionContent.value) {
    contentHeight.value = newVal
        ? accordionContent.value.scrollHeight + 'px'
        : '0px';
  }
});
</script>

<template>
  <div class="accordion mt-2 rounded-lg overflow-hidden">
    <div @click="isActive = !isActive" class="accordion-header">
      <h3 class="accordion-title">{{ title }}</h3>
      <span class="material-symbols-outlined accordion-icon">
        {{ isActive ? 'remove' : 'add' }}
      </span>
    </div>

    <div
        ref="accordionContent"
        class="accordion-content"
        :style="{ height: contentHeight }"
    >
      <div class="p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid #e73f7b;
}

.accordion-header {
  background-color: #32b0d6;
  padding: 10px;
  cursor: pointer;
  position: relative;
}

.accordion-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  padding: 5px;
  transform: translateY(-50%);
  background-color: #f1f1f1;
  border-radius: 5px;
  font-size: 16px;
}

.accordion-title {
  margin-left: 5px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 435px) {
    font-size: 16px;
  }
}

.accordion-content {
  transition: height 0.3s ease;
  overflow: hidden;
}
</style>