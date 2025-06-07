<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div @click.self="$emit('close', false)" class="modal" :class="isActive && 'active'">
    <div class="modal-content rounded-lg overflow-hidden">
      <span @click.self="$emit('close', false)" class="material-symbols-outlined modal-close rounded-lg overflow-hidden">close</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: .3s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal.active .modal-content {
  top: 0;
}

.modal-content {
  position: relative;
  top: 100%;
  width: 80%;
  height: 90%;
  padding: 20px;
  background-color: #fff;
  position: relative;
  cursor: default;
  overflow-y: auto;
  transition: .3s ease;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
  
  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
    padding: 30px 0 0 0;
  }
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background-color: #ddd;
  }
}
</style>