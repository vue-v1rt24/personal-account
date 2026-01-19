<script setup lang="ts">
import Logout from '@/components/images/Logout.vue';
import { useUserStore } from '@/stores/user.store';

//
const userStore = useUserStore();
</script>

<template>
  <header class="header">
    <div class="logo">Сервисный центр</div>

    <ul class="header__links">
      <li>Привет, {{ userStore.userName }}</li>
      <li>
        <RouterLink :to="{ name: 'profile' }">Профиль</RouterLink>
      </li>
      <li>
        <a @click.prevent="userStore.logout()" href="#">
          <Logout />
        </a>
      </li>
    </ul>
  </header>
</template>

<style lang="css" scoped>
.header {
  position: sticky;
  top: 0;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
}

/*  */

.logo {
  font-size: 20px;
  font-weight: 600;
}

/*  */

.header__links {
  font-size: 14px;
  display: flex;
  align-items: center;
  column-gap: 20px;
}
</style>
