import { defineStore } from 'pinia';

import { fetchData } from '@/utils/fetchData.utils';

import {
  type TypeInvoiceDTO,
  type TypeInvoice,
  invoiceMapDTO,
  type TypeInvoiceUser,
  type TypeInvoiceMyDTO,
  type TypeInvoiceMy,
  invoiceMyMapDTO,
} from '@/types/invoices.type';

//
export const useInvoicesStore = defineStore('invoice', () => {
  // === Действия
  // Получение всех счётов (может сделать только админ)
  const getInvoiceList = async (): Promise<TypeInvoice[]> => {
    try {
      const lists = await fetchData<TypeInvoiceDTO[]>('invoices');
      return lists ? lists.map(invoiceMapDTO) : [];
    } catch (error) {
      throw error;
    }
  };

  // Создание счёта (может сделать только админ)
  const createInvoice = async (userId: string): Promise<boolean> => {
    try {
      return await fetchData(`invoices/generate/${userId}`, 'POST');
    } catch (error) {
      throw error;
    }
  };

  // Получение счетов пользователей (может сделать только админ)
  const getUsersForInvoice = async (): Promise<TypeInvoiceUser[]> => {
    try {
      return await fetchData<TypeInvoiceUser[]>('invoices/users');
    } catch (error) {
      throw error;
    }
  };

  // Получение своих счетов (может сделать только пользователь). Вывод на странице профиля
  const myGetInvoices = async (): Promise<TypeInvoiceMy[]> => {
    try {
      const res = await fetchData<TypeInvoiceMyDTO[]>('invoices/my');
      return res ? res.map(invoiceMyMapDTO) : [];
    } catch (error) {
      throw error;
    }
  };

  // ===
  return {
    getInvoiceList,
    createInvoice,
    getUsersForInvoice,
    myGetInvoices,
  };
});
