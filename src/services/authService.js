import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);


export const fetchemploy = () => apiWithAuth.get("/admin/users-employee").then(getApiResponse).catch(getErrorResponse);



export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("admin/employee/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("/admin/verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);
export const adminadduser = (formData) => apiWithAuth.post("/adminadduser", formData).then(getApiResponse).catch(getErrorResponse);

export const fetchEmployee = () => apiWithAuth.post("admin/employee/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchUsers = () => apiWithAuth.get("/admin/users").then(getApiResponse).catch(getErrorResponse);



export const fetchTravels = () => apiWithAuth.get("/admin/travels").then(getApiResponse).catch(getErrorResponse);
export const addTravel = (formData) => apiWithAuth.post("/admin/travels",formData).then(getApiResponse).catch(getErrorResponse);



export const fetchComplaints = () => apiWithAuth.get("/admin/complaints").then(getApiResponse).catch(getErrorResponse);
export const addComplaint = (formData) => apiWithAuth.post("/admin/complaints",formData).then(getApiResponse).catch(getErrorResponse);



export const fetchAwards = () => apiWithAuth.get("/admin/awards").then(getApiResponse).catch(getErrorResponse);
export const addAward = (formData) => apiWithAuth.post("/admin/awards",formData).then(getApiResponse).catch(getErrorResponse);



export const fetchQueries = () => apiWithAuth.get("/admin/queries").then(getApiResponse).catch(getErrorResponse);
export const addQuery = (formData) => apiWithAuth.post("/admin/queries",formData).then(getApiResponse).catch(getErrorResponse);



export const fetchResignations = () => apiWithAuth.get("/admin/resignations").then(getApiResponse).catch(getErrorResponse);
export const addResignation = (formData) => apiWithAuth.post("/admin/resignations",formData).then(getApiResponse).catch(getErrorResponse);



export const fetchTerminations = () => apiWithAuth.get("/admin/terminations").then(getApiResponse).catch(getErrorResponse);
export const addTermination = (formData) => apiWithAuth.post("/admin/terminations",formData).then(getApiResponse).catch(getErrorResponse);

