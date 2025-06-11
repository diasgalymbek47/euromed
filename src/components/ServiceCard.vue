<script setup>
defineProps({
    img: String,
    title: String,
    text: String
})
</script>

<template>
    <div class="card pt-[50px] pb-[75px] flex flex-col gap-5 items-center bg-white px-5">
        <div class="p-[20px] bg-[#00a3c8] rounded-full">
            <img :src="img" alt="Service Image">
        </div>
        <h2 class="text-[22px] font-medium">{{ title }}</h2>
        <p class="text-[20px] text-[#696e7b] font-light">{{ text }}</p>
    </div>
</template>

<style scoped>
.card {
    transition: all .3s ease;
    cursor: default;
}

@media (min-width:1024px) {
    .card:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }
}
</style>