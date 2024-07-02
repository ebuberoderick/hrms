import Link from 'next/link'
import React from 'react'

function NavLink({active,text}) {
    return (
        <Link href="#">
            <div className={`px-5 capitalize text-white hover:text-hrms_green hover:font-bold py-2 ${active && "font-bold text-hrms_green"}`}>
                {text}
            </div>
        </Link>
    )
}

export default NavLink