"use client"
import React, { useEffect, useState } from 'react'
import Modal from '../organisms/Modal'
import AppInput from '../organisms/AppInput'
import serialize from '@/hooks/Serialize'
import { BsShieldCheck } from "react-icons/bs";
import { fetchBanks, updateEmployeeInfo, verifyBVN, verifyBanksDetails, verifyNIN, verifyPhone } from '@/services/authService'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import axios from 'axios'
import BioInfo from './verification/BioInfo'
import EmploymentVerification from './verification/EmploymentVerification'
import AccountVerification from './verification/AccountVerification'
import BvnVerification from './verification/BvnVerification'
import NinVerification from './verification/NinVerification'
import OtherVerification from './verification/OtherVerification'
import { addData } from '@/Store/reducers/UsersReducer'
import KinVerification from './verification/KinVerification'
import AddressVerification from './verification/AddressVerification'

function Verifications({ Vbvn, Vnin, VaccountNumber, Vaddress, Vothers, Vemployment, Vbio, Vkin }) {
    const [errMsg, setErrMsg] = useState("")
    const [Bvnform, setBvnForm] = useState(false)
    const [proccessing, setProcessing] = useState(false)
    const user = useSelector((state) => state?.User.value);
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
            if (fullname === element) {
                return true
            }
        }
    }



    const NINVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyNIN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            confimation(data.data.identity.data.firstname.toLowerCase(), data.data.identity.data.lastname.toLowerCase(), data.data.identity.data.middlename.toLowerCase());
        } else {
            setErrMsg(data.message)
        }
    }


    return (
        <div className='space-y-2'>
            <div className='text-sm'>
                Complete all Verifications Stages before you can perform any action on your dashboard
            </div>
            <div className='flex flex-wrap gap-3'>
                <BioInfo proccessing={proccessing} user={user} Vbio={Vbio} />
                <EmploymentVerification proccessing={proccessing} user={user} Vemployment={Vemployment} />
                <AccountVerification proccessing={proccessing} user={user} VaccountNumber={VaccountNumber} />
                <BvnVerification proccessing={proccessing} user={user} Vbvn={Vbvn} />
                <NinVerification proccessing={proccessing} user={user} Vnin={Vnin} />
                {/* <KinVerification user={user} Vkin={Vkin} /> */}
                {/* <AddressVerification user={user} Vaddress={Vaddress} /> */}
                <OtherVerification proccessing={proccessing} user={user} Vothers={Vothers} />
            </div>
        </div>
    )
}

export default Verifications