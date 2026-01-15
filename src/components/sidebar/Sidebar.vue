<script setup lang="ts">
import { type RouteLocationRaw } from 'vue-router';

type TypeLink = {
  to: RouteLocationRaw;
  title: string;
};

const links = [
  {
    to: '/',
    title: 'Главная',
  },
] as const satisfies TypeLink[];
</script>

<template>
  <div class="sidebar">
    <nav class="menu">
      <ul class="list">
        <li v-for="{ to, title } in links">
          <RouterLink :to>
            {{ title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.sidebar {
  font-size: 16px;
  color: white;
  background-color: #242424;
  border-right: 1px solid #ccc;
}

/*  */

.menu {
  position: sticky;
  top: 0;

  height: 100vh;
}

/*  */
.list {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 60px 0;
  overscroll-behavior-y: contain;

  /*  */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(76, 76, 76);
    border-radius: 10px;
  }

  /* a */
  a {
    display: block;
    padding: 0 20px;
  }
}
</style>
