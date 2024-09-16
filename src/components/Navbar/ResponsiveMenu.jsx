import React from 'react'

import { FaRegCircleUser } from "react-icons/fa6";


function ResponsiveMenu({ showMenu }) {

    const NavLinks = [
        {
            id:1,
            name : "HOME",
            link : "/#"
        },
        {
            id:2,
            name : "CARS",
            link : "/#cars"
        },
        {
            id:3,
            name : "ABOUT",
            link : "/#about"
        },
        {
            id:4,
            name : "BOOKING",
            link : "/#booking"
        },
    ]

  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md duration-500 flex flex-col justify-between`}>
        <div className='card'>
            <div className="flex items-center justify-center gap-3">
                <div className='flex items-center pt-5 mr-24 gap-2'>
                    <FaRegCircleUser size={35}/>
                    <div>
                        <h1>Hello user</h1>
                        <h1>Premuim user</h1>
                    </div>
                </div>
            </div>
            {/* LINKS */}
            <nav>
                <ul className='space-y-4 pl-6 pt-6'>
                    {
                        NavLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
        <div className='px-5 py-5'>
            <h1>Made by coding reactjs</h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu