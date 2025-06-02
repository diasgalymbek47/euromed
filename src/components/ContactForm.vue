<script setup>

</script>

<template>
  <div class="py-4 max-sm:p-4">
    <form class="w-full flex flex-col gap-2">
      <h2 class="form-title">Запиcь на консультацию</h2>
      <div class="flex max-sm:flex-wrap gap-2">
        <label class="grow">
          Фамилия
          <input class="input w-full" type="text">
        </label>
        <label class="grow">
          Имя
          <input class="input w-full" type="text">
        </label>
      </div>
      <div class="flex">
        <label class="grow">
          Телефон
          <input class="input w-full" type="text">
        </label>
      </div>
      <div class="flex">
        <label class="grow">
          Описание
          <textarea class="textarea w-full"></textarea>
        </label>
      </div>
      <button class="btn" type="submit">Записаться</button>
    </form>
  </div>
</template>