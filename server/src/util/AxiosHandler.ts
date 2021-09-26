import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const CreateAxiosInstance = (navigation?: any, accessToken?: string) => {
  let apiHandler: AxiosInstance = axios.create({
    baseURL: "https://api.nostramap.com/Service/",
  });

  apiHandler.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError<any>) => {
      return Promise.reject(error);
    }
  );

  apiHandler.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return apiHandler;
};

export { CreateAxiosInstance };
