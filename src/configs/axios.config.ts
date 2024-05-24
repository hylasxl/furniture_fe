import axios, { AxiosInstance } from 'axios';
import { setupInterceptorsTo } from './axiosInterceptor.config';
import { API_ROOT } from '../utils/constants';

const instance: AxiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true
});

const specificInstance = setupInterceptorsTo(instance);

export default specificInstance;
