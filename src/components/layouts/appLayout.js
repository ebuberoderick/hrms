'use client'
import React from 'react'
import SideNav from '../molecules/SideNav'
import { useRouter } from 'next/navigation'
import TopNav from '../molecules/TopNav'
import { useSelector } from 'react-redux'
import { Session } from '@/hooks/Auth'

function AppLayout({ children }) {
  const user = useSelector(state => state.User)
  const isAuthenticated = Session(user)
  console.log(isAuthenticated.status);
  const router = useRouter()

  if (isAuthenticated.status === "unauthenticated") {
    router.push("/auth/login")
  } else {
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
}

export default AppLayout