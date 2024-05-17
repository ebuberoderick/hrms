'use client'
import AuthLayout from '@/components/layouts/authLayout'
import AppCheckBox from '@/components/organisms/AppCheckBox'
import AppInput from '@/components/organisms/AppInput'
import { Applogin } from '@/apis/services/authService'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const [proccessing, setProccessing] = useState(false)
  const route =  useRouter()

  const login = (e) => {
    setProccessing(true)
    setTimeout(() => {
      route.push("/")
    }, 5000);
    // const { status, data } = Applogin(e).catch(err => console.log(err))
    // console.log(data);
  }

  return (
    <AuthLayout onSubmit={(e) => login(e)} title={"Welcome Back"} subText={"Please fill in your details"}>
      <AppInput name="email" required label="Username" />
      <AppInput name="password" required label="Enter your password" type="password" />
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-grow">
          <AppCheckBox Boxlable="remember me" type="checkbox" name="remember" />
        </div>
        <Link href="forgotten-password" className="text-sm text-hrms_blue hidden sm:block">Forgot Password ?</Link>
      </div>
      <div className="flex gap-3">
        <button disabled={proccessing} className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_blue text-white rounded-lg py-3"> {proccessing ? "Proccessing...":"Log In"}</button>
        <div className="bg-hrms_blue text-white w-12 h-12 rounded-lg text-3xl flex items-center justify-center cursor-pointer"><i className="ri-fingerprint-2-line"></i></div>
      </div>
      <div className=""><Link href="forgotten-password" className="text-sm text-hrms_blue sm:hidden">Forgot Password ?</Link></div>
    </AuthLayout>
  )
}

export default Page