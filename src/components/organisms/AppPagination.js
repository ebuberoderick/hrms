import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { pagination } from '@/services/authService';

function AppPagination({ classes, totalRecords, newData, isLoading }) {
    const goto = async (url) => {
        const { status, data } = await pagination(url).catch(err => console.log(err))
        console.log(data);
        newData(data.data[0])
    }

    const fetchPaginate = async (val) => {
        // isLoading(true)
        // let lnk = totalRecords?.next_page_url === null ? totalRecords?.prev_page_url : totalRecords?.next_page_url
        // let url = lnk.split("=")[0]
        // const {status,data} = await pagination(url + `=${val}`).catch(err => console.log(err))
        // newData(data.data)
        // isLoading(false)
    }

    console.log(totalRecords);
    const [links, setLinks] = useState([])
    useEffect(() => {
        // setLinks(Array.from({ length: totalRecords?.last_page }, (n, i) => i + 1))
    }, [totalRecords])
    return (
        <div className="flex flex-wrap gap-4">
            {
                totalRecords?.links.map((link, i) => (
                    <div key={i}>
                        {
                            link.label === "&laquo; Previous" ? (
                                <div className={`${link.active ? "bg-gray-300" : "bg-gray-50 text-gray-200"} px-4 py-2 rounded-lg`}><i class="ri-arrow-left-s-line"></i></div>
                            ) : link.label === "Next &raquo;" ? (
                                <div className={`${link.active ? "bg-gray-300" : "bg-gray-50 text-gray-200"} px-4 py-2 rounded-lg`}><i class="ri-arrow-right-s-line"></i></div>
                            ) : link.label === "..." ? (
                                <div className={`${link.active ? "bg-hrms_green text-white" : "bg-gray-100"} px-4 py-2 rounded-lg`}>{link.label}</div>
                            ) : (
                                <div onClick={() => { !link.active && goto(link.url) }} className={`${link.active ? "bg-hrms_green text-white" : "bg-gray-100"} cursor-pointer px-4 py-2 rounded-lg`}>{link.label}</div>
                            )
                        }
                    </div>
                ))
            }
        </div >
    )
}

export default AppPagination