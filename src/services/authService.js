import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);

export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("admin/employee/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("/admin/verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);
export const adminadduser = (formData) => apiWithAuth.post("/adminadduser", formData).then(getApiResponse).catch(getErrorResponse);



export const fetchEmployee = () => apiWithAuth.post("admin/employee/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllEmployee = () => apiWithAuth.post("admin/employee/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const fetchUsers = () => apiWithAuth.get("/admin/users").then(getApiResponse).catch(getErrorResponse);

export const addLocation = (formData) => apiWithAuth.post("admin/organization/location/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchLocation = () => apiWithAuth.post("admin/organization/location/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllLocation = () => apiWithAuth.post("admin/organization/location/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addCompany = (formData) => apiWithAuth.post("admin/organization/company/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCompanies = () => apiWithAuth.post("admin/organization/company/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllCompanies = () => apiWithAuth.post("admin/organization/company/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addDepartment = (formData) => apiWithAuth.post("admin/organization/department/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDepartment = () => apiWithAuth.post("admin/organization/department/fetch").then(getApiResponse).catch(getErrorResponse);
