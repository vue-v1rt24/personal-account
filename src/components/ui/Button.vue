<script setup lang="ts">
const { type = 'button', btnClass = 'primary' } = defineProps<{
  title: string;
  type?: 'button' | 'submit';
  btnClass?: 'primary';
}>();

//
const emit = defineEmits<{
  btnEvent: [];
}>();
</script>

<template>
  <button :type @click="emit('btnEvent')" :class="['btn', btnClass]">
    {{ title }}
  </button>
</template>

<style lang="css" scoped>
.btn {
  font-family: inherit;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: var(--transition);

  /* primary */
  &.primary {
    color: white;
    background-color: var(--primary);

    /* hover */
    &:hover {
      background-color: hsl(from var(--primary) h s calc(l * 0.8));
    }
  }
}
</style>
