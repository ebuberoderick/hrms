"use client";
import AppLayout from "@/components/layouts/appLayout";
import AdminDashboard from "@/components/molecules/dashboard/AdminDashboard";
import EmployeeDashboard from "@/components/molecules/dashboard/EmployeeDashboard";
import React from "react";
import { useSelector } from "react-redux";

function Page() {
  const userType = useSelector((state) => state?.User?.value?.user?.role);

  return (
    <AppLayout>
      {userType === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </AppLayout>
  );
}

export default Page;
