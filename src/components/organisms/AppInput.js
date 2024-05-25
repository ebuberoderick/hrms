'use client'
import React, { useState } from "react";

function AppInput({ label, type, required, name, max, options }) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="text-[16px] relative rounded-lg">
      {type === "select" ? (
        <select
          name={name}
          required={required}
          className="w-full border focus:border-hrms_green border-hrms_green placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
        >
          <option value="" disabled selected hidden>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          required={required}
          type={inputType}
          className="w-full border focus:border-hrms_green border-hrms_green placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
          placeholder={label}
          {...(max ? { max } : {})}
        />
      )}
      <label className="absolute text-hrms_green peer-focus:text-hrms_green pointer-events-none peer-placeholder-shown:text-gray-300 z-20 left-4 peer-placeholder-shown:left-2 peer-focus:left-4 px-1 peer-focus:text-[14px] text-[14px] -top-[9px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-focus:-top-[9px] bg-white">
        {label}
      </label>
      {type === "password" && (
        <div
          className="absolute cursor-pointer text-hrms_green peer-focus:text-hrms_green peer-placeholder-shown:text-gray-300 right-3 top-3"
          onClick={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        >
          {inputType === "password" ? (
            <i className="ri-eye-off-fill"></i>
          ) : (
            <i className="ri-eye-fill"></i>
          )}
        </div>
      )}
    </div>
  );
}

export default AppInput;
