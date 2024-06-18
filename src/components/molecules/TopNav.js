import Image from "next/image";
import React, { useState } from "react";
import avatar from "@assets/images/avatar/Leslie_Image.png";

function TopNav({ role }) {
  return (
    <div className="bg-white flex items-center rounded-lg py-3 md:px-5">
      <div className="flex-grow text-xl">
        <i className="ri-layout-grid-fill"></i> welcome Admin
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <i className="ri-notification-3-line text-xl"></i>
          <div className="absolute bg-danger w-3 h-3 top-1 right-0 border-2 border-white rounded-full"></div>
        </div>
        <div className="flex cursor-pointer items-center gap-1 text-sm">
          <div className="w-8 h-8 rounded-full bg-gray-200">
            <Image src={avatar} alt="Michael Michael" />
          </div>
          <div className="hidden sm:block">{role}</div>
          <i className="ri-arrow-down-s-line hidden sm:block relative top-[1px]"></i>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
