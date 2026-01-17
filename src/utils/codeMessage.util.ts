import { useToast } from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

type TypeToast = 'success' | 'error' | 'warning' | 'info' | 'default';

export const codeMessage = (text: string, type: TypeToast = 'success') => {
  const $toast = useToast();

  $toast.open({
    message: text,
    type,
  });

  // $toast[type](text);
  // let instance = $toast.success(text);

  // Принудительно отклонить конкретное уведомление
  // instance.dismiss();

  // Немедленно закрыть все открытые уведомления
  // $toast.clear();
};
