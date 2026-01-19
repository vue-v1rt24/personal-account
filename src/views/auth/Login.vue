<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute, type LocationQuery } from 'vue-router';

import { useUserStore } from '@/stores/user.store';

import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

import { isFormValid, hasError } from '@/utils/formValidation.util';
import { codeMessage } from '@/utils/codeMessage.util';

//
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

//
const { redirect, code } = route.query as LocationQuery & {
  redirect: string;
  code: string;
};

//
const formField = reactive({
  email: '',
  password: '',
});

//
const isSubmitted = ref(false);
const isLoading = ref(false);

//
const handlerLogin = async () => {
  isSubmitted.value = true;

  if (!isFormValid(formField)) {
    codeMessage('Заполните все поля', 'warning');
  }

  isLoading.value = true;

  try {
    await userStore.setUser(formField);
    router.push(redirect || '/');
  } catch (error) {
    console.log(error);
  } finally {
    isSubmitted.value = false;
    isLoading.value = false;
  }
};

// Вывод сообщения
const outputMessage = () => {
  if (code === 'auth') {
    codeMessage('Необходимо авторизоваться', 'default');
  }
};

//
onMounted(() => {
  outputMessage();
});
</script>

<template>
  <div class="auth">
    <h1>Вход в учётную запись</h1>

    <form @submit.prevent="handlerLogin">
      <div class="vstack">
        <Input
          type="email"
          v-model="formField.email"
          placeholder="Почта"
          :class="{ error: hasError(formField.email, isSubmitted) }"
        />

        <Input
          type="password"
          v-model="formField.password"
          placeholder="Пароль"
          :class="{ error: hasError(formField.password, isSubmitted) }"
        />
      </div>

      <div class="hstack">
        <Button
          type="submit"
          title="Войти"
          :loading="isLoading"
          :disabled="isLoading"
          class="hstack__btn"
        />

        <div>
          Ещё нет учётной записи?
          <RouterLink :to="{ name: 'register' }" :class="{ disabled_link: isLoading }">
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
  margin: 50px 0;

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

/*  */

.disabled_link {
  pointer-events: none;
}

/*  */

.error {
  border: 1px solid red;
}
</style>
