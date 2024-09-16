import React from 'react'

function Contact() {
  return (
    <div className='py-10 dark:bg-gray-950'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 rounded-md place-items-center'>

                <div className='col-span-2 p-4 space-y-5'>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>let's collaborate on your upcoming car rental venture</h1>

                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam blanditiis nihil tempore sequi culpa aperiam.</p>
                </div>

                <div className=''>
                    <a className='bg-primary px-6 py-2 rounded-md' href="#">Contact us</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact