"use client"
import AppLayout from '@/components/layouts/appLayout'
import LineChart from '@/components/molecules/LineChart'
import PieChart from '@/components/molecules/PieChart'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import { fetchPayslip } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { FiUploadCloud, FiUsers } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { LuEye } from 'react-icons/lu'
import { PiPrinter } from 'react-icons/pi'
import { RiUserReceivedLine } from 'react-icons/ri'
import { TbCalendarTime } from 'react-icons/tb'

function Page() {
  const [isloading, setIsLoading] = useState(true)
  const [info, setInfo] = useState([])
  const [view, setView] = useState({})

  const fetchPayslipData = async () => {
    const { status, data } = await fetchPayslip().catch(err => console.log(err))
    if (status) {
      setInfo(data.data[0])
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetchPayslipData()
  }, [])

  return (
    <AppLayout title={"Payroll Setups"}>

      <Modal size={"lg"} closeModal={() => setView({})} isOpen={Object.keys(view).length > 0}>
        {console.log(view)
        }
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="font-bold capitalize">basic salary</div>
            <div className="">&#8358;{Number(view.basic_salary).toLocaleString('en-US')}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">gross salary</div>
            <div className="">&#8358;{Number(view.gross_salary).toLocaleString('en-US')}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">net salary</div>
            <div className="">&#8358;{Number(view.net_salary).toLocaleString('en-US')}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">salary allowances</div>
            <div className="">&#8358;{Number(view.salary_allowances).toLocaleString('en-US')}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">salary deductions</div>
            <div className="">&#8358;{Number(view.salary_deductions).toLocaleString('en-US')}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">schedule date</div>
            <div className="">{view.schedule_date}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">status</div>
            <div className="capitalize">{view.status}</div>
          </div>
          <div className="">
            <div className="font-bold capitalize">transaction ref</div>
            <div className="">{view.transaction_ref}</div>
          </div>
        </div>
      </Modal>
      <div className='space-y-5'>
        <div className="flex justify-end">
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
              Export PDF
            </div>
            <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
              Export CSV
            </div>
            <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
              Print
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <table className="w-full divide-y text-xs text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  Net Salary
                </th>
                <th className="hidden lg:table-cell">Salary Month</th>
                <th className="hidden sm:table-cell">Payroll Date</th>
                <th className="hidden sm:table-cell">Status</th>
                <th className="w-20">Action</th>
              </tr>
              {
                info?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex gap-3 pl-5 py-2">
                      <div className="">&#8358;{Number(list.net_salary).toLocaleString('en-US')}</div>
                    </td>
                    <td className="hidden lg:table-cell">&#8358;{Number(list.basic_salary).toLocaleString('en-US')}</td>
                    <td className="hidden sm:table-cell">{list.schedule_date}</td>
                    <td className="hidden sm:table-cell">{list.status}</td>
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div onClick={() => setView(list)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                      </div>
                    </td>
                  </tr>
                ))
              }
              {
                isloading && ["", "", "", "", ""].map((list, i) => (
                  <tr className="" key={i}>
                    <th className="flex gap-3 pl-5 py-2"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="w-20"><div className="preload py-2 w-1/3"></div></th>
                  </tr>
                ))
              }
            </table>
          </div>
          <AppPagination totalRecords={info} newData={(e) => setInfo(e)} />
        </div>
      </div>
    </AppLayout>
  )
}

export default Page