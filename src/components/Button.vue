<script setup>
defineProps({
    text: String,
    styles: Object,
    classes: String
})
</script>

<template>
    <button :style="styles" class="btn" :class="classes">{{ text }}</button>
</template>

<style scoped>
.btn {
    font-size: 15px;
    font-weight: 500;
    line-height: 40px;
    fill: #ffffff;
    color: #ffffff;
    background-color: #00a3c8;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #00a3c8;
    border-radius: 40px 40px 40px 40px;
    padding: 0px 29px 0px 29px;
    cursor: pointer;
    transition: all .3s ease;
}

@media (min-width:1024px) {
    .btn.white-hover:hover {
        background-color: #ffffff !important;
        color: #36a8eb;
    }

    .btn:hover {
        background-color: transparent;
        color: #00a3c8;
    }
}
</style>