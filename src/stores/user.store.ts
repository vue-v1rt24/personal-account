import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { fetchData } from '@/utils/fetchData.utils';

import type { TypeLogin, TypeUser, TypeUserLoginForm } from '@/types/auth.type';

//
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<TypeUser>();

    // === Вычисления
    const isUserAuth = computed(() => !!user.value);
    const getToken = computed(() => user.value?.token);
    const getUserEmail = computed(() => user.value?.email);

    // === Действия
    const setUser = async (userData: TypeUserLoginForm) => {
      try {
        const {
          user: { id, name, email, address, role },
          token,
        } = await fetchData<TypeLogin>('auth/login', 'POST', userData);

        user.value = { id, name, email, address, role, token };
      } catch (error) {
        throw error;
      }
    };

    /* const getUserEmail = () => {
      if (!user.value?.email) {
        throw new Error('Пользователь не авторизован');
      }

      return user.value.email;
    }; */

    /* const getToken = () => {
      if (!user.value?.token) {
        throw new Error('Пользователь не авторизован');
      }

      return user.value.token;
    }; */

    // ===
    return {
      user,
      isUserAuth,
      setUser,
      getUserEmail,
      getToken,
    };
  },
  {
    persist: true,
  },
);
