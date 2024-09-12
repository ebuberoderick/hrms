'use client'
import AuthLayout from '@/components/layouts/authLayout'
import AppCheckBox from '@/components/organisms/AppCheckBox'
import AppInput from '@/components/organisms/AppInput'
import { resendOtp, verifyOtp } from '@/services/authService'
import Link from 'next/link'
import React, { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { Session, SignInAuth } from '@/hooks/Auth'

function Page() {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const [proccessing, setProccessing] = useState(false)
  const [errMsg, setErrMsg] = useState(false)
  const email = searchParams.get('email')
  const router = useRouter()

  const user = useSelector(state => state.User)

  const resend = async () => {
    const { status, data } = await resendOtp({email}).catch(err => console.log(err))
    if (status) {
      alert(data.message)
    }
  }


  const login = async (e) => {
    setProccessing(true)
    const { status, data } = await verifyOtp(e).catch(err => console.log(err))
    setProccessing(false)    
    if (status) {
      setErrMsg('')
      SignInAuth(data, dispatch)
      router.push("/dashboard")
      window !== "undefined" && window.location.reload()
    } else {
      setErrMsg(data.message)
    }
  }


  return (
    <AuthLayout errMsg={errMsg} onSubmit={(e) => login(e)} title={"Welcome Back"} subText={"Please fill in your details"}>
      <input type="hidden" name='email' value={email} />
      <AppInput name="otp" required label="Enter OTP" type="text" />
      <div onClick={resend} className="text-sm text-hrms_green hidden sm:block">Resend OTP ?</div>
      <div className="flex gap-3">
        <button disabled={proccessing} className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_green text-white rounded-lg py-3"> {proccessing ? "Comfirming..." : "Comfirm OTP"}</button>
      </div>
    </AuthLayout>
  )
}

export default Page