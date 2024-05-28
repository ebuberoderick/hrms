import Image from "next/image";
import React from "react";
import logo from "@assets/images/authLogo.png";
import AppLink from "../organisms/AppLink";

function AdminSideNav() {
  return (
    <div className="fixed bg-white select-none overflow-y-auto flex flex-col h-screen shadow-md w-64 gap-y-6 py-8 px-1">
      <div className="text-2xl px-1">
        <Image src={logo} className="h-9 w-52" alt="Michael Michael" />
      </div>
      <div className="flex-grow gap-y-4 flex flex-col gap-2">
        <div>
          <AppLink
            text={"dashboard"}
            icon={<i class="ri-layout-grid-fill"></i>}
          />
        </div>
        <div>
          <div className="font-[500] text-sm text-[#000000] pl-3">
            SYSTEM ADMINISTRATION
          </div>
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
            <AppLink text={"Employee"} icon={<i className="ri-group-line"></i>} />
            <AppLink
              text={"customize setting"}
              icon={<i class="ri-sound-module-line"></i>}
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
          </div>
        </div>
        <div>
          <div className="font-[500] text-sm text-[#000000] pl-3">
            PERSONNNEL MANAGEMENT
          </div>
          <div>
            <AppLink
              text={"Core HR"}
              icon={<i class="ri-file-list-3-line"></i>}
              subMenu={[
                { name: "promotion", extra: false },
                { name: "award", extra: false },
                { name: "travel", extra: false },
                { name: "resignation", extra: false },
                { name: "complaints", extra: false },
                { name: "query", extra: false },
                { name: "termination", extra: false },
              ]}
            />
            <AppLink
              text={"recruitment"}
              icon={<i class="ri-team-line"></i>}
            />
            <AppLink
              text={"organization"}
              icon={<i class="ri-group-2-line"></i>}
            />
            <AppLink
              text={"HR Calender"}
              icon={<i class="ri-calendar-todo-line"></i>}
            />
            <AppLink
              text={"timesheet"}
              icon={<i class="ri-time-line"></i>}
            />
            <AppLink
              text={"Onboarding"}
              icon={<i class="ri-p2p-line"></i>}
            />
            <AppLink text={"transfer"} icon={<i className="ri-group-line"></i>} />
          </div>
        </div>
        <div>
          <div className="font-[500] text-sm text-[#000000] pl-3">
            PAYROLL AND COMPENSATION
          </div>
          <div>
            <AppLink
              text={"payroll"}
              icon={<i class="ri-wallet-line"></i>}
            />
          </div>
        </div>
        <div>
          <div className="font-[500] text-sm text-[#000000] pl-3">
            FINANCE
          </div>
          <div>
            <AppLink
              text={"Cashbook"}
              icon={<i class="ri-newspaper-line"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideNav;
