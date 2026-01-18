import { useUserStore } from '@/stores/user.store';

//
interface IData {
  headers: {
    [key: string]: string;
  };

  body?: string | FormData;
}

//
export const fetchData = async <T>(
  url: RequestInfo,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  data?: object | FormData,
): Promise<T> => {
  // Хранилище пользователя
  const userStore = useUserStore();

  // Адрес запроса
  const serverUrl = <string>import.meta.env.VITE_API_URL;

  // Заголовки
  let bodyData: IData = {
    headers: {
      Authorization: `Bearer ${userStore.getToken}`,
    },
  };

  if (data) {
    if (data instanceof FormData) {
      bodyData.body = data;
    } else {
      bodyData.headers['Content-Type'] = 'application/json';
      bodyData.body = JSON.stringify(data);
    }
  }

  try {
    const resData = await fetch(`${serverUrl}/${url}`, {
      method,
      ...bodyData,
    });

    const res = await resData.json();

    if (!resData.ok) {
      if (resData.status === 401) {
        userStore.logout();
      }

      throw res;
    }

    return res;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
