import axios from 'axios';

export const getUsersDetailsApi = () => {
  const url = 'https://dummyapi.io/data/v1/user';
  axios.defaults.headers.get['app-id'] = '61791c58e95024796ca3bed5';
  return axios.get(url);
};
