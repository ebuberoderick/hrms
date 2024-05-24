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
  // const [toggle, setToggle] = useState(false);
  const router = useRouter();

  if (isAuthenticated.status === "unauthenticated") {
    router.push("/auth/login");
  } else {
    return (
      <>
        <div className="bg-gray-50">
          <SideNav />
        </div>
        <div className={`  p-4 pb-8 ml-64 select-none min-h-screen`}>
          <div>
            <TopNav />
          </div>
          {children}
        </div>
      </>
    );
  }
}

export default AppLayout;
