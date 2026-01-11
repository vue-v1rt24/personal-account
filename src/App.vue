<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Main from '@/layouts/Main.vue';
import Auth from '@/layouts/Auth.vue';

//
const route = useRoute();

//
const layout = computed(() => {
  const component = route.meta.layout;

  if (component) {
    return component === 'Main' ? Main : Auth;
  }

  return null;
});
</script>

<template>
  <component v-if="layout" :is="layout" />
</template>

<style scoped></style>
