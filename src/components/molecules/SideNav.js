import React from "react";
import { useSelector } from "react-redux";
import AdminSideNav from "./AdminSideNav";
import EmployeeSideNav from "./EmployeeSideNav";

function SideNav() {
  const userType = useSelector((state) => state.User?.value.user.role);
  return <>{userType === "admin" ? <AdminSideNav /> : <EmployeeSideNav />}</>;
}

export default SideNav;
