import React from 'react'
import coatOfArms from "@assets/images/Coat_of_arms.png"
import union from "@assets/images/Union.png"
import Link from 'next/link'
import Image from 'next/image'

function Banner() {
  return (
    <div className="overflow-hidden bg-hrms_green bg-opacity-10  h-screen relative">
      <div className="absolute h-[700px] w-[700px] bg-hrms_green rounded-full -bottom-96 -left-40"></div>
      <div className="absolute h-[700px] w-[700px] bg-hrms_green rounded-full -top-96 -right-72"></div>
      <div className="relative h-screen top-0 right-0 w-full bg-white backdrop-blur-3xl bg-opacity-30 px-12">
        <div className='h-full'>
          <div class="grid bg-gradient-to-b from-transparent p-4 to-white bg-opacity-20 backdrop-blur-2xl h-screen w-full items-center gap-5">
            <div className='max-w-7xl mx-auto grid gap-5 md:grid-cols-2'>
              <div class="space-y-5 pl-12 text-sm">
                <div className="text-hrms_dark_green flex text-2xl">
                  <Image alt='#' src={union} /> Welcome To
                </div>
                <div className="text-5xl leading-snug uppercase font-extrabold">
                  GOVERNMENT ENROLMENT and verification portal
                </div>
                <div className="relative top-4">
                  <Link href="#" className='px-8 inline-flex items-center gap-2 font-bold rounded-md py-4 bg-hrms_dark_green text-white'>
                    <i class="ri-play-circle-fill text-xl"></i> Learn More
                  </Link>
                </div>
              </div>
              <div class="min-h-72 flex items-center justify-center">
                <Image alt='#' src={coatOfArms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner