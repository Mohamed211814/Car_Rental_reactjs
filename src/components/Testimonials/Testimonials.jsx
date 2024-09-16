import React from 'react'

import person1 from '../../assets/person1.jpeg'
import person2 from '../../assets/person33.jpg'
import person3 from '../../assets/person3.jpeg'

function Testimonials() {

    const userTestimonial = [
        {
            name : "khalid wafay",
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum suscipit sunt numquam molestias rem porro officiis repellendus aperiam recusandae?",
            image : person1,
        },
        {
            name : "hamza abodahab",
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum suscipit sunt numquam molestias rem porro officiis repellendus aperiam recusandae?",
            image : person2,
        },
        {
            name : "jamal falah",
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum suscipit sunt numquam molestias rem porro officiis repellendus aperiam recusandae?",
            image : person3,
        },
    ]

  return (
    <div className='dark:bg-black dark:text-white'>
        <div className="container min-h-[400px] pt-12">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 space-y-3 px-10 sm:px-2'>
                {
                    userTestimonial.map((user , index) =>
                        (<div key={index} className='border-2 border-gray-500 rounded-lg text-center p-4 dark:bg-slate-900'>
                            <div className='flex justify-center pb-4 lg:pb-8'>
                                <img className='w-[70px] rounded-full' src={user.image} alt="" />
                            </div>
                            <span className=''>
                                ⭐⭐⭐⭐⭐
                            </span>
                            <div>
                                <h1 className='text-xl font-semibold py-4'>{user.name}</h1>
                                <p className=''>{user.review}</p>
                            </div>
                        </div>))
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials