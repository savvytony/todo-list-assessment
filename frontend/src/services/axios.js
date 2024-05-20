import axios from "axios";
import store from "../store";

const axiosService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosService.interceptors.request.use(
  (config) => {
    const token = store.getters['auth/getToken']

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosService;
