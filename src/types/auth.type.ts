import type { ComputedRef, Ref } from 'vue';

// Данные, приходящие при регистрации
export type TypeRegister = {};

// Данные, приходящие при авторизации
export type TypeLogin = {
  user: {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    address: string;
    role: string;
    created_at: string;
  };
  token: string;
};

// Данные пользователя для использования в приложении
export type TypeUser = {
  id: string;
  name: string | null;
  email: string;
  address: string | null;
  role: string;
  token: string;
};

// Данные из формы на странице входа в систему (Login)
export type TypeUserLoginForm = {
  email: string;
  password: string;
};
