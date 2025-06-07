<script setup>
import Service from "@/components/Service.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="head">Наши услуги</h1>

    <div
        class="grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 gap-5 max-lg:justify-center max-sm:px-2">
      <Service/>
      <Service/>
      <Service/>
      <Service/>
      <Service/>
    </div>

    <p class="my-20 max-sm:px-2">
      <span class="inline-block my-2">Клиника «Флебология - Euro Med» объединяет два направления — флебологию и эстетическую хирургию.</span>
      <span class="inline-block my-2">Флеболог персонально ведет пациента на всех этапах решения венозной проблемы — ультразвуковое обследование и
      консультация, лечение и контроль, что позволяет учесть все особенности каждого случая и довести решение венозной
      проблемы до гарантированного результата.</span>
      <span class="inline-block my-2">Применяя современные методы диагностики лечения, мы решаем проблему варикозного расширения вен без открытой
      операции, без разрезов и швов, без наркоза, без госпитализации.</span>
    </p>
  </div>
</template>

<style scoped>

</style>