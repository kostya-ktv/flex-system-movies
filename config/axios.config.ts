import axios from 'axios';
import { AxiosInstance } from 'axios';
import { EnvConfig } from './env.config';

class ApiService {
  public api: AxiosInstance;
  constructor(options: { baseURL: string }) {
    this.api = axios.create({
      baseURL: options.baseURL,
    });

    this.api.interceptors.request.use((req) => {
      const originalRequest = { ...req };

      originalRequest.params = {
        ...originalRequest.params,
        api_key: EnvConfig.MOVIE_API_KEY,
        language: 'en-US',
      };
      return originalRequest;
    });
  }
}
export default ApiService;
