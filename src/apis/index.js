import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const fetchData = (url) => {
  return instance.get(url);
};

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('error from apis/index.js :', error);
    return Promise.reject(error);
  },
);
