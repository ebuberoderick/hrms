import Image from "next/image";
import React from "react";
import logo from "@assets/images/authLogo.png";
import AppLink from "../organisms/AppLink";
import { RiSettings4Line } from "react-icons/ri";

function AdminSideNav() {
  return (
    <div className="fixed bg-white select-none overflow-y-auto flex flex-col h-screen shadow-md w-64 gap-y-6 py-8">
      <div className="text-2xl px-1">
        {/* <Image src={logo} className="h-9 w-32" alt="Logo" /> */}
      </div>
      <div className="flex-grow gap-y-4 py-5 flex flex-col gap-2">
        <div>
          <AppLink
            text={"dashboard"}
            icon={<i className="ri-layout-grid-fill"></i>}
          />
        </div>
        <div className="divition"></div>
        <div className="space-y-2">
          <div className="font-[500] text-xs text-gray-500 capitalize pl-3">System Admininstration</div>
          <div>
            <AppLink
              text={"user"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />
            <AppLink text={"employee"} icon={<i className="ri-group-line"></i>} />
            <AppLink
              text={"customize setting"}
              icon={<i className="ri-sound-module-line"></i>}
              subMenu={[
                { name: "roles and access", extra: false },
                { name: "general settings", extra: false },
                { name: "mail setting", extra: false },
                { name: "language settings", extra: false },
                { name: "variable type", extra: false },
                { name: "variable method", extra: false },
                { name: "IP settings", extra: false },
              ]}
            />
            <AppLink
              text={"setups"}
              icon={<RiSettings4Line />}
              subMenu={[
                { name: "job titles", extra: false },
                { name: "allowance", extra: false },
                { name: "deduction", extra: false },
                { name: "grade levels", extra: false },
                { name: "steps", extra: false }
              ]}
            />
          </div>
        </div>
        <div className="divition"></div>
        <div className="space-y-2">
          <div className="font-[500] text-xs text-gray-500 capitalize pl-3">Personnel Management</div>
          <div>
            <AppLink
              text={"core HR"}
              icon={<i className="ri-file-list-3-line"></i>}
              subMenu={[
                { name: "promotion", extra: false },
                { name: "award", extra: false },
                { name: "travel", extra: false },
                { name: "resignation", extra: false },
                { name: "complaints", extra: false },
                { name: "transfer", extra: false },
                { name: "query", extra: false },
                { name: "termination", extra: false }
              ]}
            />
            <AppLink
              text={"recruitment"}
              icon={<i className="ri-team-line"></i>}
              subMenu={[
                { name: "job post", extra: false },
                { name: "job candidates", extra: false },
                { name: "job interview", extra: false }
              ]}
            />
            <AppLink
              text={"organization"}
              icon={<i className="ri-group-2-line"></i>}
              subMenu={[
                { name: "company", extra: false },
                { name: "department", extra: false },
                { name: "location", extra: false },
                { name: "announcements", extra: false },
                { name: "company policy", extra: false }
              ]}
            />
            <AppLink
              text={"hR calender"}
              icon={<i className="ri-calendar-todo-line"></i>}
            />
            <AppLink
              text={"hR Reports"}
              icon={<i className="ri-folder-5-line"></i>}
              subMenu={[
                { name: "Attendance Report", extra: false },
                { name: "Training Report", extra: false },
                { name: "Project Report", extra: false },
                { name: "Task Report", extra: false },
                { name: "Employees Report", extra: false },
                { name: "Account Report", extra: false },
                { name: "Expense Report", extra: false },
                { name: "Desposit Report", extra: false },
                { name: "Transaction Report", extra: false },
                { name: "Pension Report", extra: false }
              ]}
            />
            <AppLink
              text={"timesheet"}
              icon={<i className="ri-time-line"></i>}
              subMenu={[
                { name: "Attendances", extra: false },
                { name: "Date Wise Attendances", extra: false },
                { name: "Monthly Attendances", extra: false },
                { name: "Update Attendances", extra: false },
                { name: "Import Attendances", extra: false },
                { name: "Office Shift", extra: false },
                { name: "Manage Holiday", extra: false },
                { name: "Manage Leaves", extra: false },
              ]}
            />
            <AppLink
              text={"File Manager"}
              icon={<i className="ri-profile-line"></i>}
            />
            <AppLink text={"Training"} icon={<i className="ri-trophy-line"></i>} />
          </div>
        </div>
        <div className="divition"></div>
        <div className="space-y-2">
          <div className="font-[500] text-xs text-gray-500 capitalize pl-3">Payroll & Compensation</div>
          <div>
            <AppLink
              text={"payroll"}
              icon={<i className="ri-wallet-line"></i>}
            />
          </div>
        </div>
        <div className="divition"></div>
        <div className="space-y-2">
          <div className="font-[500] text-xs text-gray-500 capitalize pl-3">
            IPRMS
          </div>
          <div>
            <AppLink
              text={"Cashbook"}
              icon={<i className="ri-newspaper-line"></i>}
              subMenu={[
                { name: "Account List", extra: false },
                { name: "Account Balance", extra: false },
                { name: "Payee", extra: false },
                { name: "Payer", extra: false },
                { name: "Deposit", extra: false },
                { name: "Expense", extra: false },
                { name: "Transaction History", extra: false }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideNav;
