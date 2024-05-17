'use client'
import AuthLayout from '@/components/layouts/authLayout'
import AppInput from '@/components/organisms/AppInput'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <AuthLayout title={"Forgot Password"} subText={"Reset Password With email"}>
        <AppInput name="email" required label="Enter Email" type={"email"}/>
        <button className="w-full shadow-md bg-hrms_blue text-white rounded-lg py-3">Send Password Reset Link</button>
        <div className=""><Link href="login" className="text-sm text-hrms_blue">Goto Login</Link></div>
    </AuthLayout>
  )
}

export default Page