import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyOtp = (formData) => apiWithOutAuth.post("/recover/verify_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const resendOtp = (formData) => apiWithOutAuth.post("/recover/resend_otp", formData).then(getApiResponse).catch(getErrorResponse);

export const fetchMyData = (formData) => apiWithAuth.post("admin/employee/verification/fetch_my_data", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyMyData = (formData) => apiWithAuth.post("admin/employee/verification/employee_verify_data", formData).then(getApiResponse).catch(getErrorResponse);


export const updateProfile = (formData) => apiWithAuth.post("/add-employee", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeInvite = (formData) => apiWithAuth.post("admin/employee/invite", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyCode = (formData) => apiWithAuth.post("verify-access-code", formData).then(getApiResponse).catch(getErrorResponse);
export const adminadduser = (formData) => apiWithAuth.post("/adminadduser", formData).then(getApiResponse).catch(getErrorResponse);
export const employeeBulkUpload = (formData) => apiWithAuth.post("/admin/employee/employee_bulk_upload", formData).then(getApiResponse).catch(getErrorResponse);


export const fetchUsers = (formData) => apiWithAuth.post("admin/user/fetch_user",formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllUsers = () => apiWithAuth.post("admin/user/fetch_all_user").then(getApiResponse).catch(getErrorResponse);
export const chcekVerification = () => apiWithAuth.post("admin/employee/verification/chect_my_verification").then(getApiResponse).catch(getErrorResponse);

export const addEmploye = (formData) => apiWithAuth.post("admin/employee/add_new_employee", formData).then(getApiResponse).catch(getErrorResponse);
export const updateEmployeeInfo = (formData) => apiWithAuth.post("employee/employee_update_info", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchEmployee = (formData) => apiWithAuth.post("admin/employee/fetch",formData).then(getApiResponse).catch(getErrorResponse);
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
export const updateCompanyData = (formData) => apiWithAuth.post("admin/organization/company/update", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCompanies = () => apiWithAuth.post("admin/organization/company/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllCompanies = () => apiWithAuth.post("admin/organization/company/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addDepartment = (formData) => apiWithAuth.post("admin/organization/department/create", formData).then(getApiResponse).catch(getErrorResponse);
export const updateDepartment = (formData) => apiWithAuth.post("admin/organization/department/update", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDepartment = () => apiWithAuth.post("admin/organization/department/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllDepartment = () => apiWithAuth.post("admin/organization/department/fetch_all").then(getApiResponse).catch(getErrorResponse);

export const fetchAuditTrails = () => apiWithAuth.post("admin/aduit/fetch").then(getApiResponse).catch(getErrorResponse);

export const payrollSchedule = (formData) => apiWithAuth.post("admin/payroll/payroll_schedule/create", formData).then(getApiResponse).catch(getErrorResponse);


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


export const addComplaint = (formData) => apiWithAuth.post("admin/corehr/complaint/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchComplaint = () => apiWithAuth.post("admin/corehr/complaint/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllComplaint = () => apiWithAuth.post("admin/corehr/transfer/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const addResignation = (formData) => apiWithAuth.post("admin/corehr/resignation/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchResignation = () => apiWithAuth.post("admin/corehr/resignation/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAllResignation = () => apiWithAuth.post("admin/corehr/resignation/fetch_all").then(getApiResponse).catch(getErrorResponse);


export const createJobTitle = (formData) => apiWithAuth.post("admin/payroll/job_title/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchJobTitle = (formData) => apiWithAuth.post("admin/payroll/job_title/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateJobTitle = (formData) => apiWithAuth.post("admin/payroll/job_title/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createAllowanceDefinition = (formData) => apiWithAuth.post("admin/payroll/allowance_definition/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllowanceDefinition = (formData) => apiWithAuth.post("admin/payroll/allowance_definition/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateAllowanceDefinition = (formData) => apiWithAuth.post("admin/payroll/allowance_definition/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createDeductionDefinition = (formData) => apiWithAuth.post("admin/payroll/deduction_definition/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDeductionDefinition = (formData) => apiWithAuth.post("admin/payroll/deduction_definition/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateDeductionDefinition = (formData) => apiWithAuth.post("admin/payroll/deduction_definition/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createGradeLevel = (formData) => apiWithAuth.post("admin/payroll/grade_level/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchGradeLevel = (formData) => apiWithAuth.post("admin/payroll/grade_level/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateGradeLevel = (formData) => apiWithAuth.post("admin/payroll/grade_level/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createGradeStep = (formData) => apiWithAuth.post("admin/payroll/grade_step/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchGradeStep = (formData) => apiWithAuth.post("admin/payroll/grade_step/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateGradeStep = (formData) => apiWithAuth.post("admin/payroll/grade_step/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createSalaryStructure = (formData) => apiWithAuth.post("admin/payroll/salary_structure/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchSalaryStructure = (formData) => apiWithAuth.post("admin/payroll/salary_structure/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateSalaryStructure = (formData) => apiWithAuth.post("admin/payroll/salary_structure/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createSalaryAllowance = (formData) => apiWithAuth.post("admin/payroll/salary_allowance/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchSalaryAllowance = (formData) => apiWithAuth.post("admin/payroll/salary_allowance/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateSalaryAllowance = (formData) => apiWithAuth.post("admin/payroll/salary_allowance/update", formData).then(getApiResponse).catch(getErrorResponse);

export const createSalaryDeduction = (formData) => apiWithAuth.post("admin/payroll/salary_deduction/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchSalaryDeduction = (formData) => apiWithAuth.post("admin/payroll/salary_deduction/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const updateSalaryDeduction = (formData) => apiWithAuth.post("admin/payroll/salary_deduction/update", formData).then(getApiResponse).catch(getErrorResponse);


export const fetchPermissionsList = () => apiWithAuth.post("admin/user/roles/fetch_permissions").then(getApiResponse).catch(getErrorResponse);
export const fetchRoleList = () => apiWithAuth.post("admin/user/roles/fetch_roles").then(getApiResponse).catch(getErrorResponse);
export const deleteRoleAPI = (formData) => apiWithAuth.post("admin/user/roles/delete_role", formData).then(getApiResponse).catch(getErrorResponse);
export const createRole = (formData) => apiWithAuth.post("admin/user/roles/create_role", formData).then(getApiResponse).catch(getErrorResponse);
export const assignRole = (formData) => apiWithAuth.post("admin/user/roles/assign_role", formData).then(getApiResponse).catch(getErrorResponse);
export const updateRole = (formData) => apiWithAuth.post("admin/user/roles/update_role", formData).then(getApiResponse).catch(getErrorResponse);
export const revokeRole = (formData) => apiWithAuth.post("admin/user/roles/revoke_role", formData).then(getApiResponse).catch(getErrorResponse);


export const createAccount = (formData) => apiWithAuth.post("admin/cashbook/account/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAccount = () => apiWithAuth.post("admin/cashbook/account/fetch").then(getApiResponse).catch(getErrorResponse);
export const updateAccount = (formData) => apiWithAuth.post("admin/cashbook/account/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteAccount = (formData) => apiWithAuth.post("admin/cashbook/account/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const createPayee = (formData) => apiWithAuth.post("admin/cashbook/payee/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPayee = () => apiWithAuth.post("admin/cashbook/payee/fetch").then(getApiResponse).catch(getErrorResponse);
export const updatePayee = (formData) => apiWithAuth.post("admin/cashbook/payee/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deletePayee = (formData) => apiWithAuth.post("admin/cashbook/payee/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const createPayer = (formData) => apiWithAuth.post("admin/cashbook/payer/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPayer = () => apiWithAuth.post("admin/cashbook/payer/fetch").then(getApiResponse).catch(getErrorResponse);
export const updatePayer = (formData) => apiWithAuth.post("admin/cashbook/payer/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deletePayer = (formData) => apiWithAuth.post("admin/cashbook/payer/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const createDeposit = (formData) => apiWithAuth.post("admin/cashbook/deposit/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchDeposit = () => apiWithAuth.post("admin/cashbook/deposit/fetch").then(getApiResponse).catch(getErrorResponse);
export const updateDeposit = (formData) => apiWithAuth.post("admin/cashbook/deposit/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteDeposit = (formData) => apiWithAuth.post("admin/cashbook/deposit/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const createExpense = (formData) => apiWithAuth.post("admin/cashbook/expense/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchExpense = () => apiWithAuth.post("admin/cashbook/expense/fetch").then(getApiResponse).catch(getErrorResponse);
export const updateExpense = (formData) => apiWithAuth.post("admin/cashbook/expense/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteExpense = (formData) => apiWithAuth.post("admin/cashbook/expense/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const createTransfer = (formData) => apiWithAuth.post("admin/cashbook/transfer/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCashbookTransfer = () => apiWithAuth.post("admin/cashbook/transfer/fetch").then(getApiResponse).catch(getErrorResponse);
export const updateTransfer = (formData) => apiWithAuth.post("admin/cashbook/transfer/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteTransfer = (formData) => apiWithAuth.post("admin/cashbook/transfer/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const fetchTransactions = () => apiWithAuth.post("admin/cashbook/transaction/fetch").then(getApiResponse).catch(getErrorResponse);

export const fetchPaymentMethod = () => apiWithAuth.post("admin/cashbook/paymentmenthod/fetch_all").then(getApiResponse).catch(getErrorResponse);
export const fetchAllAccount = () => apiWithAuth.post("admin/cashbook/account/fetch_all").then(getApiResponse).catch(getErrorResponse);
export const fetchAllPayer = () => apiWithAuth.post("admin/cashbook/payer/fetch_all").then(getApiResponse).catch(getErrorResponse);
export const fetchAllPayee = () => apiWithAuth.post("admin/cashbook/payee/fetch_all").then(getApiResponse).catch(getErrorResponse);

export const fetchAllPendingVerification = () => apiWithAuth.post("admin/employee/verification/fetch_pending_verifications").then(getApiResponse).catch(getErrorResponse);
export const fetchAllEmployeeData = (formData) => apiWithAuth.post("admin/employee/verification/fetch_employee_data",formData).then(getApiResponse).catch(getErrorResponse);
export const hrVerifyEmployee = (formData) => apiWithAuth.post("admin/employee/verification/hr_verify_data", formData).then(getApiResponse).catch(getErrorResponse);
// export const hodVerifyEmployee = (formData) => apiWithAuth.post("admin/employee/verification/hod_verify_data", formData).then(getApiResponse).catch(getErrorResponse);


export const createMadsMinistry = (formData) => apiWithAuth.post("admin/mdas/ministries/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchMadsMinistry = (formData) => apiWithAuth.post("admin/mdas/ministries/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllMadsMinistry = (formData) => apiWithAuth.post("admin/mdas/ministries/fetch_all", formData).then(getApiResponse).catch(getErrorResponse);
export const updateMadsMinistry = (formData) => apiWithAuth.post("admin/mdas/ministries/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteMadsMinistry = (formData) => apiWithAuth.post("admin/mdas/ministries/delete", formData).then(getApiResponse).catch(getErrorResponse);

export const createMadsDepartment = (formData) => apiWithAuth.post("admin/mdas/departments/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchMadsDepartment = (formData) => apiWithAuth.post("admin/mdas/departments/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllMadsDepartment = (formData) => apiWithAuth.post("admin/mdas/departments/fetch_all", formData).then(getApiResponse).catch(getErrorResponse);
export const updateMadsDepartment = (formData) => apiWithAuth.post("admin/mdas/departments/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteMadsDepartment = (formData) => apiWithAuth.post("admin/mdas/departments/delete", formData).then(getApiResponse).catch(getErrorResponse);

export const createMadsAgencies = (formData) => apiWithAuth.post("admin/mdas/agencies/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchMadsAgencies = (formData) => apiWithAuth.post("admin/mdas/agencies/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllMadsAgencies = (formData) => apiWithAuth.post("admin/mdas/agencies/fetch_all", formData).then(getApiResponse).catch(getErrorResponse);
export const updateMadsAgencies = (formData) => apiWithAuth.post("admin/mdas/agencies/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteMadsAgencies = (formData) => apiWithAuth.post("admin/mdas/agencies/delete", formData).then(getApiResponse).catch(getErrorResponse);

export const createMadsUnits = (formData) => apiWithAuth.post("admin/mdas/units/create", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchMadsUnits = (formData) => apiWithAuth.post("admin/mdas/units/fetch", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchAllMadsUnits = (formData) => apiWithAuth.post("admin/mdas/units/fetch_all", formData).then(getApiResponse).catch(getErrorResponse);
export const updateMadsUnits = (formData) => apiWithAuth.post("admin/mdas/units/update", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteMadsUnits = (formData) => apiWithAuth.post("admin/mdas/units/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const decryptData = (formData) => apiWithAuth.post("admin/employee/decrypt_data", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchPayrollWorkflow = (formData) => apiWithAuth.post("admin/payroll/payroll_schedule/fetch_payroll_workflow", formData).then(getApiResponse).catch(getErrorResponse);




// export const createSalaryStructure = (formData) => apiWithAuth.post("admin/payroll/salary_structure/create",formData).then(getApiResponse).catch(getErrorResponse);



