import Image from "next/image";
import React from "react";
import logo from "@assets/images/logo.png";
import CustomizeIcon from "@assets/images/customize.svg";
import AppLink from "../organisms/AppLink";

function AdminSideNav() {
  return (
    <div className="fixed bg-white select-none overflow-y-auto flex flex-col h-screen shadow-md w-64 gap-y-6 py-8 px-1">
      <div className="text-2xl px-1">
        <Image src={logo} className="h-12 w-12" alt="Michael Michael" />
      </div>
      <div className="flex-grow gap-y-4 flex flex-col gap-2">
        <div>
          <AppLink
            text={"dashboard"}
            icon={<i className="ri-home-4-line"></i>}
          />
        </div>
        <div>
          <div className="font-[500] text-[16px] text-[#000000] pl-3">
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
            <AppLink
              text={"customize setting"}
              icon={<Image src={CustomizeIcon} alt="icon" />}
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
          <div className="font-[500] text-[16px] text-[#000000] pl-3">
            PERSONNNEL MANAGEMENT
          </div>
          <div>
            <AppLink
              text={"recruitment"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />
            <AppLink
              text={"Onboarding"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />{" "}
            <AppLink text={"Employee"} icon={<i class="ri-group-line"></i>} />{" "}
            <AppLink
              text={"Promotion"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />{" "}
            <AppLink
              text={"Transfer"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />{" "}
          </div>
        </div>
        <div>
          <div className="font-[500] text-[16px] text-[#000000] pl-3">
            PAYROLL AND COMPENSATION
          </div>
          <div>
            <AppLink
              text={"payroll"}
              icon={<i className="ri-user-6-line"></i>}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />
          </div>
        </div>
        <div>
          <div className="font-[500] text-[16px] text-[#000000] pl-3">
             FINANCE 
          </div>
          <div>
            <AppLink
              text={" Cashbook"}
              icon={<Image src={CustomizeIcon} alt="icon" />}
              subMenu={[
                { name: "users list", extra: false },
                { name: "user roles and access", extra: false },
                { name: "users last login", extra: false },
              ]}
            />
          </div>
        </div>

        {/* <AppLink text={"dashboard"} icon={<i className="ri-home-4-line"></i>} />
        <AppLink text={"user"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"employees"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "employees lists", extra: false }, { name: "import employees", extra: false }]} />
        <AppLink text={"customize setting"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "roles and access", extra: false }, { name: "general settings", extra: false }, { name: "mail setting", extra: false }, { name: "language settings", extra: false }, { name: "variable type", extra: false }, { name: "variable method", extra: false }, { name: "IP settings", extra: false }]} />
        <AppLink text={"core HR"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"organization"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"timesheets"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"performance"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"HR calender"} icon={<i className="ri-home-4-line"></i>} />
        <AppLink text={"HR report"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"recruitment"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"traning"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"event & meetings"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"project management"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} />
        <AppLink text={"support tickets"} icon={<i className="ri-home-4-line"></i>} />
        <AppLink text={"finance"} icon={<i className="ri-user-6-line"></i>} subMenu={[{ name: "users list", extra: false }, { name: "user roles and access", extra: false }, { name: "users last login", extra: false }]} /> */}
        {/* <AppLink text={"payables"} icon={<i className="ri-money-dollar-circle-fill"></i>} subMenu={[{name:"bills",extra:false},{name:"approvals",extra:false},{name:"payment",extra:false},{name:"procurement",extra:true,option:["projects","RFP","requisition","purchase order","suppliers"]}]} /> */}
      </div>
    </div>
  );
}

export default AdminSideNav;
