<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

import { fetchUtil } from '@/utils/fetchUtil';

import { isFormValid } from '@/utils/isFormValid.util';

//
const router = useRouter();

//
const formField = reactive({
  name: 'Иван Иванов',
  email: 'user@example.com',
  password: '123',
  address: 'Москва',
});

//
const handlerRegister = async () => {
  if (!isFormValid(formField)) {
    return alert('Заполните все поля');
  }

  try {
    const res = await fetchUtil('auth/register', 'POST', formField);
    console.log(res);

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="auth">
    <h1>Регистрация</h1>

    <form @submit.prevent="handlerRegister">
      <div class="vstack">
        <Input v-model="formField.name" placeholder="Имя" />
        <Input type="email" v-model="formField.email" placeholder="Почта" />
        <Input type="password" v-model="formField.password" placeholder="Пароль" />
        <Input v-model="formField.address" placeholder="Адрес" />
      </div>

      <div class="hstack">
        <Button type="submit" title="Зарегистрироваться" class="hstack__btn" />

        <div>
          Уже есть учётная запись?
          <RouterLink :to="{ name: 'login' }">
            <Button title="Войти" />
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
