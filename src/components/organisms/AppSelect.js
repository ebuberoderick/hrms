"use client";
import React, { useState } from "react";

function AppSelect({ label, options }) {
  const [selected, setSelected] = useState("");
  const [showOption, setShowOption] = useState(false);
  const figu = Math.random(100000000);
  return (
    <div
      onMouseLeave={() => {
        setShowOption(false),
          document.getElementById(label === "" ? "-" + figu : label).blur();
      }}
      onClick={() => setShowOption(!showOption)}
      className="text-[16px] relative rounded-lg"
    >
      <input
        value={selected}
        readOnly
        id={label === "" ? "-" + figu : label}
        className="w-full border focus:border-hrms_blue border-hrms_blue placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
        placeholder={label}
      />
      <span className="text-xl absolute top-3 right-3 text-hrms_blue peer-focus:text-hrms_blue peer-placeholder-shown:text-gray-300">
        <i className="ri-arrow-down-s-line"></i>
      </span>
      <label className="absolute text-hrms_blue peer-focus:text-hrms_blue pointer-events-none peer-placeholder-shown:text-gray-300 z-20 left-4 peer-placeholder-shown:left-2 peer-focus:left-4 px-1 peer-focus:text-[14px] text-[14px] -top-[9px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-focus:-top-[9px] bg-white">
        {label}
      </label>
      <div
        className={`absolute top-12 pt-3 z-50 w-full ${
          !showOption && "hidden"
        } `}
      >
        <div className={`border border-hrms_blue bg-white p-1 rounded-lg`}>
          {options?.map((e, i) => (
            <div
              key={i}
              onClick={() => setSelected(e)}
              className="hover:bg-gray-100 cursor-pointer rounded-lg p-2"
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppSelect;
