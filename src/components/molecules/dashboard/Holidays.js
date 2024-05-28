import Modal from '@/components/organisms/Modal'
import React, { useState } from 'react'

function Holidays() {
    const [openModal,setOpenModal] = useState(false)
    return (
        <>
            <Modal closeModal={() => setOpenModal(false)} isOpen={openModal} size={"3xl"}>   
                <form className="grid grid-cols-2">

                </form>
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