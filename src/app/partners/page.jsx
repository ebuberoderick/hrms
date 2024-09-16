import WebLayout from '@/components/layouts/webLayout'
import React from 'react'
import { TbClockCog } from 'react-icons/tb'

function page() {
  return (
    <WebLayout active={"partners"}>
      <div className="md:grid max-w-7xl p-4 mx-auto grid-cols-2 gap-5">
        <div className="space-y-2">
          <div className="text-white text-2xl">Empowering Your Business Growth</div>
          <div className="text-gray-200">Partnering for Success: Innovative Solutions for a Thriving Future.</div>
          <div className="bg-hrms_green cursor-pointer inline-block px-7 py-3 rounded-full">Become A Partner</div>
        </div>
        <div className="h-96"></div>
      </div>
      <div className="bg-hrms_light_green py-12">
        <div className="md:grid max-w-7xl p-4 mx-auto grid-cols-2 gap-5">
          <div className="md:order-1 space-y-10">
            <div className="space-y-4">
              <div className="text-2xl">Partner with a trusted brand</div>
              <div className="text-gray-600">Partnering with a trusted brand can significantly enhance your business&apos;s credibility and reach. Established brands bring a wealth of experience, market recognition, and a loyal customer base that can be invaluable for new or growing companies. </div>
            </div>
            <div className="bg-hrms_green cursor-pointer inline-block px-7 py-3 rounded-full">Become A Partner</div>
          </div>
          <div className="h-72"></div>
        </div>
      </div>
      <div className="bg-black py-12">
        <div className="max-w-lg text-center space-y-3 mx-auto py-12">
          <div className="text-xl font-bold text-white">Be successful with Fiscusbook</div>
          <div className="text-gray-300">
            Together we provide innovative solutions and services that empower millions of customers and types of businesses to thrive in an ever-changing digital world. We offer a tailored experience to enable and support you to grow your business.
          </div>
        </div>
      </div>
      <div className="bg-hrms_dark_green bg-opacity-10 py-3 text-hrms_lighter_green text-center">Tools</div>
      <div className="bg-gray-800 bg-opacity-20 py-12 px-4">
        <div className="grid grid-cols-4 text-xl gap-5 max-w-7xl mx-auto">
          <div className="space-y-2">
            <div className="text-5xl text-hrms_green"><TbClockCog /></div>
            <div className="text-gray-400">Straightforward programmes with relevant benefits and incentives</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl text-hrms_green"><TbClockCog /></div>
            <div className="text-gray-400">Simple path to realise value and return your investments</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl text-hrms_green"><TbClockCog /></div>
            <div className="text-gray-400">Easy to onboard to our digital environment</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl text-hrms_green"><TbClockCog /></div>
            <div className="text-gray-400">Easy to onboard to our digital environment</div>
          </div>
        </div>
      </div>
      <div className="bg-black py-12 px-4 space-y-8">
        <div className="text-center font-bold text-2xl text-white">Testimony</div>
        <div className="max-w-5xl mx-auto grid gap-5 grid-cols-3">
          <div className="rounded-lg bg-hrms_light_green overflow-hidden">
            <div className="h-52 overflow-hidden rounded-lg preload"></div>
            <div className="space-y-4 py-8 px-4">
              <div className="">
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-gray-400">Small Business Owner</div>
              </div>
              <div className="text-sm text-gray-600">FiscusBook has been a game-changer for my small business! The user-friendly interface makes managing my finances so much easier. I can track my expenses, manage invoices, and stay on top of my budget effortlessly. Highly recommend it to any entrepreneur!</div>
            </div>
          </div>
          <div className="rounded-lg bg-hrms_light_green overflow-hidden">
            <div className="h-52 overflow-hidden rounded-lg preload"></div>
            <div className="space-y-4 py-8 px-4">
              <div className="">
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-gray-400">Small Business Owner</div>
              </div>
              <div className="text-sm text-gray-600">FiscusBook has been a game-changer for my small business! The user-friendly interface makes managing my finances so much easier. I can track my expenses, manage invoices, and stay on top of my budget effortlessly. Highly recommend it to any entrepreneur!</div>
            </div>
          </div>
          <div className="rounded-lg bg-hrms_light_green overflow-hidden">
            <div className="h-52 overflow-hidden rounded-lg preload"></div>
            <div className="space-y-4 py-8 px-4">
              <div className="">
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-gray-400">Small Business Owner</div>
              </div>
              <div className="text-sm text-gray-600">FiscusBook has been a game-changer for my small business! The user-friendly interface makes managing my finances so much easier. I can track my expenses, manage invoices, and stay on top of my budget effortlessly. Highly recommend it to any entrepreneur!</div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  )
}

export default page