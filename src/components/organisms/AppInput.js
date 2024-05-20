import React, { useState } from "react";

function AppInput({ label, type, required, name }) {
  const [inputType, setInputType] = useState(type);
  return (
    <div className="text-[16px] relative rounded-lg">
      <input
        name={name}
        required={required}
        type={inputType}
        className="w-full border focus:border-hrms_blue border-hrms_blue placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent"
        placeholder={label}
      />
      <label className="absolute text-hrms_blue peer-focus:text-hrms_blue pointer-events-none peer-placeholder-shown:text-gray-300 z-20 left-4 peer-placeholder-shown:left-2 peer-focus:left-4 px-1 peer-focus:text-[14px] text-[14px] -top-[9px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-focus:-top-[9px] bg-white">
        {label}
      </label>
      {type === "password" && (
        <div
          className="absolute cursor-pointer text-hrms_blue peer-focus:text-hrms_blue peer-placeholder-shown:text-gray-300 right-3 top-3"
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
