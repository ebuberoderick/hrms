"use client";
import Image from "next/image";
import bg from "@assets/images/bg.png";
import logo from "@assets/images/authLogo.png";
import React from "react";
import { useSelector } from "react-redux";

function AuthLayout({ children, title, subText, onSubmit, errMsg }) {
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

  return (
    <div className="h-screen overflow-hidden relative w-screen flex items-center">
      <div className="bg-hrms_green bg-opacity-15 bottom-44 -left-14 h-28 w-28 absolute rounded-full"></div>
      <div className="bg-hrms_green -right-40 -top-40 bg-opacity-5 h-96 w-96 absolute rounded-full"></div>
      <div className="bg-hrms_green -left-20 -bottom-20 bg-opacity-20 h-96 w-96 absolute rounded-full"></div>
      <div className="w-full">
        <form
            onSubmit={(e) => {
              e.preventDefault(), onSubmit(serialize(e.target));
            }} className="max-w-lg space-y-12 mx-auto p-3">
          
          <Image src={logo} alt="" draggable="false" className="mx-auto w-72 " />
          <div>
            <div className="text-danger text-sm">{errMsg}</div>
            <div className="space-y-5">{children}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthLayout;



{/* <div className="flex flex-col items-center">
              <div>
                <Image src={avatar} alt="" draggable="false" className="" />
              </div>
              <div className="font-bold pb-1 text-3xl md:text-4xl mt-5">
                {title}
              </div>
              <div className="text-xs md:text-sm">{subText}</div>
            </div>
            <div className="text-danger text-sm">{errMsg}</div>
            <div className="space-y-5">{children}</div> */}