"use client";
import React, { useState } from "react";
import SideNav from "../molecules/SideNav";
import { useRouter } from "next/navigation";
import TopNav from "../molecules/TopNav";

function AppLayout({ children }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  // const isAuthenticated = localStorage.screeningAuthState

  // if (!isAuthenticated) {
  //   router.push("/auth/login")
  // }
  return (
    <div className="bg-gray-50">
      <div
        className={`transform fixed transition-transform duration-300 ease-in-out ${
          toggle === true ? " hidden" : " block"
        }`}
      >
        <SideNav />
      </div>
      <div
        className={`${
          toggle ? "ml-0" : "ml-64"
        } space-y-4 p-4 select-none min-h-screen`}
      >
        <div>
          <TopNav toggle={toggle} setToggle={setToggle} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
