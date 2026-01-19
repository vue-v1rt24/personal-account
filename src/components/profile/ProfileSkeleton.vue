<script setup lang="ts">
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
</script>

<template>
  <div>
    <form class="profile_form">
      <label v-for="key in 3" :key="key">
        <SkeletonLoader width="80px" height="16px" />
        <SkeletonLoader height="40px" />
      </label>

      <SkeletonLoader height="30px" />
    </form>

    <div class="my_invoices">
      <h2>Мои счета</h2>

      <table>
        <thead>
          <tr>
            <th>Сумма</th>
            <th>Дата выставления</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="key in 3" :key>
            <td><SkeletonLoader height="16px" /></td>
            <td><SkeletonLoader height="16px" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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

/*  */

.my_invoices {
  border-top: 1px solid #ccc;
  padding-top: 30px;
  margin-top: 30px;

  /* h2 */
  h2 {
    font-weight: 600;
    margin-bottom: 30px;
  }

  /* table */
  table {
    width: 100%;

    /* th, td */
    th,
    td {
      text-align: center;
      border: 1px solid grey;
      padding: 10px;
    }

    th {
      font-weight: bold;
    }
  }
}
</style>
