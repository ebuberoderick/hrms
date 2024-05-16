'use client'
import React from 'react'
import SideNav from '../molecules/SideNav'
import { useRouter } from 'next/navigation'
import TopNav from '../molecules/TopNav'

function AppLayout({ children }) {
  const router = useRouter()
  // const isAuthenticated = localStorage.screeningAuthState

  // if (!isAuthenticated) {
  //   router.push("/auth/login")
  // }
  return (
    <div className="bg-gray-50">
        <SideNav />
        <div className='ml-64 space-y-4 p-4 select-none min-h-screen'>
          <div>
            <TopNav />
          </div>
          {children}
        </div>
    </div>
  )
}

export default AppLayout