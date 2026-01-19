<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useInvoicesStore } from '@/stores/invoices.store';
import type { TypeInvoiceMy } from '@/types/invoices.type';

import { codeMessage } from '@/utils/codeMessage.util';
import { priceFormat, dateFormat } from '@/utils/formatting.util';

// Хранилище
const invoicesStore = useInvoicesStore();

//
const myInvoices = ref<TypeInvoiceMy[]>();

//
const myGetInvoices = async () => {
  try {
    myInvoices.value = await invoicesStore.myGetInvoices();
  } catch (error) {
    console.log(error);
    codeMessage('Произошла ошибка при получении счетов пользователя', 'error');
  }
};

//
onMounted(async () => {
  await myGetInvoices();
});
</script>

<template>
  <div class="my_invoices">
    <h2>Мои счета</h2>

    <table>
      <thead>
        <tr>
          <th>Сумма</th>
          <th>Дата выставления</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, amount, createdAt } in myInvoices" :key="id">
          <td>{{ priceFormat(amount) }}</td>
          <td>{{ dateFormat(createdAt) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
.my_invoices {
  border-top: 1px solid #ccc;
  padding-top: 30px;
  margin-top: 30px;

  /* h2 */
  h2 {
    font-weight: 600;
    margin-bottom: 30px;
  }

  /* table */
  table {
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
}
</style>
