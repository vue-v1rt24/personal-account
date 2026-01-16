<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTariffsStore } from '@/stores/tariffs.store';
import { useSubscribesStore } from '@/stores/subscribes.store';

import type { TypeTariffs } from '@/types/tariffs.type';

import TariffCard from '@/components/card/TariffCard.vue';

import TariffCardSkeleton from '@/components/card/TariffCardSkeleton.vue';

// Хранилище
const tariffsStore = useTariffsStore();
const subscribesStore = useSubscribesStore();

//
const tariffs = ref<TypeTariffs[]>();
const isLoading = ref(false);

// Подписка на тариф
const isSubscribing = ref(false);

const subscribeTariff = async (id: string) => {
  isSubscribing.value = true;

  try {
    await subscribesStore.subscribeToTariff(id);
  } catch (error) {
    console.log(error);
  } finally {
    isSubscribing.value = false;
  }
};

//
onMounted(async () => {
  try {
    isLoading.value = true;
    tariffs.value = await tariffsStore.getTariffs();
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="container">
    <div class="tariffs wrap_section">
      <h1 class="h1">Тарифы</h1>

      <!--  -->

      <div class="cards">
        <template v-if="isLoading">
          <TariffCardSkeleton v-for="value in 5" :key="value" />
        </template>

        <template v-else>
          <template v-if="tariffs?.length">
            <TariffCard
              v-for="tariff in tariffs"
              :key="tariff.id"
              :tariff
              :is-subscribing="isSubscribing"
              @subscribe="subscribeTariff"
            />
          </template>

          <div v-else class="not_tariffs">Пока нет тарифов</div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

/*  */

.not_tariffs {
  font-size: 30px;
}
</style>
