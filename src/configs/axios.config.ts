import axios, { AxiosInstance } from 'axios';
import { setupInterceptorsTo } from './axiosInterceptor.config';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const specificInstance = setupInterceptorsTo(instance);

export default specificInstance;
