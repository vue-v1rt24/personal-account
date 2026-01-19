import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import router from '@/router/index';

import { fetchData } from '@/utils/fetchData.utils';

import {
  USER_ROLES,
  type TypeLogin,
  type TypeUser,
  type TypeUserLoginForm,
} from '@/types/auth.type';

//
export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<TypeUser | null>(null);

    // === Вычисления
    const isUserAuth = computed(() => !!user.value);
    const getToken = computed(() => user.value?.token);
    const getUserEmail = computed(() => user.value?.email);
    const isAdmin = computed(() => user.value?.role === USER_ROLES.ADMIN);
    const userName = computed(() => user.value?.name ?? user.value?.email ?? 'Пользователь');

    // === Действия
    // Получение данных пользователя из БД
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

    // Изменение данных пользователя
    const updateUser = (userData: Pick<TypeUser, 'name' | 'email' | 'address'>) => {
      user.value && (user.value = { ...user.value, ...userData });
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
      getToken,
      getUserEmail,
      isAdmin,
      userName,
      setUser,
      updateUser,
      logout,
    };
  },
  {
    persist: true,
  },
);
