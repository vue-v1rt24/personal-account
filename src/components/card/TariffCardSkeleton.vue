<script setup lang="ts">
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
</script>

<template>
  <div class="card">
    <div class="card__left">
      <h2>
        <SkeletonLoader width="200px" height="24px" />
      </h2>
      <p>
        <SkeletonLoader height="48px" />
      </p>
    </div>

    <div class="card__right">
      <span class="price"><SkeletonLoader /></span>
      <span class="speed"><SkeletonLoader /></span>
      <span class="speed"><SkeletonLoader /></span>
      <span class="speed"><SkeletonLoader /></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  background-color: white;
  box-shadow: 0 0 10px 0 rgb(200, 200, 200);
  border-radius: 10px;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
}

/*  */

.card__left {
  flex-grow: 1;
  line-height: 24px;

  /* h2 */
  h2 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  /* p */
  p {
    font-size: 16px;
  }
}

/*  */

.card__right {
  width: 120px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  /* a */
  a {
    color: black;
  }
}
</style>
