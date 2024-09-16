import WebLayout from '@/components/layouts/webLayout'
import FaqChip from '@/components/molecules/FaqChip'
import React from 'react'

function page() {
  const faq = [
    {
      question:"What is Fiscusbook?",
      answer : "Answer"
    },
    {
      question:"Who can use FiscusBook?",
      answer : "Answer"
    },
    {
      question:"How secured is Fiscusbook?",
      answer : "Answer"
    },
    {
      question:"Is FiscusBook secure?",
      answer : "Answer"
    },
    {
      question:"Can I link my bank accounts to FiscusBook?",
      answer : "Answer"
    },
    {
      question:"How does FiscusBook help with budgeting?",
      answer : "Answer"
    },
    {
      question:"What types of reports can I generate with FiscusBook?",
      answer : "Answer"
    },
    {
      question:"Can I create and send invoices using FiscusBook?",
      answer : "Answer"
    },
    {
      question:"Can I export my data from FiscusBook?",
      answer : "Answer"
    },
    {
      question:"Does FiscusBook offer integrations with other tools?",
      answer : "Answer"
    },
    {
      question:"What payment plans are available for FiscusBook?",
      answer : "Answer"
    },
  ]
  return (
    <WebLayout active={"help"}>
      <div className="md:grid grid-cols-5 max-w-7xl gap-5 mx-auto p-4">
        <div className="md:col-span-2 text-white">
          <div className="[font-family:Mabry_Pro] text-4xl font-bold">Frequently Asked Questions</div>
          <div className="">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our <span className='text-hrms_green'>customer support</span> team.
          </div>
        </div>
        <div className="md:col-span-3 space-y-5">
          {
            faq.map((data,i) => <FaqChip data={data} key={i} />)
          }
        </div>
      </div>
    </WebLayout>
  )
}

export default page