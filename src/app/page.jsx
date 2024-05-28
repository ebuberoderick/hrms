"use client";
import AppLayout from "@/components/layouts/appLayout";
import AdminDashboard from "@/components/molecules/dashboard/AdminDashboard";
import AdminSideNav from "@/components/molecules/AdminSideNav";
import Calender from "@/components/molecules/Calender";
import DashboardCard from "@/components/molecules/DashboardCard";
import EmployeeDashboard from "@/components/molecules/dashboard/EmployeeDashboard";
import LineChart from "@/components/molecules/LineChart";
import PieChart from "@/components/molecules/PieChart";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Page() {
  const userType = useSelector((state) => state.User?.value?.user?.role);
  return (
    <AppLayout>
      {userType === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </AppLayout>
  );
}

export default Page;
