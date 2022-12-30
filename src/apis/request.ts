import type {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

// import { ACCESS_TOKEN } from "src/configs/auth";
import axios from "axios";

const TIMEOUT_MS = 30000;

interface RequestProps {
  method: "get" | "post" | "put" | "delete" | "patch";
  url: string;
  queryParams?: object | null;
  body?: object | null;
  headers?: AxiosRequestHeaders;
  isMultipart?: boolean;
  responseType?: any;
  isLogin?: boolean;
}

const axiosInstance = axios.create();

export default function request<S = any>({
  method,
  url,
  queryParams,
  body,
  headers,
  isMultipart = false,
  responseType,
  isLogin = false,
}: RequestProps): Promise<AxiosResponse<S, any>> {
  // config 초기값 설정
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
      // "Cache-Control": "no-cache", // [보안성 테스트 필수 코드] 브라우저의 서버 응답 캐시여부를
      // 개발자가 결정 (캐시 컨트롤 필수)
    },
  };
  config.timeout = TIMEOUT_MS;

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers,
    };
  }

  if (isMultipart) {
    config.headers = {
      ...config.headers,
      "content-type": "multipart/form-data",
    };
  }

  if (queryParams) {
    config.params = {
      ...config.params,
      ...queryParams,
    };
  }
  if (responseType) {
    config.responseType = responseType;
  }

  //   if (isLogin === false) {
  //     const token = window.localStorage.getItem(ACCESS_TOKEN);

  //     if (token !== null) {
  //       config.headers = {
  //         ...config.headers,
  //         Authorization: `Bearer ${token}`,
  //       };
  //     }
  //   }

  switch (method) {
    case "get":
      return axiosInstance.get(url, config);
    case "post":
      return axiosInstance.post(url, body, config);
    case "put":
      return axiosInstance.put(url, body, config);
    case "delete":
      return axiosInstance.delete(url, config);
    case "patch":
      return axiosInstance.patch(url, body, config);
    default:
      return axiosInstance.get(url, config);
  }
}
