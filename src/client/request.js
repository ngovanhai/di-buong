import axios from 'axios';
import store from '@redux-store/stores';
import { refModalLoading } from '..';

export const HOST = 'http://kh.isofh.vn';

const client = axios.create({
  baseURL: `${HOST}`,
  // withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(async (config) => {
  let state = store.getState();
  let token = state?.auth.auth?.access_token || global.accessToken;
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: token,
    };
  }
  console.log(config);
  return config;
});

client.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.data.code === 401) {
    }
    if (refModalLoading.current) {
      refModalLoading.current.hide();
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 401) {
    } else {
      try {
        if (error?.response?.data?.message) {
          error.message = error.response.data.message;
        }
      } catch (error) {}
    }
    return Promise.reject(error);
  },
);

export { client };
