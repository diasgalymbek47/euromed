<script setup>
import Button from './Button.vue';
import phoneCall from '@/assets/images/phone-call.png'
import location from '@/assets/images/location.png'
</script>

<template>
    <div class="container mx-auto flex max-2xl:flex-wrap text-white">
        <div class="grow 2xl:w-[33.3%] md:w-[100%] md:p-[60px] sm:p-[30px] p-[20px] bg-[#36a8eb]">
            <h2 class="mb-[20px] text-[22px] font-medium">Консультация</h2>
            <p class="mb-[30px]">Запишитесь на бесплатную консультацию с врачом-флебологом — узнаете всё о состоянии вен
                и возможностях лечения. Индивидуальный подход и современные методы диагностики.</p>
            <Button :styles="{ backgroundColor: 'transparent', borderColor: '#fff' }" :classes="'white-hover'"
                text="Бесплатная консультация" />
        </div>
        <div class="grow 2xl:w-[33.3%] lg:w-[50%] md:w-[100%] md:p-[60px] sm:p-[30px] p-[20px] bg-[#088edd]">
            <h2 class="mb-[20px] text-[22px] font-medium">График работы</h2>
            <div>
                <div class="flex justify-between gap-3 pb-2">
                    <span>ПН – ВТ</span>
                    <span class="font-medium">09.00 – 17.00</span>
                </div>
                <div class="flex justify-between gap-3 py-2 border-t-[1px] border-[#1977cc]">
                    <span>СР – ЧТ</span>
                    <span class="font-medium">09.00 – 17.00</span>
                </div>
                <div class="flex justify-between gap-3 py-2 border-t-[1px] border-[#1977cc]">
                    <span>ПТ – СБ</span>
                    <span class="font-medium">09.00 – 17.00</span>
                </div>
            </div>
        </div>
        <div class="grow 2xl:w-[33.3%] lg:w-[50%] md:w-[100%] md:p-[60px] sm:p-[30px] p-[20px] bg-[#1977cc]">
            <h2 class="mb-[20px] text-[22px] font-medium">Контакты</h2>
            <a class="text-xl font-bold flex items-center gap-2 mb-[20px] hover:underline" href="tel:87025052474">
                <img width="24" height="24" :src="phoneCall" alt="phone">
                +7 (702) 505-24-74
            </a>
            <a class="text-xl font-bold flex items-center gap-2 mb-[20px] hover:underline" href="tel:87020772266">
                <img width="24" height="24" :src="phoneCall" alt="phone">
                +7 (702) 077-22-66
            </a>
            <a class="text-xl font-bold flex items-center gap-2 mb-[20px] hover:underline" href="https://go.2gis.com/v47Mp" target="_blank">
                <img width="24" height="24" :src="location" alt="location">
                Алматы, Улица Санаторная, 2/2
            </a>
        </div>
    </div>
</template>