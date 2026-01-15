<script setup lang="ts">
const {
  width = '100%',
  height = '20px',
  borderRadius = '5px',
} = defineProps<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>();
</script>

<template>
  <div class="skeleton"></div>
</template>

<style lang="css" scoped>
.skeleton {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  background-image: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: skeleton 1.2s linear infinite;
}

@keyframes skeleton {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
</style>
