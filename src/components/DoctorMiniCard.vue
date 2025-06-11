<script setup>
defineProps({
    img: String,
    name: String,
    position: String
})
</script>

<template>
    <div class="flex items-center gap-3">
        <img :src="img" alt="DoctorImage">
        <div class="flex flex-col">
            <h2 class="font-medium text-[#333] sm:text-[22px] text-lg">{{ name }}</h2>
            <p class="text-[#696e7b] font-light">{{ position }}</p>
        </div>
    </div>
</template>