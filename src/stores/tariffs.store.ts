import { defineStore } from 'pinia';
import { fetchData } from '@/utils/fetchData.utils';

import { type TypeTariffsDTO, type TypeTariffs, tariffMapDTO } from '@/types/tariffs.type';

//
export const useTariffsStore = defineStore('tariffs', () => {
  // === Действия
  const getTariffs = async (): Promise<TypeTariffs[]> => {
    try {
      const list = await fetchData<TypeTariffsDTO[]>('tariffs');
      return list !== null ? list.map(tariffMapDTO) : [];
    } catch (error) {
      throw error;
    }
  };

  // ===
  return {
    getTariffs,
  };
});
