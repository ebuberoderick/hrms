import Image from "next/image";
import React, { useState } from "react";
import logo from "@assets/images/authLogo.png";
import avatar from "@assets/images/avatar/Leslie_Image.png";
import { FiHelpCircle } from "react-icons/fi";

function TopNav({ role,title }) {
  return (
    <div className="bg-white fixed w-screen top-0 left-0 z-50 flex items-center shadow-md py-3 md:px-5">
      <div>
        <div className="w-64"><Image src={logo} className="h-9 w-32" alt="Logo" /></div>
      </div>
      <div className="flex flex-grow">
        <div className="flex-grow font-bold text-lg">{title}</div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <i className="ri-notification-3-line text-lg"></i>
            <div className="absolute bg-danger w-2 h-2 top-1 right-0 border-2 border-white rounded-full"></div>
          </div>
          <FiHelpCircle className="text-lg cursor-pointer" />
          <div className="flex cursor-pointer items-center gap-1 text-sm">
            <div className="w-7 h-7 rounded-full bg-gray-200">
              <Image src={avatar} alt="Michael Michael" />
            </div>
            <div className="hidden sm:block">{role}</div>
            <i className="ri-arrow-down-s-line hidden sm:block relative top-[1px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
