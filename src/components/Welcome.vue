<script setup>
import Head from './Head.vue';
import Button from './Button.vue';
import Schedule from './Schedule.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const headerFixed = ref(false);

onMounted(() => {
    const onScroll = () => {
        headerFixed.value = window.scrollY > 500;
    };

    window.addEventListener('scroll', onScroll);

    onScroll();

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    });
});
</script>

<template>
    <div class="welcome" :class="headerFixed && 'active'">
        <div class="welcome-inner">
            <div class="max-w-[650px]">

                <Head class="mb-[20px] sm:ms-[5px]" text="Профессиональный уход за венами" />
                <h1 class="text-[#333] md:text-[60px] text-3xl font-bold mb-[20px]">Ведущие специалисты-флебологи,
                    которым вы можете доверять</h1>
                <p class="text-[#696e7b] mb-[20px]">Получите точную диагностику и эффективное лечение заболеваний вен в
                    современной и комфортной обстановке. Индивидуальный подход с использованием новейших медицинских
                    технологий.</p>
                <Button text="Записаться" />
            </div>
        </div>
        <Schedule class="schedule" />
    </div>
</template>

<style scoped>
.welcome.active {
    margin-top: 108px;
}

.welcome {
    position: relative;
    background-image: url('@/assets/images/main-bg.webp');
    background-position: center left;
    background-repeat: no-repeat;
    background-size: cover;
}

.schedule {
    @media (min-width: 1535px) {
        position: absolute;
        bottom: -250px !important;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (min-width: 1024px) {
        position: absolute;
        bottom: -450px;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>