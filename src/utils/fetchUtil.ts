// import router from '@/router';
// import {store} from '../store'; // для хранилища(store) сделана типизация, поэтому store импортируем так

const serverUrl = <string>import.meta.env.VITE_API_URL;
// const tokenEnv = <string>import.meta.env.VITE_TOKEN; // записано название, которое записываем в localStorage и в него помещаем токен

interface IData {
  headers: {
    [key: string]: string;
  };

  body?: string | FormData;
}

//
export const fetchUtil = async <T>(
  url: RequestInfo,
  method: 'GET' | 'POST' = 'GET',
  data?: object | FormData,
): Promise<T> => {
  const TOKEN = ''; // localStorage.getItem(tokenEnv);

  let bodyData: IData = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
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
        // await router.push({ name: 'Login', query: { message: 'notAuthorized' } });
        // store.commit('auth/logout');
      }

      throw res;
    }

    return res;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
