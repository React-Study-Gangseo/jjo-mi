import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const accessInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// accessInstance.interceptors.request.use((config) => {

//   config.headers.Authorization: `JWT ${localStorage.getItem("token")}`,
//   };
//   return config;
// );

accessInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});
