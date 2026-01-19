import { defineStore } from 'pinia';
import { useUserStore } from './user.store';

import { fetchData } from '@/utils/fetchData.utils';

import {
  type TypeProfileDTO,
  type TypeProfile,
  profileMapDTO,
  type TypeProfileUpdateDTO,
} from '@/types/profile.type';

//
export const useProfileStore = defineStore('profile', () => {
  // === Хранилище
  const userStore = useUserStore();

  // === Действия

  // Получить профиль текущего пользователя
  const getProfile = async (): Promise<TypeProfile | null> => {
    try {
      const profile = await fetchData<TypeProfileDTO>('profile');
      return profile ? profileMapDTO(profile) : null;
    } catch (error) {
      throw error;
    }
  };

  // Обновление профиля пользователя
  const updateProfile = async (fields: TypeProfile): Promise<TypeProfile | null> => {
    try {
      const dataProfile = await fetchData<TypeProfileUpdateDTO>('profile', 'PUT', fields);

      if (dataProfile) {
        const profile = profileMapDTO(dataProfile);
        userStore.updateUser(profile);
        return profile;
      }

      return null;
    } catch (error) {
      throw error;
    }
  };

  // ===
  return {
    getProfile,
    updateProfile,
  };
});
