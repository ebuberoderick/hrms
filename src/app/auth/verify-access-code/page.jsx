"use client";
import AuthLayout from "@/components/layouts/authLayout";
import AppInput from "@/components/organisms/AppInput";
import { verifyCode } from "@/services/authService";
import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Session, SignInAuth } from "@/hooks/Auth";
import { accessCode } from "@/Store/reducers/UsersReducer";

function Page() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams()
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState(searchParams.get('email'))
  const [accescode, setAccescode] = useState(searchParams.get('acces_code'))

  const verifyAccessCode = async (e) => {
    setProccessing(true);
    const { status, data } = await verifyCode(e).catch((err) => console.log(err));
    setProccessing(false);
    if (status) {
      SignInAuth({ data }, dispatch);
      router.push("/dashboard")
    } else {
      setErrMsg(data.message);
    }
  };


  return (
    <AuthLayout
      errMsg={errMsg}
      onSubmit={(e) => verifyAccessCode(e)}
      title={"Verify Access Code"}
      subText={"Please fill in your details"}
    >
      <AppInput value={email} name="email" type={"email"} required label="Email" />
      <AppInput value={accescode} name="access_code" required label="Gateway ID" />

      <div className="flex gap-3">
        <button
          disabled={proccessing}
          className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_green text-white rounded-lg py-3"
        >
          {proccessing ? "Verifing..." : "Verify"}
        </button>
      </div>
    </AuthLayout>
  );
}

export default Page;
