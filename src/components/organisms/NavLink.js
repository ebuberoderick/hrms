import Link from 'next/link'
import React from 'react'

function NavLink({active,text}) {
    return (
        <Link href={`/${text === "home"? "": text}`}>
            <div className={`px-5 capitalize hover:text-hrms_green hover:font-bold py-2 ${active === text ? "font-bold text-hrms_green":"text-white"}`}>
                {text}
            </div>
        </Link>
    )
}

export default NavLink