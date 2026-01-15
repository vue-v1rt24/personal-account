import { useToast } from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const codes = {
  auth: 'Необходимо авторизоваться',
  notEmptyFields: 'Заполните все поля',
};

export type TypeCodes = keyof typeof codes;
type TypeToast = 'success' | 'error' | 'warning' | 'info' | 'default';

export const codeMessage = (code: TypeCodes, type: TypeToast = 'success') => {
  const $toast = useToast();

  $toast.open({
    message: codes[code] || 'Неизвестный код',
    type,
  });

  // $toast[type](codes[code] || 'Неизвестный код');
  // let instance = $toast.success(codes[code] || 'Неизвестный код');

  // Принудительно отклонить конкретное уведомление
  // instance.dismiss();

  // Немедленно закрыть все открытые уведомления
  // $toast.clear();
};
