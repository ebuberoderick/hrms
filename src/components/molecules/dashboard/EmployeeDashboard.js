"use client";
import React, { useEffect, useState } from "react";
import ResponseModal from "../../organisms/ResponseModal";
import { useDispatch, useSelector } from "react-redux";
import Verifications from "../Verifications";
import AppLayout from "@/components/layouts/appLayout";
import EmployeeVerifiedDashboard from "./EmployeeVerifiedDashboard";

const EmployeeDashboard = () => {
  const userType = useSelector((state) => state.User?.value);
  const Vbvn = userType?.user?.is_bvn_verified == 1
  const Vnin = userType?.user?.is_nin_verified == 1
  const VaccountNumber = userType?.user?.is_bank_verified == 1
  // const Vaddress = userType?.user?.state_of_origin !== null 
  const Vothers = userType?.employee?.position !== null
  const Vemployment = userType?.employee?.grade !== null
  const Vbio = userType?.employee?.marital_status !== null
  const [saved, setSave] = useState(Vbvn && Vnin && VaccountNumber && Vothers && Vemployment && Vbio)
  // const Vkin = userType?.user?.next_of_kin_name === 1
  const isVerified = Vbvn && Vnin && VaccountNumber && Vothers && Vemployment && Vbio && saved

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
      <div className="">
        {
          isVerified ? (
            <AppLayout title={"Dashboard"}>
              <EmployeeVerifiedDashboard />
            </AppLayout>
          ) : (<Verifications setSave={() => setSave(true)} Vbvn={Vbvn} Vnin={Vnin} VaccountNumber={VaccountNumber} Vothers={Vothers} Vemployment={Vemployment} Vbio={Vbio} />)
        }
      </div>
    </div>
  );
};
export default EmployeeDashboard;
