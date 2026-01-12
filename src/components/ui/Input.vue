<script setup lang="ts">
const { type = 'text' } = defineProps<{
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
}>();

const modelValue = defineModel({ required: true });
</script>

<template>
  <input v-model="modelValue" :type name="#" :placeholder class="inp" />
</template>

<style lang="css" scoped>
.inp {
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
}
</style>
