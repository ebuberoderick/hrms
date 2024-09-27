"use client";
import AppLayout from "@/components/layouts/appLayout";
import AdminAnnouncement from "@/components/molecules/announcement/AdminAnnouncement";
import EmployeeAnnouncement from "@/components/molecules/announcement/EmployeeAnnouncement";
import React from "react";
import { useSelector } from "react-redux";

function Page() {
  const userType = useSelector((state) => state?.User?.value?.user?.role);
  return (
    <>
      {userType === "global_admin" ? (
        <AppLayout title={"Dashboard"}>
          <AdminAnnouncement />
        </AppLayout>
      ) : (<EmployeeAnnouncement />)}
    </>

  );
}

export default Page;
