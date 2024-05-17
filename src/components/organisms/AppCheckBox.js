import React, { useState } from 'react'

function AppCheckBox({ name, Boxlable, type, display }) {
    return (
        <div className="flex text-sm">
            <div
                className={`space-x-2 relative -left-2 flex select-none items-center justify-center ${display === 'col' && 'flex-col pb-6'
                    }`}
            >
                <input
                    type={type}
                    id={name+Boxlable}
                    className="peer group hidden appearance-none"
                    name={name}
                />
                <div className="relative top-[1px] bg-white w-7 h-7 rounded-md dark:bg-gray-700 dark:border-gray-500 border peer-hover:hidden peer-checked:hidden " />
                <div className="relative top-[1px] bg-white dark:bg-gray-700 dark:border-gray-500 w-7 h-7 text-xl rounded-md peer-checked:bg-hrms_blue hidden peer-checked:flex peer-hover:border peer-hover:flex items-center justify-center text-gray-300 peer-checked:text-white ">
                    <i className="ri-check-line"></i>
                </div>
                <label
                    htmlFor={name + Boxlable}
                    className={`cursor-pointer flex gap-1 peer-checked:text-blue-400 ${display === 'col' ? 'pt-8 px-2 -top-0 absolute' : 'pl-9 right-9 relative'
                        }`}
                >
                    <span className="first-letter:capitalize text-tertiary-base2 leading-[20px]">
                        {Boxlable}
                    </span>
                </label>
            </div>
        </div>
    );
}
export default AppCheckBox;
