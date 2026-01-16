<script setup lang="ts">
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
</script>

<template>
  <tr>
    <td><SkeletonLoader /></td>
    <td><SkeletonLoader /></td>
    <td><SkeletonLoader /></td>
    <td><SkeletonLoader /></td>
  </tr>
</template>

<style lang="css" scoped>
td {
  text-align: center;
  border: 1px solid grey;
  padding: 10px;
}
</style>
