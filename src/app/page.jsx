import Banner from '@/components/Banner'
import NavBar from '@/components/molecules/NavBar'
import Image from 'next/image'
import React from 'react'
import logowhite from "@assets/images/FiscusBookWhite.png"
import img1 from "@assets/images/img1.png"
import { TiWarning } from "react-icons/ti"
import { BiSolidBullseye } from "react-icons/bi";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import img2 from "@assets/images/img2.png"
import img3 from "@assets/images/img3.png"
import Link from 'next/link'

function Page() {
  const year = new Date().getFullYear()
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="overflow-hidden relative">
        <div className="absolute h-[700px] w-[700px] -right-32 top-80 bg-hrms_green rounded-full"></div>
        <div className="absolute h-[700px] w-[700px] -left-32 top-[1000px] bg-hrms_green rounded-full"></div>
        <div className="pt-20 pb-44 relative h-full top-0 right-0 w-full bg-white backdrop-blur-3xl bg-opacity-85">
          <div class="max-w-7xl p-4 sm:py-32 mx-auto space-y-28">
            <div class="grid gap-5 md:grid-cols-2">
              <div class="space-y-3 text-sm md:order-1">
                <div className="text-shadow shadow-hrms_green font-extrabold text-4xl">
                  This portal allows you to securely
                </div>
                <div className="space-y-6">
                  <div className="">
                    <div className="flex items-center">
                      <div className="bg-hrms_green bg-opacity-10 rounded-md font-bold text-hrms_green px-3 py-1">Enroll</div>
                      <div className="bg-hrms_green bg-opacity-10 flex-grow rounded-md shadow-sm pt-[2px]"></div>
                    </div>
                    <div className="pt-4 text-lg max-w-2xl">
                      If you are a new employee, you can register and submit your details for payroll processing.
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                      <div className="bg-hrms_green bg-opacity-10 rounded-md font-bold text-hrms_green px-3 py-1">Verify</div>
                      <div className="bg-hrms_green bg-opacity-10 flex-grow rounded-md shadow-sm pt-[2px]"></div>
                    </div>
                    <div className="pt-4 text-lg max-w-2xl">
                      Update and confirm your existing information to ensure accurate salary payments.
                    </div>
                  </div>
                </div>
                <div className="relative top-4">
                  <Link href="#" className='px-8 inline-flex items-center gap-2 font-bold rounded-md py-4 bg-hrms_dark_green text-white'>
                    <i class="ri-play-circle-fill text-xl"></i> Learn More
                  </Link>
                </div>
              </div>
              <div class="min-h-72">
                <Image alt='#' src={img1} />
              </div>
            </div>
            <div class="grid items-center gap-5 md:grid-cols-2">
              <div class="space-y-5 text-sm">
                <div className="text-shadow shadow-hrms_green font-extrabold text-4xl">
                  Important Notice
                </div>
                <div className="text-lg">
                  The information you provide on this portal is <span className='font-bold'>confidential</span> and will be used solely for government payroll purposes. Entering any false or misleading information may result in disciplinary action, including suspension of salary payments.
                </div>
                <div className="relative top-4">
                  <Link href="#" className='px-8 inline-flex items-center gap-2 font-bold rounded-md py-4 bg-hrms_dark_green text-white'>
                    <i class="ri-play-circle-fill text-xl"></i> Learn More
                  </Link>
                </div>
              </div>
              <div class="min-h-72">
                <Image alt='#' src={img2} />
              </div>
            </div>
            <div class="grid gap-5 md:grid-cols-2">
              <div class="space-y-3 text-sm md:order-1">
                <div className="text-shadow shadow-hrms_green font-extrabold text-4xl">
                  Unauthorized Access
                </div>
                <div className="space-y-5">
                  <div className="font-bold text-lg">
                    Please be vigilant and take steps to protect your login credentials. This portal uses strong security measures, but it is important to remember:
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 text-lg">
                      <div className="text-hrms_green text-2xl"><i class="ri-share-fill"></i></div>
                      <div className="">Never share your login information with anyone</div>
                    </div>
                    <div className="flex items-start gap-4 text-lg">
                      <div className="text-hrms_green text-2xl"><TiWarning /></div>
                      <div className="">Be cautious of phishing attempts – emails or messages that appear to be from IPPIS but are trying to steal your login details.</div>
                    </div>
                    <div className="flex items-start gap-4 text-lg">
                      <div className="text-hrms_green text-2xl"><BiSolidBullseye /></div>
                      <div className="">Report any suspicious activity to the IPPIS Helpdesk immediately.</div>
                    </div>
                  </div>
                </div>
                <div className="relative top-4">
                  <Link href="#" className='px-8 inline-flex items-center gap-2 font-bold rounded-md py-4 bg-hrms_dark_green text-white'>
                    <i class="ri-play-circle-fill text-xl"></i> Learn More
                  </Link>
                </div>
              </div>
              <div class="min-h-72">
                <Image alt='#' src={img3} />
              </div>
            </div>
            <div className="shadow-md overflow-hidden border relative rounded-lg">
              <div className="absolute h-[700px] w-[700px] bg-hrms_green rounded-full -bottom-96 -right-72"></div>
              <div className="absolute h-[700px] w-[700px] bg-hrms_green rounded-full -top-96 -left-40"></div>
              <div className="pt-20 pb-44 relative h-full top-0 right-0 w-full bg-white backdrop-blur-3xl bg-opacity-85">
                <div className="max-w-3xl space-y-9 mx-auto text-center">
                  <div className="text-xl px-3 md:text-4xl font-bold">
                    Want To Know More About government enrolment and verification portal?
                  </div>
                  <div className="text-sm mx-auto max-w-md">
                    We&apos;d love to enlighten you more about how FiscusBook can support your business&apos;s HR need.
                  </div>
                  <div className="relative top-4">
                    <Link href="#" className='px-8 inline-flex items-center gap-2 font-bold rounded-md py-4 bg-hrms_dark_green text-white'>
                      <i class="ri-play-circle-fill text-xl"></i> Book A Section
                    </Link>
                  </div>
                </div>
                <div className="sm:absolute relative top-16 sm:top-auto w-96 border-t border-r shadow-md rounded-tr-lg px-6 py-8">
                  <div className="flex">
                    <div className="flex-grow">Announcement</div>
                    <div className="-space-x-3">
                      <div className="w-8 inline-block h-8 bg-gray-100 rounded-full"></div>
                      <div className="w-8 inline-block h-8 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-grow">Onboarding new member</div>
                    <div className="-space-x-3">
                      <div className="w-8 inline-block h-8 bg-gray-100 rounded-full"></div>
                      <div className="w-8 inline-block h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-8 inline-block h-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-grow">Monthly report analytics</div>
                    <div className="-space-x-3">
                      <div className="w-8 inline-block h-8 bg-gray-100 rounded-full"></div>
                      <div className="w-8 inline-block h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-8 inline-block h-8 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y bg-gradient-to-b px-4 from-hrms_green via-hrms_dark_green to-hrms_dark_green text-white divide-gray-300 *:max-w-7xl *:mx-auto ">
        <div className="py-16 space-y-6 sm:space-y-0 sm:flex items-center">
          <div className="flex-grow text-lg flex items-center gap-4">
            Powered By: <Image alt='#' src={logowhite} className='w-32' />
          </div>
          <div className="text-3xl flex gap-4">
            <FaLinkedin />
            <FaFacebookSquare />
            <FaSquareXTwitter />
          </div>
        </div>
        <div className="text-center py-14">Copyright &copy; {year} FISCUSBOOK - All rights reserved.</div>
      </div>
    </div>
  )
}

export default Page