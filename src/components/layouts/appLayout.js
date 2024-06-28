"use client";
import React, { useState } from "react";
import SideNav from "../molecules/SideNav";
import { useRouter } from "next/navigation";
import TopNav from "../molecules/TopNav";
import { useDispatch, useSelector } from "react-redux";
import { Session, SignOut } from "@/hooks/Auth";

function AppLayout({ children }) {
  const user = useSelector((state) => state?.User);
  const dispatch = useDispatch()
  const isAuthenticated = Session(user);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const out = async () => {
    await SignOut(dispatch);
    router.push("/auth/login");
  }
  if (isAuthenticated.status === "unauthenticated") {
    out()
  } else {
    return (
      <>
        <div className={`bg-gray-50 z-50 transition-all ${showNav ? "left-0" : "-left-64 md:left-0"} duration-300  relative`}>
          <SideNav />
        </div>
        <div className={`p-4 pb-8 md:ml-64 bg-gray-100 pt-20 transition-all duration-300 select-none min-h-screen`}>
          <div className="flex gap-3 items-center">
            <div className="flex-grow"><TopNav role={user?.value?.user?.role} /></div>
            <div onClick={() => setShowNav(!showNav)} className="h-8 w-8 bg-hrms_green md:hidden text-white rounded-md text-xl flex items-center justify-center cursor-pointer"><i className="ri-menu-line"></i></div>
          </div>
          {children}
        </div>
      </>
    );
  }
}

export default AppLayout;
