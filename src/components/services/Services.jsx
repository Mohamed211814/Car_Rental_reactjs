import React from 'react'

import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";


function Services() {

    const skillsData = [
        {
            name : "",
            icon : (<RiCustomerService2Fill className="text-3xl text-primary group-hover:text-black duration-300"/>),
            link : "#",
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, molestias.",
            aosDelay : "500",
        },
        {
            name : "",
            icon : (<MdDesignServices className="text-3xl text-primary group-hover:text-black duration-300"/>),
            link : "#",
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, molestias.",
            aosDelay : "1000",
        },
        {
            name : "",
            icon : (<MdOutlineDraw className="text-3xl text-primary group-hover:text-black duration-300"/>),
            link : "#",
            description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, molestias.",
            aosDelay : "1500",
        },
    ]

  return (
    <div className='py-14 px-44 dark:bg-black dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='pb-12'>
                <h1 className='text-3xl sm:text-4xl font-semibold font-serif text-center'>Why Choose Us</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    skillsData.map((skill , index) => (
                        <div key={index}>
                            <div
                            key={skill.name}
                            data-aos="fade-up"
                            data-aos-delay={skill.aosDelay}
                            className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 dark:bg-gray-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-black bg-slate-100 rounded-lg'
                            >
                                <span className='flex justify-center'>{skill.icon}</span>
                                <h1>{skill.name}</h1>
                                <p>{skill.description}</p>
                                <p>{skill.description}</p>
                                <p>{skill.description}</p>
                                <button className='border-2 border-black px-5 py-2 rounded-md'><a href={skill.link}>Learn More</a></button> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default Services