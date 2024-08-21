"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { fetchBanks, saveBankInfo, verifyBanksDetails } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function AccountVerification({ user, VaccountNumber, setStep }) {
    const [bankList, setBankList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [proccessing, setProcessing] = useState(false)
    const [comfirm, setComfirm] = useState(false)
    const [bankName, setBankShow] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [bankInfo, setBankInfo] = useState({})
    const [formInfo, setFormInfo] = useState({
        bank_code: "",
        account_number: ""
    })

    const dispatch = useDispatch()


    const confimation = (f, l, m) => {
        const firstname = user.employee.firstname === null ? "" : user.employee.firstname
        const lastname = user.employee.lastname === null ? "" : user.employee.lastname
        const middlename = user.employee.middlename === null ? "" : user.employee.middlename
        const fullname = firstname + " " + lastname + " " + middlename
        const array = [
            `${f + " " + l + " " + m}`,
            `${f + " " + m + " " + l}`,
            `${m + " " + f + " " + l}`,
            `${m + " " + l + " " + f}`,
            `${l + " " + m + " " + f}`,
            `${l + " " + f + " " + m}`,
            `${f + " " + l}`,
            `${f + " " + m}`,
            `${l + " " + f}`,
            `${l + " " + m}`,
            `${m + " " + l}`,
            `${m + " " + f}`
        ]

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (fullname.toLowerCase() === element.toLowerCase()) {
                return true
            }
        }
    }

    const fetchAllBanks = async () => {
        const { status, data } = await fetchBanks().catch(err => console.log(err))
        if (status) {
            const arr = []
            await data.forEach(element => {
                arr.push({ value: element.code, label: element.name })
            });
            setBankList(arr);
        }
    }
    useEffect(() => {
        fetchAllBanks()
    }, [])


    const updateBankInfo = async (e) => {
        e.preventDefault()
        setProcessing(true)
        const val = {
            bank_name: bankInfo.res.data.identity.data.full_details.bank,
            account_number: bankInfo.acc_number,
            account_name: bankInfo.res.data.identity.data.full_details.account_name
        }
        const { status, data } = await saveBankInfo(val).catch(err => console.log(err))
        if (status) {
            let x = {}
            x.user = data.data.user
            x.employee = data.data.user.employee
            x.bearer_token = user.bearer_token
            dispatch(addData(x));
            setProcessing(false)
            setShowModal(false)
            setStep(3)
        }
    }


    const verifyBankDetails = async (e) => {
        e.preventDefault();
        setProcessing(true)
        const { status, data } = await verifyBanksDetails(formInfo).catch(err => console.log(err))
        if (status) {
            if (data.message === "success") {
                const res = confimation(data.data.res.data.identity.data.firstname.toLowerCase(), data.data.res.data.identity.data.lastname.toLowerCase(), data.data.res.data.identity.data.middlename.toLowerCase());
                if (res) {
                    setComfirm(true)
                    setBankInfo({ ...data.data })
                    setErrorMsg("")
                } else {
                    setErrorMsg(`Bank account name mismatch ${data.data.res.data.identity.data.firstname.toUpperCase(), data.data.res.data.identity.data.lastname.toUpperCase(), data.data.res.data.identity.data.middlename.toUpperCase()}`)
                }
            }

        }
        setProcessing(false)
    }

    const getBankname = (e) => {
        setBankShow(e.target.selectedOptions[0].innerHTML);
    }


    return (
        <div className='flex-grow'>

            <div className='bg-white px-3 py-7 rounded-lg shadow-md'>
                <div className="inline-flex relative bottom-4 items-start justify-between">
                    <h2 className="font-bold md:text-3xl text-hrms_green">
                        Bank Account Details Verification
                    </h2>
                </div>
                {
                    !comfirm ? (
                        <form onSubmit={(e) => verifyBankDetails(e)} className='space-y-4'>
                            <div className='space-y-3'>
                                <AppInput name="bank_code" onChange={(e) => { setFormInfo((prev) => ({ ...prev, bank_code: e.target.value })); getBankname(e) }} type="select" required label="Bank" options={[...bankList]} />
                                <AppInput name="account_number" type="number" onChange={(e) => { setFormInfo((prev) => ({ ...prev, account_number: e.target.value })) }} required label="Account Number" />
                            </div>
                            <div className='text-danger text-sm'>{errorMsg}</div>
                            <div>
                                <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-25 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Fetching Information" : "Verify Bank Details"}</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={(e) => updateBankInfo(e)} className='space-y-4'>
                            <div>
                                <div>
                                    <div className='font-bold'>Bank</div>
                                    <div className='text-gray-400 uppercase'>{bankInfo.res.data.identity.data.full_details.bank}</div>
                                </div>
                                <div>
                                    <div className='font-bold'>Account Number</div>
                                    <div className='text-gray-400'>{bankInfo.acc_number}</div>
                                </div>
                                <div>
                                    <div className='font-bold'>Account Name</div>
                                    <div className='text-gray-400'>{bankInfo.res.data.identity.data.full_details.account_name}</div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-25 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Saving Info" : "Save And continue"}</button>
                                <div onClick={() => setComfirm(false)} className="border border-hrms_green w-full flex-grow text-hrms_green rounded-lg py-2 text-center cursor-pointer">Back</div>
                            </div>
                        </form>
                    )
                }

            </div>

        </div>
    )
}

export default AccountVerification