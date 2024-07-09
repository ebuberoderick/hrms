"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addPromotion, fetchPromotion } from '@/services/authService'
import { AllEmployees, companies } from '@/utility/constants'
import React, { useEffect, useState } from 'react'
import { BiBlock } from 'react-icons/bi'
import { GrDocumentUser } from "react-icons/gr";
import { LiaBullhornSolid, LiaFileAlt } from "react-icons/lia";
import { PiHashStraightLight } from 'react-icons/pi'
import { VscGoToSearch } from "react-icons/vsc";
import { SlBadge, SlPlane } from 'react-icons/sl'
import { RiExchange2Line } from 'react-icons/ri'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [promtn, setpromo] = useState([])
  const [compnis, setCompnis] = useState([])
  const [empl, setAllEmpl] = useState([])


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await addPromotion(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchPromotion().catch(err => console.log(err))
    if (status) {
      setpromo(data?.data[0]);
    }
  }



  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
  }, [])

  return (
    <AppLayout title={"Core HR"}>
      <div className="space-y-6">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Promotion</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="employee_id" type={"select"} required label="Employee Email" options={[...empl]} />
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="promotion_title" type={"text"} required label="Promotion Ttile" />
              <AppInput name="promotion_date" type={"date"} required label="Promotion Date" />
            </div>
            <AppInput name={"description"} type={"textarea"} label="Description" />
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

            <div className="bg-hrms_green space-y-1 rounded-md bg-opacity-10 px-4 py-2">
              <div className="text-2xl text-[#5ad44fbd]">
                <LiaBullhornSolid />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">20</div>
                <div></div>
              </div>
              <div className="text-xs">Total Promotions</div>
            </div>

            <div className="bg-hrms_yellow space-y-1 rounded-md bg-opacity-30 px-4 py-2">
              <div className="text-2xl text-[#c4b428de]">
                <SlBadge />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">47</div>
                <div></div>
              </div>
              <div className="text-xs">Total Awards</div>
            </div>


            <div className="bg-danger space-y-1 rounded-md bg-opacity-10 px-4 py-2">
              <div className="text-2xl text-danger">
                <SlPlane />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">10</div>
                <div></div>
              </div>
              <div className="text-xs">Total Travels</div>
            </div>

            <div className="bg-[#2886c441] space-y-1 rounded-md bg-opacity-20 px-4 py-2">
              <div className="text-2xl text-[#2886c4de]">
                <BiBlock />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">5</div>
                <div></div>
              </div>
              <div className="text-xs">Total Resignation</div>
            </div>



            <div className="bg-danger space-y-1 rounded-md bg-opacity-30 px-4 py-2">
              <div className="text-2xl text-danger">
                <GrDocumentUser />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">8</div>
                <div></div>
              </div>
              <div className="text-xs">Total Complanits</div>
            </div>

          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-danger space-y-1 rounded-md bg-opacity-10 px-4 py-2">
              <div className="text-2xl text-danger">
                <VscGoToSearch />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">12</div>
                <div></div>
              </div>
              <div className="text-xs">Total Query</div>
            </div>

            <div className="bg-danger space-y-1 rounded-md bg-opacity-30 px-4 py-2">
              <div className="text-2xl text-danger">
                <LiaFileAlt />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">6</div>
                <div></div>
              </div>
              <div className="text-xs">Total Termination</div>
            </div>

            <div className="bg-[#2886c441] space-y-1 rounded-md bg-opacity-20 px-4 py-2">
              <div className="text-2xl text-[#2886c4de]">
                <RiExchange2Line />
              </div>
              <div className="flex">
                <div className="flex-grow text-3xl">5</div>
                <div></div>
              </div>
              <div className="text-xs">Total Resignation</div>
            </div>

          </div>
        </div>

        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Promotion
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Promotion are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Promotion</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <table className="w-full divide-y text-sm text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div>
                  Employee
                </th>

                <th className="hidden lg:table-cell">Company</th>
                <th className="hidden sm:table-cell">Promotion Tittle</th>
                <th className="hidden sm:table-cell">Date</th>
                <th className="w-20">Action</th>
              </tr>
              {
                promtn?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div>
                      <div className="flex-grow gap-2 flex">
                        {list.employee.employee_name}
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.company.company_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.promotion_title}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.promotion_date}</div>
                    </td>
                    <td>
                      <div className="text-xl flex gap-1">
                        <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                      </div>
                    </td>
                  </tr>
                ))
              }

            </table>
          </div>
          <div className="">
            <AppPagination totalRecords={promtn} newData={(e) => setpromo(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page