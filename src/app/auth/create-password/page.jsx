"use client";
import { accessCode } from "@/Store/reducers/UsersReducer";
import AuthLayout from "@/components/layouts/authLayout";
import AppInput from "@/components/organisms/AppInput";
import { SignInAuth } from "@/hooks/Auth";
import { createPassword } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Page() {
  const [emailInput, setEmailInput] = useState("");
  const [accessCodeInput, setAccessCodeInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const user = useSelector((state) => state.User.value?.reset_link);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const url = new URL(user);
      const email = url.pathname.split("/")[2];
      const code = url.pathname.split("/")[3];
      setEmailInput(email);
      setAccessCodeInput(code);
      console.log(email, code);
    }
  }, [user]);

  const reset = async (e) => {
    // e.preventDefault();
    setProcessing(true);

    const email = emailInput;
    const access_code = accessCodeInput;

    const additionalData = { email, access_code };
    const { status, data } = await createPassword(e, additionalData).catch(
      (err) => {
        console.log(err);
        return { status: false, data: { message: "An error occurred." } };
      }
    );

    setProcessing(false);
    if (status) {
      setErrMsg("");
      SignInAuth(data, dispatch);
      dispatch(accessCode(data));
      router.push("/auth/login");
      console.log(data);
    } else {
      setErrMsg(data.message);
      setProcessing(false);
    }
  };

  return (
    <AuthLayout
      onSubmit={(e) => reset(e)}
      title={"Create Password"}
      subText={"Create Password With email"}
    >
      <AppInput name="password" required label="New Password" type="password" />
      <AppInput
        name="password_confirmation"
        required
        label="Confirm New Password"
        type="password"
      />
      <button
        type="submit"
        className="w-full shadow-md bg-hrms_green text-white rounded-lg py-3"
        disabled={processing}
      >
        {processing ? "Processing..." : "Create Password"}
      </button>
      {errMsg && <p className="text-red-500">{errMsg}</p>}
    </AuthLayout>
  );
}

export default Page;
