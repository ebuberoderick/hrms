import Image from "next/image";
import React from "react";
import logo from "@assets/images/logo.png";
import CustomizeIcon from "@assets/images/customize.svg";
import AppLink from "../organisms/AppLink";

function EmployeeSideNav() {
  return (
    <div className="fixed bg-white select-none overflow-y-auto flex flex-col h-screen shadow-md w-64 gap-y-6 py-8 px-1">
      <div className="text-2xl px-1">
        <Image src={logo} className="h-12 w-12" alt="Michael Michael" />
      </div>
      <div className="flex-grow gap-y-4 flex flex-col gap-2">
        <div>
          <AppLink
            text={"dashboard"}
            icon={<i className="ri-layout-grid-fill"></i>}
          />
          <AppLink
            text={"organization"}
            icon={<i className="ri-group-2-line"></i>}
            subMenu={[
              { name: "Announcements", extra: false },
              { name: "company policy", extra: false },
            ]}
          />
          <AppLink
            text={"time sheets"}
            icon={<i className="ri-time-line"></i>}
            subMenu={[
              { name: "attendance", extra: false },
              { name: "Date wise attendance", extra: false },
              { name: "monthly attendance", extra: false },
            ]}
          />
          <AppLink
            text={"HR calender"}
            icon={<i className="ri-calendar-todo-line"></i>}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeSideNav;
