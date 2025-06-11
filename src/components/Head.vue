<script setup>
defineProps({
    text: String
})
</script>

<template>
    <p class="head">{{ text }}</p>
</template>

<style scoped>
.head {
    color: #36a8eb;
    font-size: 22px;
    font-weight: 500;
}
</style>