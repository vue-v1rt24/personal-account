<script setup lang="ts">
import Loading from '@/components/images/Loading.vue';

//
const { type = 'button', btnClass = 'primary' } = defineProps<{
  title: string;
  type?: 'button' | 'submit';
  btnClass?: 'primary';
  loading?: boolean;
}>();

//
const emit = defineEmits<{
  btnClick: [];
}>();
</script>

<template>
  <button :type :disabled="loading" @click="emit('btnClick')" :class="['btn', btnClass]">
    {{ title }}

    <span v-if="loading" class="btn_loading">
      <Loading size="20px" color="white" thickness="46" />
    </span>
  </button>
</template>

<style lang="css" scoped>
.btn {
  position: relative;
  font-family: inherit;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: var(--transition);

  /* disabled */
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  /* primary */
  &.primary {
    color: white;
    background-color: var(--primary);

    /* hover */
    &:hover:not(:disabled) {
      background-color: hsl(from var(--primary) h s calc(l * 0.8));
    }
  }
}

/*  */

.btn_loading {
  position: absolute;
  margin-left: 20px;
}
</style>
