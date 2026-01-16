<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useSubscribesStore } from '@/stores/subscribes.store';

import SubscribeSkeleton from '@/components/subscribe/subscribeSkeleton.vue';

import { priceFormat, dateFormat } from '@/utils/formatting.util';

import type { TypeSubscribe } from '@/types/subscribe.type';

//
const subscribesStore = useSubscribesStore();
const subscribes = ref<TypeSubscribe[]>([]);
const isLoading = ref(false);

//
onMounted(async () => {
  try {
    isLoading.value = true;
    subscribes.value = await subscribesStore.subscribeList();
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container">
    <div class="subscribe wrap_section">
      <h1 class="h1">Мои подписки</h1>
      <div class="subscribe__title">Список подписок текущего пользователя</div>

      <!--  -->
      <table class="table">
        <thead>
          <tr>
            <th>Тариф</th>
            <th>Дата подписки</th>
            <th>Цена</th>
            <th>Скорость</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="isLoading">
            <SubscribeSkeleton v-for="value in 5" :key="value" />
          </template>

          <template v-else>
            <tr v-for="{ id, name, price, speed, subscribeAt } in subscribes" :key="id">
              <td>{{ name }}</td>
              <td>{{ dateFormat(subscribeAt) }}</td>
              <td>{{ priceFormat(price) }}</td>
              <td>{{ speed }} Мб/с</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="css" scoped>
.subscribe__title {
  margin-bottom: 20px;
}

.subscribe__title {
  margin-bottom: 70px;
}

/*  */

.table {
  width: 100%;

  /* th, td */
  th,
  td {
    text-align: center;
    border: 1px solid grey;
    padding: 10px;
  }

  th {
    font-weight: bold;
  }
}
</style>
