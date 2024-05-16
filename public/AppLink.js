'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function AppLink({text,icon,subMenu}) {
    const [showSub,setShowSub] = useState(false)
    const [active,setActive] = useState("")
    const [activeSub,setActiveSub] = useState("")
    const url = usePathname()
    const openSubMenu = () => {
        setShowSub(!showSub)
    }

    const toggleSibling = (e) => {
        document.getElementById(e).classList.toggle("hidden");
        console.log(document.getElementById(e).parentElement());
    } 

    const checkOpen  = () => {
        const page = url.split("/")
        setActive(page[1])
        if (page.length > 1 && (page[1] === text)) {
            setActiveSub(page[2])
            openSubMenu()
        }
    }

    useEffect(() => {
        checkOpen()
    },[])
    
    return (
        <div>
            {
                (subMenu && subMenu.length > 0) ? 
                (
                    <div onClick={()=> openSubMenu()} className={`flex items-center gap-3 py-2 rounded-full text-gray-500 cursor-pointer px-3 ${active === text ? "text-white bg-[#025C56] rounded-full" : "hover:bg-[#025C56] hover:bg-opacity-70 hover:text-white"}`}>
                        <div className='text-2xl'>{icon}</div>
                        <div className='capitalize flex-grow'>{text}</div>
                        <div className={`text-2xl transform transition-all duration-300`}>{(subMenu && subMenu.length > 0) && (<i className="ri-arrow-right-s-line"></i>)}</div>
                    </div>
                ) :
                (
                    <Link href={`/${text}`}>
                        <div className={`flex items-center gap-3 py-2 rounded-full text-gray-500 cursor-pointer px-3 ${active === text ? "text-white bg-[#025C56] rounded-full" : "hover:bg-[#025C56] hover:bg-opacity-70 hover:text-white"}`}>
                            <div className='text-2xl'>{icon}</div>
                            <div className='capitalize flex-grow'>{text}</div>
                        </div>
                    </Link>
                )
            }
            {(subMenu && showSub && subMenu.length > 0) && (
                <div className='pl-6 text-sm transition-all duration-300'>
                    {
                        subMenu.map((subText,index)=>(
                            <div key={index}>
                                {
                                    subText.extra ? (
                                            <div>
                                                <div onClick={() => toggleSibling(subText.name)} className={`flex py-1 items-center gap-3 text-gray-500 cursor-pointer ${activeSub === subText.name ? "text-[#025C56] font-bold" : "hover:text-[16px] hover:font-bold hover:text-[#025C56]"}`}>
                                                    <div className='capitalize flex-grow'>{subText.name}</div>
                                                    <div className='text-2xl transform transition-all duration-300'><i className="ri-arrow-right-s-line"></i></div>
                                                </div>
                                                <div className='pl-6 space-y-2 hidden' id={subText.name}>
                                                    {
                                                      subText.option.map((e,i)=>(
                                                        <div key={e+i}>
                                                            <Link href={`/${text}/${subText.name}/${e}`}>
                                                                <div className='hover:text-[#025C56] py-1'>{e}</div>
                                                            </Link>
                                                        </div>
                                                      ))  
                                                    }
                                                </div>
                                            </div>
                                    ) : (
                                        <Link href={`/${text}/${subText.name}`}>
                                            <div className={`flex py-2 items-center gap-3 text-gray-500 ${activeSub === subText.name ? "text-[#57aaa5] font-bold" : "hover:text-[16px] hover:font-bold hover:text-[#025C56]"}`}>
                                                <div className='capitalize flex-grow'>{subText.name}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default AppLink