import WebLayout from '@/components/layouts/webLayout'
import React from 'react'

function page() {
  return (
    <WebLayout active={"partners"}>
      <div className="grid grid-cols-2 gap-5">
        <div className="">Empowering Your Business Growth</div>
        <div className="">Partnering for Success: Innovative Solutions for a Thriving Future.</div>
      </div>
    </WebLayout>
  )
}

export default page