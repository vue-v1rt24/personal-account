<script setup lang="ts">
import Header from '@/components/Header.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
</script>

<template>
  <div class="main_wrap">
    <Sidebar />

    <!--  -->
    <main class="main">
      <Header />

      <!--  -->
      <RouterView />
    </main>
  </div>
</template>

<style lang="css" scoped>
.main_wrap {
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
