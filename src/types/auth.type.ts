export type TypeRegister = {};

//
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
