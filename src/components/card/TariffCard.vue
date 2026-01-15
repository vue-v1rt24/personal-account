<script setup lang="ts">
import { priceFormatUtil } from '@/utils/priceFormatUtil';
import type { TypeTariffs } from '@/types/tariffs.type';
import Button from '@/components/ui/Button.vue';

//
const { id, name, desc, price, speed } = defineProps<TypeTariffs>();
</script>

<template>
  <div class="card">
    <div class="card__left">
      <h2>{{ name }}</h2>
      <p v-if="desc">{{ desc }}</p>
    </div>

    <div class="card__right">
      <span v-if="price" class="price">{{ priceFormatUtil(price) }}</span>
      <span v-if="speed" class="speed">{{ speed }} Мб/с</span>
      <RouterLink to="/">Подробнее</RouterLink>
      <Button title="Подключить" />
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
