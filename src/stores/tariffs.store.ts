import { defineStore } from 'pinia';
import { fetchUtil } from '@/utils/fetchUtil';

import { type TypeTariffsDTO, type TypeTariffs, tariffMapDTO } from '@/types/tariffs.type';

//
export const useTariffsStore = defineStore('tariffs', () => {
  // === Действия
  const getTariffs = async (): Promise<TypeTariffs[]> => {
    try {
      const list = await fetchUtil<TypeTariffsDTO[]>('tariffs');
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
