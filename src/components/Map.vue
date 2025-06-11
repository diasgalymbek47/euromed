<script setup>
import PressImg from '@/assets/images/press-button.png';
import { ref } from 'vue';

const isActive = ref(false);

const press = () => {
    isActive.value = true;
}

const unPress = () => {
    isActive.value = false;
}
</script>

<template>
    <div @click="press" class="map" :class="isActive && 'active'">
        <div v-if="!isActive" class="press flex flex-col items-center gap-5">
            <img class="press-icon" :src="PressImg" alt="Press Image">
            <p class="text-white text-center">Нажмите для просмотра</p>
        </div>
        <button v-if="isActive" @click.stop="unPress" class="map-btn">Заблокировать карту</button>
        <div style="position:relative;overflow:hidden;">
            <a href="https://yandex.kz/maps/ru/org/euro_med/77891174703/?lang=ru&utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:0px;">
                Euro Med
            </a>
            <a href="https://yandex.kz/maps/ru/162/almaty/category/medical_center_clinic/184106108/?lang=ru&utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:14px;">
                Медцентр, клиника в Алматы
            </a>
            <iframe
                src="https://yandex.kz/map-widget/v1/?ll=76.808463%2C43.196994&mode=search&oid=77891174703&ol=biz&z=17.04"
                width="100%" class="sm:h-[600px] h-[400px]" frameborder="1" allowfullscreen="true" style="position:relative;">
            </iframe>
        </div>
    </div>
</template>

<style scoped>
.map {
    position: relative;
    user-select: none;
}

.map::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 2;
    cursor: pointer;
}

.map.active::after {
    display: none;
}

.press {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.map-btn {
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 10px;

    background-color: #00a3c8;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;

    transition: all .3s ease;

    cursor: pointer;
}

.map-btn:hover {
    background-color: #00708a;
}
</style>