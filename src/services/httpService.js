import { SignOut } from "@/hooks/Auth";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import React from 'react'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function HttpService () {
  const dispatch = useDispatch()
  SignOut(dispatch)
  return (
    <></>
  )
}

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
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("jwt")}`,
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
  if (error.response.status === 401) {
    await HttpService()
    window.location.href = "auth/login"
  }
  return {
    status: false,
    data: error?.response?.data,
  };
};



