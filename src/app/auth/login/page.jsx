'use client'
import AuthLayout from '@/components/layouts/authLayout'
import AppCheckBox from '@/components/organisms/AppCheckBox'
import AppInput from '@/components/organisms/AppInput'
import { Applogin } from '@/services/authService'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { Session, SignInAuth } from '@/hooks/Auth'

function Page() {
  const dispatch = useDispatch()
  const [proccessing, setProccessing] = useState(false)
  const [errMsg, setErrMsg] = useState(false)
  const router = useRouter()
  const user = useSelector(state => state.User)

  const login = async (e) => {
    setProccessing(true)
    const { status, data } = await Applogin(e).catch(err => console.log(err))
    setProccessing(false)
    if (status) {
      setErrMsg('')
      SignInAuth(data,dispatch)
      router.push("/")
    } else {
      setErrMsg(data.message)
    }
    
  }


  // const isAuthenticated = Session(user)

 
  return (
    <AuthLayout errMsg={errMsg} onSubmit={(e) => login(e)} title={"Welcome Back"} subText={"Please fill in your details"}>
      <AppInput name="email" required label="Username" />
      <AppInput name="password" required label="Enter your password" type="password" />
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-grow">
          <AppCheckBox Boxlable="remember me" type="checkbox" name="remember" />
        </div>
        <Link href="forgotten-password" className="text-sm text-hrms_green hidden sm:block">Forgot Password ?</Link>
      </div>
      <div className="flex gap-3">
        <button disabled={proccessing} className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_green text-white rounded-lg py-3"> {proccessing ? "Proccessing..." : "Log In"}</button>
        <div className="bg-hrms_green text-white w-12 h-12 rounded-lg text-3xl flex items-center justify-center cursor-pointer"><i className="ri-fingerprint-2-line"></i></div>
      </div>
      <div className=""><Link href="forgotten-password" className="text-sm text-hrms_green sm:hidden">Forgot Password ?</Link></div>
    </AuthLayout>
  )
}

export default Page