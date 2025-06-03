<script setup>
import {ref} from "vue";

const props = defineProps({
  title: String
})

const isActive = ref(false);
</script>

<template>
  <div class="accordion mt-2">
    <div @click="isActive = !isActive" class="accordion-header">
      <h3 class="accordion-title">{{title}}</h3>
      <span class="material-symbols-outlined accordion-icon">{{isActive ? 'remove' : 'add'}}</span>
    </div>
    <div class="accordion-content" :class="isActive && 'active'">
      <slot></slot>
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
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 435px) {
    font-size: 16px;
  }
}

.accordion-content {
  box-sizing: border-box;
  overflow: hidden;
  height: 0px;
}

.accordion-content.active {
  padding: 10px;
  height: max-content;
}
</style>