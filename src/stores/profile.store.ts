import { defineStore } from 'pinia';

import { fetchData } from '@/utils/fetchData.utils';

import {
  type TypeProfileDTO,
  type TypeProfile,
  profileMapDTO,
  type TypeProfileUpdateDTO,
} from '@/types/profile.type';

//
export const useProfileStore = defineStore('profile', () => {
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
      const profile = await fetchData<TypeProfileUpdateDTO>('profile', 'PUT', fields);
      return profile ? profileMapDTO(profile) : null;
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
