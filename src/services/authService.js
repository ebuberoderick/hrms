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
    .catch(getErrorResponse);

export const employeeInvite = (formData) =>
  apiWithAuth
    .post("/admin/invite", formData)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const verifyCode = (formData) =>
  apiWithAuth
    .post("/admin/verify-access-code", formData)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const createPassword = (formData, additionalData) => {
  const mergedFormData = { ...formData, ...additionalData };
  return apiWithAuth
    .post("/admin/reset-password", mergedFormData)
    .then(getApiResponse)
    .catch(getErrorResponse);
};
