type TypeRole = 'user' | 'admin';

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
    role: TypeRole;
    created_at: string;
  };
  token: string;
};

// Данные пользователя для использования в приложении
export type TypeUser = {
  id: string;
  name?: string;
  email: string;
  address?: string;
  role: TypeRole;
  token: string;
};

// Данные из формы на странице входа в систему (Login)
export type TypeUserLoginForm = {
  email: string;
  password: string;
};
