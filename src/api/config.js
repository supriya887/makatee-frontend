import { API_URL } from "@/lib/constants";
import { store } from "@/store";
import axios from "axios";
import Cookies from "js-cookie";

const axiosConfig = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    // config.headers["currency-id"] = store.getState().app.currencyId;

    const token = Cookies.get("makatee-access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
