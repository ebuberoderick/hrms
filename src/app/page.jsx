import Image from 'next/image'
import React from 'react'
import bannerImg from "@assets/images/imagecontainer.png"
import vector1 from "@assets/images/Rectangle12.png"
import vector2 from "@assets/images/Rectangle12x.png"
import Frame226 from "@assets/images/Frame226.png"
import Frame from "@assets/images/Frame.png"
import lineImg from "@assets/images/Vector29.png"
import WebLayout from '@/components/layouts/webLayout'
import { FiMinus } from 'react-icons/fi'
import { TbSettingsCog } from 'react-icons/tb'
import { FaBullseye } from 'react-icons/fa'
import { CgArrowsExpandDownLeft } from "react-icons/cg";
import { PiChartBarFill, PiSpeedometerBold } from 'react-icons/pi'
import { RiSignalTowerFill } from 'react-icons/ri'

function Page() {
  return (
    <WebLayout>
      <div className="bg-black overflow-hidden text-white">
        <div className="sm:py-32 relative z-10 space-y-12">
          <div className="h-full flex -z-10 items-center justify-center absolute top-0 right-0">
            <div className="relative bottom-24 w-screen">
              <Image src={lineImg} className="absolute left-0 w-full" />
            </div>
          </div>
          <div className="space-y-16">
            <div className="space-y-4 px-3 sm:space-y-8">
              <div className="sm:text-3xl font-bold max-w-64 sm:max-w-md leading-relaxed mx-auto text-center">Your All-in-One ERP Solution Built for the Public Sector</div>
              <div className="text-[10px] sm:text-xs text-center">Fiscusbook provides the technology and human support to help your business flow.</div>
            </div>
            <div className="max-w-4xl relative overflow-hidden mx-auto">
              <Image src={bannerImg} />
              <div className="absolute top-0 right-0 flex items-end px-12 text-xs py-8 z-50 h-full w-full">
                <div className="grid sm: grid-cols-2 xl:grid-cols-4 border border-white rounded-3xl md:rounded-full p-1 bg-black">
                  <div className="px-8 py-2 bg-hrms_lighter_green rounded-full text-black">Financial Management</div>
                  <div className="px-8 py-2">Human Resources</div>
                  <div className="px-8 py-2">Asset Management</div>
                  <div className="px-8 py-2">Localization</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl px-5 mx-auto rounded-lg bg-gray-400 p-7">
            <div className="bg-black grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4 rounded-md">
              <div className="p-4 bg-gray-600"></div>
              <div className="p-4 bg-gray-600"></div>
              <div className="p-4 bg-gray-600"></div>
              <div className="p-4 bg-gray-600"></div>
              <div className="p-4 bg-gray-600"></div>
              <div className="p-4 bg-gray-600"></div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex pt-7 pb-16 justify-center gap-3 items-center">
            <FiMinus className="text-hrms_green text-4xl" />
            <div className="sm:text-4xl">About Fiscusbook</div>
            <FiMinus className="text-hrms_green text-4xl" />
          </div>
        </div>
        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl px-4 md:space-y-32 mx-auto">
            <div class="mx-auto space-y-3">
              <div class="grid gap-16 items-center md:grid-cols-2">
                <div class="space-y-3 text-sm">
                  <div className="space-y-3">
                    <div className="text-2xl font-bold max-w-sm">FiscusBook</div>
                    <div className="text-[14.5px] leading-7">FiscusBook, inspired by the original meaning of "FISCUS" – the public treasury – is a comprehensive Enterprise Resource Planning (ERP) solution designed specifically for the needs of modern public sector organizations.</div>
                  </div>
                  <div className="inline-flex bg-black px-4 p-2 rounded-full">
                    Discover More Of Fiscusbook
                  </div>
                </div>
                <div class="min-h-96">
                  <Image src={vector1} className='w-full h-full' />
                </div>
              </div>
            </div>

            <div class="mx-auto space-y-3">
              <div class="grid gap-16 items-center md:grid-cols-2">
                <div class="space-y-6 text-sm md:order-1">
                  <div className="space-y-3">
                    <div className="text-2xl font-bold max-w-sm">Streamline Operations and Gain Financial Control</div>
                    <div className="text-[14.5px] leading-7">FiscusBook empowers you to manage every aspect of your organization&apos;s finances, human resources, and assets, all within a single, user-friendly platform. Our integrated suite offers a powerful combination of financial applications designed for the public sector:</div>
                  </div>
                  <div className="inline-flex bg-black px-4 p-2 rounded-full">
                    Discover More Of Financial Control
                  </div>
                </div>
                <div class="min-h-96">
                  <Image src={vector2} className='w-full h-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 space-y-12">
          <div className="space-y-2">
            <div className="flex flex-col items-center">
              <div className="sm:text-2xl font-bold">Unleash the Power of Integration</div>
              <FiMinus className="text-hrms_green text-4xl" />
            </div>
            <div className="max-w-3xl px-6 text-[10px] md:text-sm text-center mx-auto">FiscusBook boasts a robust Open API, allowing seamless integration with your existing systems. This ensures data flows smoothly between your ERP and other critical applications, eliminating data silos and manual processes.</div>
          </div>
          <div className="max-w-3xl px-3 mx-auto">
            <Image src={Frame226} className='' />
          </div>
        </div>
        <div className="">
          <div className="flex pt-7 pb-16 justify-center gap-3 items-center">
            <FiMinus className="text-hrms_green text-4xl" />
            <div className="sm:text-4xl">Benefits of FiscusBook</div>
            <FiMinus className="text-hrms_green text-4xl" />
          </div>
        </div>
        <div className="grid px-4 max-w-4xl pb-24 gap-x-3 gap-y-12 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><TbSettingsCog /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Enhanced Efficiency</div>
              <div className="text-xs">Automate manual tasks, streamline workflows, and save valuable time and resources.</div>
            </div>
          </div>
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><FaBullseye /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Improved Accuracy</div>
              <div className="text-xs">Eliminate data entry errors and ensure consistent financial information across all departments.</div>
            </div>
          </div>
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><RiSignalTowerFill /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Real-Time Insights</div>
              <div className="text-xs">Gain immediate access to critical financial data for informed decision-making.</div>
            </div>
          </div>
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><PiChartBarFill /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Increased Control</div>
              <div className="text-xs">Strengthen financial controls and ensure compliance with regulations.</div>
            </div>
          </div>
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><CgArrowsExpandDownLeft /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Scalability</div>
              <div className="text-xs">FiscusBook is designed to grow with your business, accommodating your evolving needs.</div>
            </div>
          </div>
          <div className="rounded-md flex flex-col space-y-5 p-4 border border-gray-400">
            <div className="text-[100px] text-hrms_green flex-grow"><PiSpeedometerBold /></div>
            <div className="bg-white space-y-2 text-black p-4 rounded-md">
              <div className="font-bold">Simplified Operations</div>
              <div className="text-xs">Manage all aspects of      your organization from a single platform, fostering a collaborative work      environment.</div>
            </div>
          </div>
        </div>
        <div className="pb-24 px-4">
          <div className="h-96 overflow-hidden relative max-w-7xl mx-auto">
            <Image src={Frame} className='h-full w-full' />
            <div className="absolute gap-5 flex items-center flex-col justify-center top-0 right-0 w-full h-full bg-black bg-opacity-70">
              <div className="text-4xl text-center">Get Started with FiscusBook Today!</div>
              <div className="text-[10px] sm:text-sm max-w-3xl px-4 text-center">Request a free demo or contact our sales team to learn more about how FiscusBook can transform your financial management and empower your business for success.</div>
              <div className="bg-hrms_lighter_green text-xs px-4 py-2 rounded-full text-black">Request A Free Demo</div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  )
}

export default Page