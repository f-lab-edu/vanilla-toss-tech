import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = (url) => {
  try {
    return instance.get(url).then((res) => res.data);
  } catch (e) {
    console.error('error from apis/index.js :', e);
  }
};
