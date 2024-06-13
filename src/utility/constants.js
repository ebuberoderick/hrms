import { fetchAllCompanies, fetchAllEmployee, fetchAllLocation } from "@/services/authService";




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

export const awardType = [
    { value: "Employee of The Year", label: "Employee of The Year" },
    { value: "Presidential Distinguished Public Service", label: "Presidential Distinguished Public Service" },
    { value: "Presidential Civil Service Merit Award", label: "Presidential Civil Service Merit Award" },
    { value: "Head of the Civil Service of the Federation", label: "Head of the Civil Service of the Federation" }
];

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