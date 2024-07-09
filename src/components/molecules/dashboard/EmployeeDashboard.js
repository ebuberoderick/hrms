"use client";
import React, { useEffect, useState } from "react";
import ResponseModal from "../../organisms/ResponseModal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Verifications from "../Verifications";
import AppLayout from "@/components/layouts/appLayout";

const EmployeeDashboard = () => {
  const userType = useSelector((state) => state.User?.value);
  const router = useRouter()
  if(userType?.user === undefined){
    router.push("/auth/login")
  }
  const Vbvn = userType?.user?.is_bvn_verified == 1
  const Vnin = userType?.user?.is_nin_verified == 1
  const VaccountNumber = userType?.user?.is_bank_verified == 1
  // const Vaddress = userType?.user?.state_of_origin !== null 
  const Vothers = userType?.employee?.npfa_name !== null
  const Vemployment = userType?.employee?.grade !== null
  const Vbio = userType?.employee?.marital_status !== null
  // const Vkin = userType?.user?.next_of_kin_name === 1
  const isVerified = Vbvn && Vnin && VaccountNumber && Vothers && Vemployment && Vbio

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const maxDate = getTodayDate();
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          {
            isVerified ? (
              <AppLayout title={"Dashboard"}></AppLayout>
            ) : (<Verifications Vbvn={Vbvn} Vnin={Vnin} VaccountNumber={VaccountNumber} Vothers={Vothers} Vemployment={Vemployment} Vbio={Vbio} />)
          }
        </div>
      </div>
    </div>
  );
};
export default EmployeeDashboard;
