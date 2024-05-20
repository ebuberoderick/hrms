"use client";
import AuthLayout from "@/components/layouts/authLayout";
import AppInput from "@/components/organisms/AppInput";
import Link from "next/link";
import React from "react";

function Page() {
  const reset = (e) => {
    console.log(e);
  };
  return (
    <AuthLayout
      onSubmit={(e) => reset(e)}
      title={"Forgot Password"}
      subText={"Reset Password With email"}
    >
      <AppInput
        name="New-Password"
        required
        label="New Password"
        type={"password"}
      />
      <AppInput
        name="Confirm-New-Password"
        required
        label="Confirm New Password"
        type={"password"}
      />
      <button className="w-full shadow-md bg-hrms_blue text-white rounded-lg py-3">
        Reset Password
      </button>
      <div className="">
        <Link href="login" className="text-sm text-hrms_blue">
          Goto Login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Page;
