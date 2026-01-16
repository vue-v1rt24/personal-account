<script setup lang="ts">
import { type RouteLocationRaw } from 'vue-router';
import { useUserStore } from '@/stores/user.store';

// Хранилище
const userStore = useUserStore();

// === Ссылки
type TypeLink = {
  to: RouteLocationRaw;
  title: string;
};

// Ссылки для пользователей
const links = [
  {
    to: '/',
    title: 'Главная',
  },
  {
    to: '/subscribe',
    title: 'Мои подписки',
  },
] as const satisfies TypeLink[];

// Ссылки для админов
const linksAdmin = [
  {
    to: '/invoices',
    title: 'Список счетов',
  },
] as const satisfies TypeLink[];
</script>

<template>
  <div class="sidebar">
    <nav class="menu">
      <!-- Ссылки пользователей -->
      <ul class="list">
        <li v-for="{ to, title } in links">
          <RouterLink :to>
            {{ title }}
          </RouterLink>
        </li>

        <!-- Ссылки админов -->
        <template v-if="userStore.isAdmin">
          <hr />

          <li v-for="{ to, title } in linksAdmin">
            <RouterLink :to>
              {{ title }}
            </RouterLink>
          </li>
        </template>
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

  /* hr */
  hr {
    width: 100%;
  }
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
