<script setup>
import Accordion from "@/components/Accordion.vue";
import {formatterPrice} from '@/utils/Formatters.js'

const prices = [
  {
    title: 'Консультация флеболога',
    prices: [
      {
        text: 'Прием осмотр первичный',
        price: 4990
      },
      {
        text: 'Прием осмотр полный',
        price: 8990
      },
      {
        text: 'Прием осмотр одной ноги',
        price: 6990
      }
    ]
  },
  {
    title: 'Хирургия сосудистая',
    prices: [
      {
        text: 'Лечение сосуд',
        price: 19900
      },
      {
        text: 'Операция сосуд',
        price: 39990
      }
    ]
  },
  {
    title: 'Диагностика',
    prices: [
      {
        text: 'Диагностика сосуд',
        price: 5000
      },
      {
        text: 'Диагностика ноги',
        price: 10000
      },
      {
        text: 'Диагностика полная',
        price: 20000
      }
    ]
  },
  {
    title: 'Комплексная исследование',
    prices: [
      {
        text: 'Комплексная исследование сосуд',
        price: 19900
      }
    ]
  },
  {
    title: 'Лечение варикоза',
    prices: [
      {
        text: 'Лечение варикоза обе ноги',
        price: 30000
      },
      {
        text: 'Лечение варикоза одной ноги',
        price: 15000
      },
      {
        text: 'Операция ноги',
        price: 39000
      }
    ]
  },
  {
    title: 'Лечение варикоза',
    prices: [
      {
        text: 'Лечение варикоза обе ноги',
        price: 30000
      },
      {
        text: 'Лечение варикоза одной ноги',
        price: 15000
      },
      {
        text: 'Операция ноги',
        price: 39000
      }
    ]
  },
  {
    title: 'Лечение варикоза',
    prices: [
      {
        text: 'Лечение варикоза обе ноги',
        price: 30000
      },
      {
        text: 'Лечение варикоза одной ноги',
        price: 15000
      },
      {
        text: 'Операция ноги',
        price: 39000
      }
    ]
  }
];
</script>

<template>
  <div class="container mx-auto mb-8">
    <h1 class="head">Стоимость услуг</h1>
    <Accordion :title="price.title" v-for="(price, index) in prices" :key="index">
      <div class="accordion-content bg-gray-100 p-2 text-lg" v-for="(children, childrenIndex) in price.prices" :key="childrenIndex">
        <div class="flex max-sm:flex-wrap items-center gap-2">
          <span class="font-medium max-sm:text-[16px]">{{children.text}}:</span>
          <span class="font-bold text-[19px] text-[#e73f7b]">{{formatterPrice(children.price)}}тг</span>
        </div>
      </div>
    </Accordion>
  </div>
</template>

<style scoped>
.accordion-content + .accordion-content {
  margin-top: 6px;
}
</style>