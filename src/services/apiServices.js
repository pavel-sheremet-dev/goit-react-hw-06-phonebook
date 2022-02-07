import axios from 'axios';

const BASE_URL = 'https://62015ab3fdf50900172499bb.mockapi.io/v1';
const API_ENDPOINT = '/contacts';

export const getContacts = async () => {
  const res = await axios.get(`${BASE_URL}${API_ENDPOINT}`);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};

export const addContact = async contact => {
  const res = await axios.post(`${BASE_URL}${API_ENDPOINT}`, contact);

  return res.statusText === 'Created'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};

export const deleteContact = async id => {
  const res = await axios.delete(`${BASE_URL}${API_ENDPOINT}/${id}`);
  return res.statusText === 'OK'
    ? res.data
    : Promise.reject(new Error(res.statusText));
};
