import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);

export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("admin/employee/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);
export const adminadduser = (formData) => apiWithAuth.post("/adminadduser", formData).then(getApiResponse).catch(getErrorResponse);



export const fetchUsers = () => apiWithAuth.post("admin/user/fetch_user").then(getApiResponse).catch(getErrorResponse);
export const fetchAllUsers = () => apiWithAuth.post("admin/user/fetch_all_user").then(getApiResponse).catch(getErrorResponse);

export const addEmploye = (formData) => apiWithAuth.post("admin/employee/add_new_employee",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchEmployee = () => apiWithAuth.post("admin/employee/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllEmployee = () => apiWithAuth.post("admin/employee/fetch_all").then(getApiResponse).catch(getErrorResponse);

export const verifyBVN = (formData) => apiWithAuth.post("verify_bvn",formData).then(getApiResponse).catch(getErrorResponse);
export const verifyNIN = (formData) => apiWithAuth.post("verify_nin",formData).then(getApiResponse).catch(getErrorResponse);
export const updateBVN = (formData) => apiWithAuth.post("update_bvn",formData).then(getApiResponse).catch(getErrorResponse);
export const updateNIN = (formData) => apiWithAuth.post("update_nin",formData).then(getApiResponse).catch(getErrorResponse);


export const addLocation = (formData) => apiWithAuth.post("admin/organization/location/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchLocation = () => apiWithAuth.post("admin/organization/location/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllLocation = () => apiWithAuth.post("admin/organization/location/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addCompany = (formData) => apiWithAuth.post("admin/organization/company/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCompanies = () => apiWithAuth.post("admin/organization/company/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllCompanies = () => apiWithAuth.post("admin/organization/company/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addDepartment = (formData) => apiWithAuth.post("admin/organization/department/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDepartment = () => apiWithAuth.post("admin/organization/department/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllDepartment = () => apiWithAuth.post("admin/organization/department/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addAnnouncements = (formData) => apiWithAuth.post("admin/organization/announcements/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAnnouncements = () => apiWithAuth.post("admin/organization/announcements/fetch").then(getApiResponse).catch(getErrorResponse);


export const addPolicy = (formData) => apiWithAuth.post("admin/organization/policy/create",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPolicy = () => apiWithAuth.post("admin/organization/policy/fetch").then(getApiResponse).catch(getErrorResponse);


