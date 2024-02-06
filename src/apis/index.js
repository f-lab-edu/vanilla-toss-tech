const BASE_URL = '/api';

export const fetchData = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const data = await response.json();
  console.log(data);
  return data;
};
