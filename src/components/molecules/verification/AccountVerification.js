"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { fetchBanks, saveBankInfo, verifyBanksDetails } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function AccountVerification({ user, VaccountNumber }) {
    const [bankList, setBankList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [proccessing, setProcessing] = useState(false)
    const [comfirm, setComfirm] = useState(false)
    const [bankName, setBankShow] = useState("")
    const [bankInfo, setBankInfo] = useState({})

    const dispatch = useDispatch()

    const fetchAllBanks = async () => {
        const { status, data } = await fetchBanks().catch(err => console.log(err))
        const arr = []
        await data.data.forEach(element => {
            arr.push({ value: element.code, label: element.name })
        });
        setBankList(arr);
    }
    useEffect(() => {
        fetchAllBanks()
    }, [])


    const updateBankInfo = async (e) =>{
        e.preventDefault()
        setProcessing(true)
        const { status, data } = await saveBankInfo(bankInfo).catch(err => console.log(err))
        let x = {}
        x.user = data.data.user
        x.employee = data.data.user.employee
        x.bearer_token = user.bearer_token
        dispatch(addData(x));
        setProcessing(false)
        setShowModal(false)
    }


    const verifyBankDetails = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        setProcessing(true)
        const { status, data } = await verifyBanksDetails(formData).catch(err => console.log(err))
        if (status) {
            if (data.message === "Account number resolved") {
                setComfirm(true)
                data.data.bank_name = bankName
                setBankInfo({ ...data.data })
            }
        }
        setProcessing(false)
    }

    const getBankname = (e) => {
        setBankShow(e.target.selectedOptions[0].innerHTML);
    }


    return (
        <div className='flex-grow'>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_green bg-opacity-10 relative'>
                {VaccountNumber && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Verify Your Account Details</div>
                <div className='text-xs'>You have to verify your Bank account Information</div>
            </div>

            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Bank Account Details Verification
                        </h2>
                    </div>
                    {
                        !comfirm ? (
                            <form onSubmit={(e) => verifyBankDetails(e)} className='space-y-4'>
                                <div className='space-y-3'>
                                    <AppInput name="bank_code" onChange={(e) => getBankname(e)} type="select" required label="Bank" options={[...bankList]} />
                                    <AppInput name="account_number" type="number" required label="Account Number" />
                                </div>
                                <div>
                                    <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-25 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Fetching Information":"Verify Bank Details"}</button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={(e) => updateBankInfo(e)} className='space-y-4'>
                                <div>
                                    <div>
                                        <div className='font-bold'>Bank</div>
                                        <div className='text-gray-400'>{bankInfo.bank_name}</div>
                                    </div>
                                    <div>
                                        <div className='font-bold'>Account Number</div>
                                        <div className='text-gray-400'>{bankInfo.account_number}</div>
                                    </div>
                                    <div>
                                        <div className='font-bold'>Account Name</div>
                                        <div className='text-gray-400 uppercase'>{bankInfo.account_name}</div>
                                    </div>
                                </div> 
                                <div className='flex gap-5'>
                                    <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-25 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Saving Info":"Comfirm"}</button>
                                    <div onClick={() => setComfirm(false)} className="border border-hrms_green w-full flex-grow text-hrms_green rounded-lg py-2 text-center cursor-pointer">Back</div>
                                </div>
                            </form>
                        )
                    }

                </div>
            </Modal>

        </div>
    )
}

export default AccountVerification