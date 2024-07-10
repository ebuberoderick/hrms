import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);

export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("admin/employee/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);
export const adminadduser = (formData) => apiWithAuth.post("/adminadduser", formData).then(getApiResponse).catch(getErrorResponse);



export const fetchUsers = () => apiWithAuth.post("admin/user/fetch_user").then(getApiResponse).catch(getErrorResponse);
export const fetchAllUsers = () => apiWithAuth.post("admin/user/fetch_all_user").then(getApiResponse).catch(getErrorResponse);

export const addEmploye = (formData) => apiWithAuth.post("admin/employee/add_new_employee", formData).then(getApiResponse).catch(getErrorResponse);
export const updateEmployeeInfo = (formData) => apiWithAuth.post("employee/employee_update_info", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchEmployee = () => apiWithAuth.post("admin/employee/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllEmployee = () => apiWithAuth.post("admin/employee/fetch_all").then(getApiResponse).catch(getErrorResponse);

export const fetchBanks = () => apiWithAuth.post("employee/paystack_bank").then(getApiResponse).catch(getErrorResponse);
export const verifyBanksDetails = (formData) => apiWithAuth.post("employee/fetch_account_name", formData).then(getApiResponse).catch(getErrorResponse);
export const saveBankInfo = (formData) => apiWithAuth.post("employee/save_bank_account", formData).then(getApiResponse).catch(getErrorResponse);


export const verifyBVN = (formData) => apiWithAuth.post("verify_bvn", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyNIN = (formData) => apiWithAuth.post("verify_nin", formData).then(getApiResponse).catch(getErrorResponse);
export const updateBVN = (formData) => apiWithAuth.post("employee/update_bvn", formData).then(getApiResponse).catch(getErrorResponse);
export const updateNIN = (formData) => apiWithAuth.post("employee/update_nin", formData).then(getApiResponse).catch(getErrorResponse);


export const addLocation = (formData) => apiWithAuth.post("admin/organization/location/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchLocation = () => apiWithAuth.post("admin/organization/location/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllLocation = () => apiWithAuth.post("admin/organization/location/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addCompany = (formData) => apiWithAuth.post("admin/organization/company/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCompanies = () => apiWithAuth.post("admin/organization/company/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllCompanies = () => apiWithAuth.post("admin/organization/company/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addDepartment = (formData) => apiWithAuth.post("admin/organization/department/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDepartment = () => apiWithAuth.post("admin/organization/department/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllDepartment = () => apiWithAuth.post("admin/organization/department/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addQuery = (formData) => apiWithAuth.post("admin/corehr/warning/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchQuery = () => apiWithAuth.post("admin/corehr/warning/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchQueryType = () => apiWithAuth.post("admin/corehr/warning/fetch_types").then(getApiResponse).catch(getErrorResponse);


export const addAnnouncements = (formData) => apiWithAuth.post("admin/organization/announcements/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAnnouncements = () => apiWithAuth.post("admin/organization/announcements/fetch").then(getApiResponse).catch(getErrorResponse);


export const addPolicy = (formData) => apiWithAuth.post("admin/organization/policy/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPolicy = () => apiWithAuth.post("admin/organization/policy/fetch").then(getApiResponse).catch(getErrorResponse);




export const addPromotion = (formData) => apiWithAuth.post("admin/corehr/promotion/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPromotion = () => apiWithAuth.post("admin/corehr/promotion/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllPromotion = () => apiWithAuth.post("admin/corehr/promotion/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addAward = (formData) => apiWithAuth.post("admin/corehr/award/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAwardTypes = () => apiWithAuth.post("admin/corehr/award/fetch_types").then(getApiResponse).catch(getErrorResponse);
export const fetchAward = () => apiWithAuth.post("admin/corehr/award/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllAward = () => apiWithAuth.post("admin/corehr/award/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addTermination = (formData) => apiWithAuth.post("admin/corehr/termination/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchTerminationType = () => apiWithAuth.post("admin/corehr/termination/fetch_types").then(getApiResponse).catch(getErrorResponse);
export const fetchTermination = () => apiWithAuth.post("admin/corehr/termination/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllTermination = () => apiWithAuth.post("admin/corehr/termination/fetch_all").then(getApiResponse).catch(getErrorResponse);



export const addTravel = (formData) => apiWithAuth.post("admin/corehr/travel/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchTravelTypes = () => apiWithAuth.post("admin/corehr/travel/fetch_types").then(getApiResponse).catch(getErrorResponse);
export const fetchTravel = () => apiWithAuth.post("admin/corehr/travel/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllTravel = () => apiWithAuth.post("admin/corehr/travel/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addTransfer = (formData) => apiWithAuth.post("admin/corehr/transfer/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchTransfer = () => apiWithAuth.post("admin/corehr/transfer/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllTransfer = () => apiWithAuth.post("admin/corehr/transfer/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addResignation = (formData) => apiWithAuth.post("admin/corehr/resignation/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchResignation = () => apiWithAuth.post("admin/corehr/resignation/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllResignation = () => apiWithAuth.post("admin/corehr/resignation/fetch_all").then(getApiResponse).catch(getErrorResponse);