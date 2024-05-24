"use client";
import AuthLayout from "@/components/layouts/authLayout";
import AppCheckBox from "@/components/organisms/AppCheckBox";
import AppInput from "@/components/organisms/AppInput";
import { Applogin, verifyCode } from "@/services/authService";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Session, SignInAuth } from "@/hooks/Auth";
import { accessCode } from "@/Store/reducers/UsersReducer";

function Page() {
  const dispatch = useDispatch();
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state.User);

  const verifyAccessCode = async (e) => {
    setProccessing(true);
    const { status, data } = await verifyCode(e).catch((err) =>
      console.log(err)
    );
    setProccessing(false);
    if (status) {
      setErrMsg("");
      SignInAuth(data, dispatch);
      dispatch(accessCode(data));
      router.push("/auth/create-password");
      console.log(data);
    } else {
      setErrMsg(data.message);
    }
    console.log(e);
  };

  // const isAuthenticated = Session(user)

  return (
    <AuthLayout
      errMsg={errMsg}
      onSubmit={(e) => verifyAccessCode(e)}
      title={"Verify Access Code"}
      subText={"Please fill in your details"}
    >
      <AppInput name="email" required label="Email" />
      <AppInput name="access_code" required label="Enter Access Code" />

      <div className="flex gap-3">
        <button
          disabled={proccessing}
          className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_blue text-white rounded-lg py-3"
        >
          {" "}
          {proccessing ? "Verifing..." : "Verify"}
        </button>
      </div>
    </AuthLayout>
  );
}

export default Page;
