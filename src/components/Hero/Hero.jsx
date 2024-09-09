import React from 'react'

import mainCar from "../../assets/main_car.png"

function Hero() {
  return (
    <div className='dark:bg-black dark:text-white duration-300'>
        <div className='container min-h-[620px] flex'>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                    className='order-1 sm:order-2'>
                    <img src={mainCar} alt="" />
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-36'>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"

                        className='text-primary text-2xl font-serif'>Effortless</p> 
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="500"
                        
                        className='text-5xl lg:text-6xl font-semibold font-serif'>Car Rental</h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="900"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugiat, laboriosam ratione ipsum culpa, libero ipsa.</p>
                    <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        
                        className='bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default Hero