import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);


export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("/admin/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("/admin/verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);

export const fetchEmployee = () => apiWithAuth.get("api/users/staff").then(getApiResponse).catch(getErrorResponse);
export const fetchUsers = () => apiWithAuth.get("api/admin/users").then(getApiResponse).catch(getErrorResponse);


