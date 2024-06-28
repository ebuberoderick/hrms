import React from 'react'

function KinVerification({ user, Vkin }) {
    console.log(user);
    return (
        <div>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-40 relative'>
                {Vkin && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Add Next of Kin</div>
                <div className='text-xs'>Update next of kin informations</div>
            </div>

        </div>
    )
}

export default KinVerification