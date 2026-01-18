import type { TypeRole } from '@/types/auth.type';

// Получение текущего профиля
export type TypeProfileDTO = {
  id: string;
  name: string;
  email: string;
  role: TypeRole;
  address: string | null;
  created_at: string;
};

export type TypeProfile = {
  name: string;
  email: string;
  address: string | null;
};

export const profileMapDTO = (dto: TypeProfileDTO): TypeProfile => {
  return {
    name: dto.name,
    email: dto.email,
    address: dto.address ?? '',
  };
};

// Обновление данных текущего профиля
export type TypeProfileUpdateDTO = {
  id: string;
  name: string;
  email: string;
  address: string;
  password_hash: string;
  role: TypeRole;
  created_at: string;
};
