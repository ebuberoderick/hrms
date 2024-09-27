"use client";
import AppLayout from "@/components/layouts/appLayout";
import AdminPolicy from "@/components/molecules/policy/AdminPolicy";
import EmployeePolicy from "@/components/molecules/policy/EmployeePolicy";
import React from "react";
import { useSelector } from "react-redux";

function Page() {
  const userType = useSelector((state) => state?.User?.value?.user?.role);
  return (
    <>
      {userType === "global_admin" ? (
        <AppLayout title={"Dashboard"}>
          <AdminPolicy />
        </AppLayout>
      ) : (<EmployeePolicy />)}
    </>

  );
}

export default Page;
