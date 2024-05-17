'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import bg from '@assets/images/authBG.png'
import avatar from '@assets/images/avatar/Img.png'
import React from 'react'

function AuthLayout({children,title,subText,onSubmit}) {

    const serialize = (form) => {
        var result = [];
        if (typeof form === 'object' && form.nodeName === 'FORM')
            Array.prototype.slice.call(form.elements).forEach(function(control) {
                if (
                    control.name && 
                    !control.disabled && 
                    ['file', 'reset', 'submit', 'button'].indexOf(control.type) === -1
                )
                    if (control.type === 'select-multiple')
                        Array.prototype.slice.call(control.options).forEach(function(option) {
                            if (option.selected) 
                                result.push(control.name + '=' + option.value);
                        });
                    else if (
                        ['checkbox', 'radio'].indexOf(control.type) === -1 || 
                        control.checked
                    ) result.push(control.name + '=' +control.value);
            });
            var data = result.join('&').replace(/%20/g, '+')
    
            const serializeToJSON = str => 
                str.split('&')
                .map(x => x.split('='))
                .reduce((acc, [key, value]) => ({
                ...acc,
                [key]: isNaN(value) ? value : Number(value)
                }), {})
    
            return serializeToJSON(data);
    }
    
  const router = useRouter()
  // const isAuthenticated = localStorage.screeningAuthState  

  // if (isAuthenticated) {
  //   router.push("/")
  // }




  return (
    <div className='h-screen w-screen flex items-center'>
        <Image src={bg} alt='' draggable="false" className='w-screen hidden md:block h-4/5 fixed top-0 right-0' />
        <div className='p-3 grid md:grid-cols-2 w-full justify-items-center z-50'>
            <div className='w-full'>
                <form onSubmit={(e) => {e.preventDefault(),onSubmit(serialize(e.target))}} className='max-w-lg space-y-6 mx-auto sm:p-10'>
                    <div className='flex flex-col items-center'>
                        <div><Image src={avatar} alt='' draggable="false" className='' /></div>
                        <div className='font-bold pb-1 text-3xl md:text-4xl mt-5'>{title}</div>
                        <div className='text-xs md:text-sm'>{subText}</div>
                    </div>
                    <div className='space-y-5'>{children}</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout