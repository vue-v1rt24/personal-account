import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import router from '@/router/index';

import { fetchData } from '@/utils/fetchData.utils';

import type { TypeLogin, TypeUser, TypeUserLoginForm } from '@/types/auth.type';

//
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<TypeUser | null>(null);

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

    // Выход из учётной записи
    const logout = async () => {
      user.value = null;

      await router.push({
        name: 'login',
        query: {
          code: 'auth',
          redirect: router.currentRoute.value.fullPath,
        },
      });
    };

    // ===
    return {
      user,
      isUserAuth,
      setUser,
      getUserEmail,
      getToken,
      logout,
    };
  },
  {
    persist: true,
  },
);
