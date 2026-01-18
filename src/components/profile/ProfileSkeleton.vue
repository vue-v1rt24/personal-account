<script setup lang="ts">
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
</script>

<template>
  <form class="profile_form">
    <label v-for="key in 3" :key="key">
      <SkeletonLoader width="80px" height="16px" />
      <SkeletonLoader height="40px" />
    </label>

    <SkeletonLoader height="30px" />
  </form>
</template>

<style lang="css" scoped>
.profile_form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  /* label */
  label {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
