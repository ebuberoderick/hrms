import {
  apiWithAuth,
  apiWithOutAuth,
  getApiResponse,
  getErrorResponse,
} from "./httpService";

export const Applogin = (formData) =>
  apiWithOutAuth
    .post("/login", formData)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const updateProfile = (formData) =>
  apiWithAuth
    .post("/user/profile/update-profile", formData)
    .then(getApiResponse)
    .catch(getErrorResponse)
