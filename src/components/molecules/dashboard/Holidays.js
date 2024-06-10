import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import { companyEnum } from '@/utility/constants'
import React, { useState } from 'react'

function Holidays() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Modal closeModal={() => setOpenModal(false)} isOpen={openModal} size={"3xl"}>
                <div className="space-y-5">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-[500] text-hrms_green">
                            Create Holiday
                        </h2>
                    </div>
                    <form className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="event_name" type="text" required label="Event name" />
                            <AppInput name="company" type="select" required label="Company" options={[...companyEnum]} />
                            <AppInput name="start_date" type="date" required label="Start Date" />
                            <AppInput name="end_date" type="date" required label="End Date" />
                            <AppInput name="description" type="textarea" required label="Description" />
                            <AppInput name="status" type="select" required label="Status" options={[{ value: "Published", label: "Published" }, { value: "Unpublished", label: "Unpublished" }]} />
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Create</button>
                        </div>
                    </form>

                </div>
            </Modal>
            <div onClick={() => setOpenModal(true)} className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                <div className="">
                    <i className="ri-sun-line"></i>
                </div>
                <div className="">Holidays</div>
            </div>
        </>
    )
}

export default Holidays