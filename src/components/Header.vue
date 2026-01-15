<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="logo">Сервисный центр</div>

    <ul class="header__links">
      <li>Привет, пользователь</li>
      <li>
        <RouterLink to="/">Профиль</RouterLink>
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
