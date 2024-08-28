import React from 'react'


function AppDatePicker({label}) {
    return (
        <div className='text-[16px] relative rounded-lg'>
            <input type='date' id={label} className='w-full appearance-none border focus:border-hrms_blue border-hrms_blue placeholder-shown:border-gray-300 p-3 peer outline-none rounded-lg placeholder:text-transparent' placeholder={label} />
            <span className='text-xl absolute top-3 right-3 bg-white pointer-events-none text-hrms_blue peer-focus:text-hrms_blue peer-placeholder-shown:text-gray-300'><i className="ri-arrow-down-s-line"></i></span>
            <label className='absolute text-hrms_blue peer-focus:text-hrms_blue pointer-events-none peer-placeholder-shown:text-gray-300 z-20 left-4 peer-placeholder-shown:left-2 peer-focus:left-4 px-1 peer-focus:text-[14px] text-[14px] -top-[9px] transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] peer-focus:-top-[9px] bg-white'>{label}</label>
        </div>
    )
}

export default AppDatePicker