import axios from 'axios';

const baseDomain = 'https://api.safesafe.app';
const baseURL = `${baseDomain}/covid19`;

const Repository = axios.create({ baseURL });

Repository.interceptors.request.use(
  config => {
    config.headers = { Model: 'infermedica-pl' };
    return config;
  },
  error => Promise.reject(error)
);

export default Repository;
