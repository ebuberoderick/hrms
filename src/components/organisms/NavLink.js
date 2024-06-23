import Link from 'next/link'
import React from 'react'

function NavLink({active,text}) {
    return (
        <Link href="#">
            <div className={`px-5 capitalize hover:font-bold py-2 ${active && "font-bold border-b-4 border-gray-950"}`}>
                {text}
            </div>
        </Link>
    )
}

export default NavLink