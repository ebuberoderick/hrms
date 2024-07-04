import axios from "axios";
import Cookies from "js-cookie";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const timeoutConfig = {
  timeout: 30000,
  timeoutErrorMessage: "Server taking too long to respond. Try again.",
};

export const apiWithOutAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  ...timeoutConfig,
});

export const apiWithAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  
  headers: {
    Accept: "application/json",
    'Cache-Control': 'no-cache',
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.HRMS_JWT}`,
  },
  ...timeoutConfig,
});

export const getApiResponse = (data) => {
  // errors
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = async (error) => {
  // if (error.response.status === 401) {
  //   Cookies.remove('jwt')
  // }
  return {
    status: false,
    data: error?.response?.data,
  };
};



