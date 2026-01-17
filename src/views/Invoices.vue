<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useInvoicesStore } from '@/stores/invoices.store';
import CreateInvoice from '@/components/invoice/createInvoice.vue';
import SubscribeSkeleton from '@/components/subscribe/subscribeSkeleton.vue';
import { priceFormat } from '@/utils/formatting.util';
import type { TypeInvoice } from '@/types/invoices.type';

// Хранилище
const invoicesStore = useInvoicesStore();

//
const isLoading = ref(false);

// Будут находиться все счета
const invoices = ref<TypeInvoice[]>([]);

const getInvoiceList = async (noLoading = false) => {
  !noLoading && (isLoading.value = true);

  try {
    invoices.value = await invoicesStore.getInvoiceList();
  } catch (error) {
    console.log(error);
  } finally {
    !noLoading && (isLoading.value = false);
  }
};

onMounted(getInvoiceList);
</script>

<template>
  <div class="container">
    <div class="invoices wrap_section">
      <h1 class="h1">Список счетов</h1>
      <div class="invoices__desc">Создание и просмотр счетов пользователей</div>

      <!--  -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Пользователь</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="isLoading">
            <SubscribeSkeleton v-for="value in 5" :key="value" />
          </template>

          <template v-else>
            <tr v-for="{ id, email, amount, status } in invoices" :key="id">
              <td>{{ id }}</td>
              <td>{{ email }}</td>
              <td>{{ priceFormat(amount) }}</td>
              <td>{{ status }}</td>
            </tr>
          </template>
        </tbody>
      </table>

      <!-- Создать счёт пользователям -->
      <CreateInvoice v-if="!isLoading" @reload-list="getInvoiceList(true)" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.invoices__desc {
  margin-bottom: 70px;
}

/*  */

.table {
  width: 100%;
  margin-bottom: 30px;

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
