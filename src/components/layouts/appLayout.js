"use client";
import React, { useState } from "react";
import SideNav from "../molecules/SideNav";
import { useRouter } from "next/navigation";
import TopNav from "../molecules/TopNav";
import { useSelector } from "react-redux";
import { Session } from "@/hooks/Auth";

function AppLayout({ children }) {
  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  if (isAuthenticated.status === "unauthenticated") {
    router.push("/auth/login");
  } else {
    return (
      <>
        <div className={`bg-gray-50 z-50 transition-all ${showNav ? "left-0":"-left-64 md:left-0"} duration-300  relative`}>
          <SideNav />
        </div>
        <div className={`p-4 pb-8 md:ml-64 transition-all duration-300 select-none min-h-screen`}>
          <div className="flex gap-3 items-center">
            <div className="flex-grow"><TopNav /></div>
            <div onClick={() => setShowNav(!showNav)} className="h-8 w-8 bg-hrms_green md:hidden text-white rounded-md text-xl flex items-center justify-center cursor-pointer"><i className="ri-menu-line"></i></div>
          </div>
          {children}
        </div>
      </>
    );
  }
}

export default AppLayout;
