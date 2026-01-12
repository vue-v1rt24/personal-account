<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

import { fetchUtil } from '@/utils/fetchUtil';

import { isFormValid } from '@/utils/isFormValid.util';

import type { TypeLogin } from '@/types/auth.type';

//
const router = useRouter();

//
const formField = reactive({
  email: 'user2@example.com',
  password: '123',
});

//
const handlerLogin = async () => {
  if (!isFormValid(formField)) {
    return alert('Заполните все поля');
  }

  try {
    const res = await fetchUtil<TypeLogin>('auth/login', 'POST', formField);
    console.log(res);

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="auth">
    <h1>Вход в учётную запись</h1>

    <form @submit.prevent="handlerLogin">
      <div class="vstack">
        <Input type="email" v-model="formField.email" placeholder="Почта" />
        <Input type="password" v-model="formField.password" placeholder="Пароль" />
      </div>

      <div class="hstack">
        <Button type="submit" title="Войти" class="hstack__btn" />

        <div>
          Ещё нет учётной записи?
          <RouterLink :to="{ name: 'register' }">
            <Button title="Зарегистрироваться" />
          </RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped>
.auth {
  width: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 10px 0 #ccc;

  /* h1 */
  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}

/*  */

.vstack {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 20px;
}

/*  */

.hstack {
  font-size: 14px;

  /* button */
  .hstack__btn {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
