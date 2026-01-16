<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404 — Страница не найдена</h1>
    <p>К сожалению, запрашиваемая вами страница не существует.</p>
    <RouterLink to="/">Вернуться на главную</RouterLink>
  </div>
</template>

<style lang="css" scoped>
.not-found {
  line-height: 2;
  text-align: center;
  margin-top: 100px;

  /* a */
  a {
    text-decoration: underline;
  }
}
</style>
