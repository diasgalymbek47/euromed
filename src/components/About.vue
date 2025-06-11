<script setup>
import Head from './Head.vue';
import AboutImg from '@/assets/images/Euromed.jpg'
import DoctorMiniCardImage from '@/assets/images/doctor-mini-card-img.webp';
import DoctorMiniCard from './DoctorMiniCard.vue';
</script>

<template>
    <div
        class="container mx-auto 2xl:pt-[350px] lg:pt-[550px] pt-[100px] pb-[140px] flex max-lg:flex-wrap justify-center items-center gap-[50px] lg:px-[50px] md:px-[30px] px-[20px]">
        <div>
            <img class="w-full max-h-[700px] object-contain" :src="AboutImg" alt="AboutImg">
        </div>
        <div>

            <Head class="mb-[20px]" text="О нас" />
            <div class="max-w-[550px]">
                <h2 class="font-bold sm:text-[36px] text-2xl mb-[20px]">Полный спектр медицинских услуг в одном месте
                </h2>
                <p class="text-[#696e7b] mb-[20px]">Наш медицинский центр — это региональный клинический и учебный
                    центр, оказывающий квалифицированную помощь пациентам с заболеваниями вен и сосудистыми патологиями.
                    Мы используем передовые технологии и опыт ведущих флебологов для эффективного и бережного ухода за
                    вашим здоровьем.</p>
                <p class="text-[#00a3c8] italic! font-bold mb-[20px]">“Наша миссия — быть уникальным источником
                    профессиональных медицинских советов.”</p>
            </div>
        </div>
    </div>
</template>