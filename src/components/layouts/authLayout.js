"use client";
import Image from "next/image";
import logo from "@assets/images/favicon.png";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Session } from "@/hooks/Auth";

export const runtime = "edge";

function AuthLayout({ children, title, subText, onSubmit, errMsg }) {

  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  const router = useRouter();
  const serialize = (form) => {
    var result = [];
    if (typeof form === "object" && form.nodeName === "FORM")
      Array.prototype.slice.call(form.elements).forEach(function (control) {
        if (
          control.name &&
          !control.disabled &&
          ["file", "reset", "submit", "button"].indexOf(control.type) === -1
        )
          if (control.type === "select-multiple")
            Array.prototype.slice
              .call(control.options)
              .forEach(function (option) {
                if (option.selected)
                  result.push(control.name + "=" + option.value);
              });
          else if (
            ["checkbox", "radio"].indexOf(control.type) === -1 ||
            control.checked
          )
            result.push(control.name + "=" + control.value);
      });
    var data = result.join("&").replace(/%20/g, "+");

    const serializeToJSON = (str) =>
      str
        .split("&")
        .map((x) => x.split("="))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: isNaN(value) ? value : Number(value),
          }),
          {}
        );

    return serializeToJSON(data);
  };


  if (isAuthenticated.status === "authenticated") {
    router.push("/dashboard");
  } else {
    return (
      <div className="h-screen authBg overflow-hidden relative w-screen flex items-center">
        <div className="h-full w-full bg-hrms_green bg-opacity-55 flex items-center">
          <div className="p-4 w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault(), onSubmit(serialize(e.target));
              }} className="max-w-4xl rounded-lg px-12 py-8 bg-white space-y-10 mx-auto p-3">

              <div className="space-y-11">
                <Image src={logo} alt="" draggable="false" className="w-12 " />
                <div className="space-y-3">
                  <div className="text-hrms_green font-bold text-3xl">Welcome To FiscusBook!</div>
                  <div className="text-sm">Please sign in to manage your data seamlessly.</div>
                </div>
                <div className="space-y-4">
                  <div className="text-danger text-sm">{errMsg}</div>
                  <div className="space-y-5">{children}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}

export default AuthLayout;



{/* <div className="h-screen overflow-hidden relative w-screen flex items-center">
      <div className="bg-hrms_green bg-opacity-15 bottom-44 -left-14 h-28 w-28 absolute rounded-full"></div>
      <div className="bg-hrms_green -right-40 -top-40 bg-opacity-5 h-96 w-96 absolute rounded-full"></div>
      <div className="bg-hrms_green -left-20 -bottom-20 bg-opacity-20 h-96 w-96 absolute rounded-full"></div>
      <div className="w-full z-50">
        <form
            onSubmit={(e) => {
              e.preventDefault(), onSubmit(serialize(e.target));
            }} className="max-w-lg space-y-10 mx-auto p-3">
          
          <Image src={logo} alt="" draggable="false" className="mx-auto w-72 " />
          
        </form>
      </div>
    </div> */}


{/* <div className="space-y-4">
            <div className="text-danger text-sm">{errMsg}</div>
            <div className="space-y-5">{children}</div>
          </div> */}