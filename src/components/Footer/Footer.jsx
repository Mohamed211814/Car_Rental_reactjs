import React from 'react'

import { BiLogoTelegram } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";

import { AiOutlineInstagram } from "react-icons/ai";
import { LiaFacebookSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <div className=' bg-gray-300 dark:text-white dark:bg-black'>
        <div className="container py-6">
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-start gap-10'>
                    <div>
                    <h1 className='text-3xl pb-2 text-primary'>Car Rental</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea eligendi aspernatur?</p>

                        <div className='mt-5'>

                            <span className='flex items-center gap-3'>
                                <BiLogoTelegram />
                                <p>khalid bayom 1277</p>
                            </span>
                            <span className='flex items-center gap-3'>
                                <IoIosPhonePortrait />
                                <p>+65 784 454 235</p>
                            </span>
                            <span className='flex pt-6 gap-3'>
                                <AiOutlineInstagram className='text-2xl hover:text-primary'/>
                                <LiaFacebookSquare className='text-2xl hover:text-primary'/>
                                <CiLinkedin className='text-2xl hover:text-primary'/>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl pb-2 text-primary'>Important links</h1>
                        <ul className='space-y-3'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                    <h1 className='text-3xl pb-2 text-primary'>Important links</h1>
                        <ul className='space-y-3'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer