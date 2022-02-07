import axios from 'axios';

const BASE_URL = 'https://62015ab3fdf50900172499bb.mockapi.io/v1/';
const API_ENDPOINT = 'contacts';

export const getData = async () => {
  const res = await axios.get(`${BASE_URL}${API_ENDPOINT}`);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};
