import React, { useState } from 'react'

import ResponsiveMenu from './ResponsiveMenu';

import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";



function Navbar({ theme , setTheme }) {

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

    const [showMenu , setShowMenu] = useState(false)

    const togglemenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <nav className='shadow-lg dark:bg-black dark:text-white duration-300'>
        <div className='container py-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-semibold'>Car Rental</h1>

                <ul className='hidden sm:flex items-center gap-6'>
                    {
                        NavLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className='hover:border-b-2 hover:text-primary hover:border-primary transition-colors
                            duration-300'>{item.name}</a>
                        </li>
                        ))
                    }
                </ul>

                <div>
                    {
                        theme === 'dark' ? (
                        <MdSunny className='text-2xl cursor-pointer' onClick={() => setTheme("light")}/>
                    ) : (
                    <IoMdMoon className='text-2xl cursor-pointer' onClick={() => setTheme("dark")}/>
                    )
                    }
                </div>
                {
                    showMenu ? (
                        <HiMenuAlt1
                            onClick={togglemenu}
                            size={30}
                            className='cursor-pointer transition-all'
                        />
                    ) : (
                        <HiMenuAlt3
                            onClick={togglemenu}
                            size={30}
                            className='cursor-pointer transition-all'
                        />
                    )
                }
            </div>     
        </div>
        <ResponsiveMenu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar