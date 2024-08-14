'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addDepartment, createRole, deleteRoleAPI, fetchDepartment, fetchPermissionsList, fetchRoleList } from '@/services/authService'
import { AllEmployees, companies, companyEnum } from '@/utility/constants'
import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [deleteRole, setDeleteRole] = useState({})
  const [compnis, setCompnis] = useState([])
  const [processing, setProcessing] = useState(false)
  const [processingx, setProcessingx] = useState(false)
  const [employees, setEmployees] = useState([])
  const [permissionLIst, setPermissionLIst] = useState([])
  const [roles, setroles] = useState([])
  const [perission, setPerission] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [viewInfo, setViewInfo] = useState({})


  const add = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    formData.permissions = permissionLIst
    const { status, data } = await createRole(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setShowModal(false)
    }
    setAlert(true)
    setAlertData(data)
    setProcessing(false)
  }


  const deleteRoleFN = async (e) => {
    e.preventDefault()
    const formData = serialize(e.target);
    setProcessingx(true)
    const { status, data } = await deleteRoleAPI(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setDeleteRole({})
    }
    setAlert(true)
    setAlertData(data)
    setProcessingx(false)
  }

  const updateList = (e) => {
    const num = e.target.value
    if (permissionLIst.includes(num)) {
      const arr = permissionLIst
      const index = arr.indexOf(num);
      const x = arr.splice(index, 1);
      setPermissionLIst(arr)
    } else {
      setPermissionLIst([...permissionLIst, num])
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchRoleList().catch(err => console.log(err))
    if (status) {
      setroles(data.data[0])
    }
    setIsloading(false)
  }

  const fetchPermissions = async () => {
    const { status, data } = await fetchPermissionsList().catch(err => console.log(err))
    if (status) {
      setPerission(data.data);
    }
  }



  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    fetchPermissions()
    AllEmployees().then(res => setEmployees([...res]))
  }, [])


  return (
    <AppLayout title={"Customize Settings"}>
      <div className="space-y-5">
        <Modal closeModal={() => setShowModal(false)} size={"2xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4 h-[500px] overflow-y-auto overflow-x-hidden">
            <div className="text-hrms_green text-xl">Add New Role</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <AppInput name="name" type={"text"} required label="Role Name" />
              </div>

              {
                perission.map((list, i) => (
                  <div key={i} className="text-xs">
                    <AppInput type={"checkbox"} onChange={(e) => updateList(e)} value={list.id} label={list.name} />
                  </div>
                ))
              }

            </div>
            <button disabled={processing} className={`bg-hrms_green w-full rounded-lg text-white py-2 ${processing && "opacity-20"}`}>{processing ? "Creating Role" : "Create Role"}</button>
          </form>
        </Modal>
        <Modal closeModal={() => setDeleteRole({})} size={"sm"} isOpen={Object.keys(deleteRole).length > 0}>
          <form onSubmit={(e) => deleteRoleFN(e)} className="space-y-4 overflow-y-auto overflow-x-hidden">
            <div className="text-center">Are you sure you want to delete <span className='font-extrabold uppercase'>{deleteRole.name}</span> role</div>
            <input type="hidden" name='id' value={deleteRole.id} />
            <button disabled={processingx} className={`bg-hrms_green w-full rounded-lg text-white py-2 ${processingx && "opacity-20"}`}>{processingx ? "Deleting" : "Comfirm"}</button>
          </form>
        </Modal>
        <Modal closeModal={() => setViewInfo({})} size={"xl"} isOpen={Object.keys(viewInfo).length > 0}>
          <div className="space-y-4">
            <div className="">
              <div className="font-extrabold">Role Name:</div>
              <div className="">{viewInfo.name}</div>
            </div>
            <div className="">
              <div className="font-extrabold">Permissions:</div>
              <div className="grid grid-cols-2 gap-2">
                {
                  viewInfo?.permissions?.map((perms,i) => (
                    <div key={i} className="flex gap-1 items-center">
                      <div className="">{i+1}. </div>
                      <div className=""> {perms.name}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Role and Access
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company role and access are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Role</div>
            </div>
            {/* <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <FaRegCircleUser />
              <div className="">Assign Role</div>
            </div> */}
          </div>
        </div>
        <table className="w-full divide-y text-sm text-left">
          <tr className="bg-gray-100">
            <th className="flex gap-3 pl-5 py-2">
              Permission Role
            </th>

            <th className="hidden lg:table-cell">Description</th>
            <th className="hidden sm:table-cell">Created At</th>
            <th className="hidden sm:table-cell">Status</th>
            <th className="w-20">Action</th>
          </tr>
          {
            roles?.map((role, i) => (
              <tr key={i}>
                <td className="flex items-center gap-3 pl-5 py-2">
                  {/* <div className="w-9 relative">
                    <div className=""><AppInput type="checkbox" /></div>
                  </div> */}
                  <div className="flex-grow gap-2 flex">
                    {role.name}
                  </div>
                </td>
                <td className="hidden lg:table-cell">
                  {/* <div className="font-semibold">{role.employee.employee_name}</div> */}
                </td>
                <td className="hidden sm:table-cell">
                  <div className="">{role.created_at.split("T")[0]}</div>
                </td>
                <td className="hidden sm:table-cell">
                  {/* <div className="">{role.company.company_name}</div> */}
                </td>
                <td>
                  <div className="text-xl flex gap-1">
                    <div className="text-hrms_blue p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                    <div onClick={() => setViewInfo(role)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-eye-line"></i></div>
                    <div onClick={() => setDeleteRole(role)} className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                  </div>
                </td>
              </tr>
            ))
          }
          {
            isloading && ["", "", "", "", ""].map((role, i) => (
              <tr key={i}>
                <td className="flex items-center gap-3 pl-5 py-2">
                  <div className="preload w-3/4 py-3"></div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="preload w-3/4 py-3"></div>
                </td>
                <td className="hidden sm:table-cell">
                  <div className="preload w-3/4 py-3"></div>
                </td>
                <td className="hidden sm:table-cell">
                  <div className="preload w-3/4 py-3"></div>
                </td>
                <td>
                  <div className="text-xl flex gap-1">
                    <div className="preload w-1/3 py-3"></div>
                    <div className="preload w-1/3 py-3"></div>
                    <div className="preload w-1/3 py-3"></div>
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
        <AppPagination totalRecords={roles} newData={(e) => setroles(e)} />
      </div>
      <ResponseModal
        status={alertMsgData?.success}
        isOpen={alertMsg}
        onClose={() => setAlert(false)}
        message={alertMsgData?.message}
      />
    </AppLayout>
  )
}

export default Page