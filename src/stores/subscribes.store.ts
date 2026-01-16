import { defineStore } from 'pinia';

import { fetchData } from '@/utils/fetchData.utils';

import { type TypeSubscribeDTO, type TypeSubscribe, subscribeMapDTO } from '@/types/subscribe.type';

//
export const useSubscribesStore = defineStore('subscribe', () => {
  // Подписаться на тариф (пользователь)
  const subscribeToTariff = async (tariff_id: string): Promise<boolean> => {
    try {
      return await fetchData('subscriptions', 'POST', { tariff_id });
    } catch (error) {
      throw error;
    }
  };

  // Получить свои подписки (пользователь)
  const subscribeList = async (): Promise<TypeSubscribe[]> => {
    try {
      const lists = await fetchData<TypeSubscribeDTO[]>('subscriptions/my');
      return lists ? lists.map(subscribeMapDTO) : [];
    } catch (error) {
      throw error;
    }
  };

  // ===
  return {
    subscribeToTariff,
    subscribeList,
  };
});
