<script setup lang="ts">
import { ref } from 'vue';
import { useInvoicesStore } from '@/stores/invoices.store';
import Button from '@/components/ui/Button.vue';
import { codeMessage } from '@/utils/codeMessage.util';
import type { TypeInvoiceUser } from '@/types/invoices.type';

//
const emit = defineEmits<{
  reloadList: [];
}>();

// Хранилище
const invoicesStore = useInvoicesStore();

// === Создать счёт пользователям
const users = ref<TypeInvoiceUser[]>([]);
const selectValue = ref('');
const isLoadSelect = ref(false);
const isLoading = ref(false);

// Получение пользователей
const fetchUsers = async () => {
  isLoading.value = true;

  try {
    users.value = await invoicesStore.getUsersForInvoice();
    isLoadSelect.value = true;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

// Создание счёта пользователю
const createInvoice = async () => {
  if (!selectValue.value) return;

  isLoading.value = true;

  try {
    await invoicesStore.createInvoice(selectValue.value);
    selectValue.value = '';
    emit('reloadList');
    codeMessage('Счёт готов');
  } catch (error) {
    console.log(error);
    codeMessage('Не удалось выставить счёт');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="invoice_create">
    <template v-if="isLoadSelect">
      <select v-model="selectValue" :disabled="isLoading" name="#">
        <option value="" disabled>Выберите пользователя</option>
        <option v-for="{ id, email } in users" :key="id" :value="id">
          {{ email }}
        </option>
      </select>

      <Button
        :disabled="isLoading || !selectValue"
        :loading="isLoading"
        title="Создать счёт"
        @btn-click="createInvoice"
      />
    </template>

    <Button
      v-if="!isLoadSelect"
      title="Показать список пользователей"
      @btn-click.once="fetchUsers"
      :disabled="isLoading"
      :loading="isLoading"
    />
  </div>
</template>

<style lang="css" scoped>
.invoice_create {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  /* select */
  select {
    font-size: 16px;
    padding: 10px;
  }

  /* button */
  button {
    width: 400px;
  }
}
</style>
