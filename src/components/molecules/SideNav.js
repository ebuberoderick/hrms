import Image from "next/image";
import React from "react";
import logo from "@assets/images/logo.png";
import CustomizeIcon from "@assets/images/customize.svg";
import AppLink from "../organisms/AppLink";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import AdminSideNav from "./AdminSideNav";
import EmployeeSideNav from "./EmployeeSideNav";

function SideNav() {
  const router = useRouter();
  const userType = useSelector((state) => state.User?.value?.user?.role);
  return <>{userType === "admin" ? <AdminSideNav /> : <EmployeeSideNav />}</>;
}

export default SideNav;
