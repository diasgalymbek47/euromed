<script setup>
defineProps({
    img: String,
    name: String,
    position: String,
    description: String
})
</script>

<template>
    <div class="flex flex-col gap-1 text-start border-b-2 pb-2 border-[#36a8eb]">
        <img class="mb-[30px] max-w-[500px] mx-auto" :src="img" alt="DoctorImage">
        <div class="flex flex-col grow gap-1 justify-between">
            <h2 class="text-[22px] text-[#333] font-medium">{{ name }}</h2>
            <p class="text-[#36a8eb] font-medium mb-[20px]">{{ position }}</p>
            <div class="grow flex flex-col justify-end">
                <p class="text-[20px] text-[#696e7b] font-light">{{ description }}</p>
            </div>
        </div>
    </div>
</template>