<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { priceFormat } from '@/utils/formatting.util';
import type { TypeTariffs } from '@/types/tariffs.type';

//
defineProps<{
  tariff: TypeTariffs;
  isSubscribing: boolean;
}>();

//
const emit = defineEmits<{
  subscribe: [id: string];
}>();
</script>

<template>
  <div class="card">
    <div class="card__left">
      <h2>{{ tariff.name }}</h2>
      <p v-if="tariff.desc">{{ tariff.desc }}</p>
    </div>

    <div class="card__right">
      <span v-if="tariff.price" class="price">{{ priceFormat(tariff.price) }}</span>
      <span v-if="tariff.speed" class="speed">{{ tariff.speed }} Мб/с</span>
      <RouterLink to="/">Подробнее</RouterLink>
      <Button
        title="Подключить"
        :loading="isSubscribing"
        @btn-click="emit('subscribe', tariff.id)"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  background-color: white;
  box-shadow: 0 0 10px 0 rgb(200, 200, 200);
  border-radius: 10px;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
}

/*  */

.card__left {
  line-height: 24px;

  /* h2 */
  h2 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  /* p */
  p {
    font-size: 16px;
  }
}

/*  */

.card__right {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  /* a */
  a {
    color: black;
  }
}
</style>
