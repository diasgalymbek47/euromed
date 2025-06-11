<script setup>
import { RouterLink } from 'vue-router';
import Head from './Head.vue';
import ServiceCard from './ServiceCard.vue';
import Button from './Button.vue';
import ConsultationImg from '@/assets/images/emergency-call.png';
import DiagnosisImg from '@/assets/images/diagnosis.png';
import TreatmentImg from '@/assets/images/red-cross.png';
import BloodVesselImg from '@/assets/images/blood-vessel.png';
</script>

<template>
    <div class="bg-[#f8f8f8]">
        <div class="container mx-auto py-[140px] text-center">

            <Head class="mb-[20px]" text="Услуги" />
            <h2 class="mb-[20px] text-[#333] sm:text-[36px] min-[475px]:text-3xl text-2xl font-bold max-md:px-4">Комплексные решения для здоровья</h2>
            <p class="max-md:px-4 mb-[50px] text-[#696e7b] max-w-[850px] mx-auto">Наш медицинский центр оснащён
                новейшими технологиями, которые помогают специалистам оказывать медицинскую помощь самого высокого
                уровня для пациентов всех возрастов.</p>

            <div class="flex gap-10 2xl:px-30 px-5 mb-[50px] max-xl:flex-wrap">
                <ServiceCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" title="Консультация"
                    text="Обсуждение симптомов и подбор индивидуального плана лечения." :img="ConsultationImg" />
                <ServiceCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" title="Диагностика"
                    text="Выявление заболеваний с помощью современных методов." :img="DiagnosisImg" />
                <ServiceCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" title="Лечение"
                    text="Комплексная терапия для восстановления здоровья." :img="TreatmentImg" />
                <ServiceCard class="grow basis-[25%] max-xl:basis-[45%] max-lg:basis-[95%]" title="Лечение варикоза"
                    text="Современные методы лечения варикозного расширения вен." :img="BloodVesselImg" />
            </div>

            <RouterLink to="/">
                <Button text="Посмотреть всех услуг" />
            </RouterLink>
        </div>
    </div>
</template>