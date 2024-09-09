import React from 'react'

import aboutCar from "../../assets/car_about.png"

function About() {
  return (
    <div className='dark:bg-gray-900 dark:text-white duration-300 bg-slate-100'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div 
                data-aos="slide-right"
                data-aos-duration="1500"
                >
                    <img
                    className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
                    src={aboutCar} alt="car_image" />
                </div>

                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1
                        data-aos="fade-up"
                        data-aos-delay="200"

                        className='text-3xl sm:text-4xl font-bold font-serif'>About us</h1>
                        <p
                        data-aos="fade-up"
                        data-aos-delay="300"

                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto expedita ipsa nobis doloremque, odio error!</p>

                        <p
                        data-aos="fade-up"
                        data-aos-delay="600"

                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, consequuntur.</p>

                        <button className='button-outline'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About