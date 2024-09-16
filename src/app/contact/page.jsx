import WebLayout from '@/components/layouts/webLayout'
import AppInput from '@/components/organisms/AppInput'
import React from 'react'

function page() {
  return (
    <WebLayout active={"contact"}>
      <div className="max-w-7xl space-y-16 mx-auto px-4">
        <div className="max-w-xl">
          <div className="text-white text-3xl font-bold">Let&apos;s work together</div>
          <div className="text-gray-300">Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.</div>
        </div>
        <div className="grid grid-cols-2 rounded-lg overflow-hidden">
          <div className="bg-white space-y-10 px-5 py-8">
            <AppInput required label="Enter your Fullname" />
            <AppInput required label="Enter your email address" />
            <AppInput required label="Enter your Organization/Company name" />
            <AppInput label="Enter contact number (Optional)" />
            <AppInput required label="Enter Message" type="textarea" />
          <div className="bg-hrms_green cursor-pointer inline-block px-7 py-3 rounded-full">Send Message</div>
          </div>
          <div className="preload"></div>
        </div>
      </div>
    </WebLayout>
  )
}

export default page