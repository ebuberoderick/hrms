import { fetchAllCompanies, fetchAllDepartment, fetchAllEmployee, fetchAllLocation, fetchAwardTypes, fetchQueryType, fetchTerminationType } from "@/services/authService";




export const companyEnum = [
    { value: "HR1", label: "HR1" },
    { value: "HR2", label: "HR2" },
    { value: "ONDO STATE GOVERNMENT", label: "ONDO STATE GOVERNMENT" },
    { value: "NIGERIA POLICE FORCE", label: "NIGERIA POLICE FORCE" }
];

export const leaveType = [
    { value: "Medical (12 Days)", label: "Medical (12 Days)" },
    { value: "Casual (7 days)", label: "Casual (7 days)" },
    { value: "Manual (Days)", label: "Manual (Days)" },
    { value: "Test (0 Day)", label: "Test (0 Day)" },
    { value: "Annual (30 Days)", label: "Annual (30 Days)" },
    { value: "Maternity (120 Days)", label: "Maternity (120 Days)" },
    { value: "Paternity (14 Days)", label: "Paternity (14 Days)" }
]

export const companyLocation = async () => {
    const { status, data } = await fetchAllLocation().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.location_name })
    });
    return exportData;
}

export const companies = async () => {
    const { status, data } = await fetchAllCompanies().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.company_name })
    });
    return exportData;
}

export const allDepartment = async () => {
    const { status, data } = await fetchAllDepartment().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.department_name })
    });
    return exportData;
}

export const AllEmployees = async () => {
    const { status, data } = await fetchAllEmployee().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.employee_name })
    });
    return exportData;
}


export const companyType = [
    { value: "Corporation", label: "Corporation" },
    { value: "Exempt Organization", label: "Exempt Organization" },
    { value: "Partnership", label: "Partnership" },
    { value: "Private Foundation", label: "Private Foundation" },
    { value: "Limited Liability Company", label: "Limited Liability Company" }
];


export const awardType = async () => {
    const { status, data } = await fetchAwardTypes().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.award_name })
    });
    return exportData;
}

export const terminationType = async () => {
    const { status, data } = await fetchTerminationType().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.termination_title })
    });
    return exportData;
}



export const queryType = async () => {
    const { status, data } = await fetchQueryType().catch(err => console.log(err))
    const exportData = []
    await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.warning_title })
    });
    return exportData;
}




export const travelStatus = [
    { value: "Pending", label: "Pending" },
    { value: "First Level Approval", label: "First Level Approval" },
    { value: "Approved", label: "Approved" },
    { value: "Rejected", label: "Rejected" }
];


export const travelMode = [
    { value: "By Bus", label: "By Bus" },
    { value: "By Train", label: "By Train" },
    { value: "By Plane", label: "By Plane" },
    { value: "By Taxi", label: "By Taxi" },
    { value: "By Rental Car", label: "By Rental Car" },
    { value: "By Others", label: "By Others" }
];

export const travelArrangments = [
    { value: "corporation", label: "corporation" },
    { value: "Guest House", label: "Guest House" },
    { value: "Hostel", label: "Hostel" }
];