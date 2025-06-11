<script setup>
import { RouterLink } from 'vue-router';
import Head from './Head.vue';
import DoctorCard from './DoctorCard.vue';
import Button from './Button.vue';
import Nauryz from '@/assets/images/Nauryz.jpg';
import Seidalyev from '@/assets/images/Seidalyev.jpg';
</script>

<template>
    <div class="container mx-auto py-[140px] text-center">

        <Head class="mb-[20px]" text="Врачи" />
        <h2 class="mb-[20px] text-[#333]  sm:text-[36px] min-[475px]:text-3xl text-2xl font-bold max-md:px-4">
            Квалифицированные врачи</h2>
        <p class="max-md:px-4 mb-[50px] text-[#696e7b] max-w-[850px] mx-auto">Наши специалисты обладают узкой
            направленностью и высоким уровнем профессиональной подготовки для точной диагностики и эффективного лечения.
        </p>

        <div class="flex gap-10 2xl:px-30 px-5 mb-[50px] max-xl:flex-wrap">
            <DoctorCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" name="Ермаханов Наурызали"
                position="Флеболог • Сосудистый хирург • Хирург • Врач УЗД"
                description="Имеет высокую экспертизу и международную практику диагностики и лечения заболеваний сосудистой системы."
                :img="Nauryz" />
            <DoctorCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" name="Сейдалиев Тимур"
                position="Сосудистый хирург • Флеболог"
                description="Имеет глубокие знания и международную практику в области диагностики и лечения венозных заболеваний."
                :img="Seidalyev" />
            <DoctorCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" name="Ермаханов Наурызали"
                position="Флеболог • Сосудистый хирург • Хирург • Врач УЗД"
                description="Имеет высокую экспертизу и международную практику диагностики и лечения заболеваний сосудистой системы."
                :img="Nauryz" />
            <DoctorCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" name="Сейдалиев Тимур"
                position="Сосудистый хирург • Флеболог"
                description="Имеет глубокие знания и международную практику в области диагностики и лечения венозных заболеваний."
                :img="Seidalyev" />
        </div>

        <RouterLink to="/">
            <Button text="Посмотреть всех врачей" />
        </RouterLink>
    </div>
</template>