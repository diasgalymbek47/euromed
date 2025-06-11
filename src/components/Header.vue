<script setup>
import { RouterLink } from 'vue-router';
import Logo from '@/assets/images/logo.png'
import MenuImg from '@/assets/images/menu.png';
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
    <header class="header" :class="headerFixed && 'fixed'">
        <div class="header-inner">
            <RouterLink to="/">
                <img class="sm:w-[250px] sm:h-[60px] w-[220px] h-[45px] object-contain" :src="Logo" alt="EuroMed">
            </RouterLink>
            <button class="header-btn md:hidden flex">
                <img width="28" height="28" :src="MenuImg" alt="MenuImg">
            </button>
            <nav class="header-nav">
                <RouterLink class="header-link" to="/">Главная</RouterLink>
                <RouterLink class="header-link" to="/">Цены</RouterLink>
                <RouterLink class="header-link" to="/">Услуги</RouterLink>
                <RouterLink class="header-link" to="/">Врачи</RouterLink>
                <RouterLink class="header-link" to="/">Результаты</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.header {
    min-height: 108px;
    display: flex;
    align-items: center;
    top: -100px;
    transition: all .3s ease;
    background-color: #fff;
}

.header.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-nav {
    @media (max-width: 767px) {
        position: absolute;
        top: -100%;
        left: 0;
        right: 0;
    }
}

.header-btn {
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #00a3c8;
    border-radius: 4px;

    @media (max-width: 475px) {
        padding: 7px;
    }
}
</style>