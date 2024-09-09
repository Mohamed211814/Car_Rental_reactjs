import React from 'react'

import car1 from '../../assets/bmw1.png'
import car2 from '../../assets/bmw2.png'
import car3 from '../../assets/bmw3.png'

function CarList() {
 
    const CarData = [
        {
            name : "BMW M",
            price : 100,
            image: car1,
            aosDelay: "0",
        },
        {
            name : "KIA I",
            price : 140,
            image: car2,
            aosDelay: "500",
        },
        {
            name : "BMW M Series",
            price : 100,
            image: car3,
            aosDelay: "1000",
        },
    ]

  return (
    <div className='pb-24 pt-10 dark:bg-gray-900 dark:text-white'>
        <div className='container'>
            {/* HEADING */}
            <h1
            data-aos="fade-up"
            className='text-3xl sm:text-4xl text-center font-semibold font-serif mb-3'>Lorem ipsum dolor sit.</h1>

            <p
            data-aos="fade-up"
            className='text-sm pb-10 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium recusandae architecto alias eveniet numquam fugit non!</p>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        // CAR LISTING CARDS
                        CarData.map((car) => 
                            (<div
                                data-aos="fade-up"
                                data-aos-delay={car.aosDelay}
                                className='space-y-3 border-2 border-gray-500 hover:border-primary p-3 rounded-xl'>
                                <div>
                                    <img className='w-full h-[120px object-contain] sm:translate-x-2 group hover:translate-x-10 duration-500' src={car.image} alt="car_logo" />
                                </div>

                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                    <div className='flex flex-col sm:flex-row justify-center items-start text-xl font-semibold gap-3'>
                                        <p>${car.price}/Day</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                                
                            </div>))
                    }
                </div>
                <div className='flex justify-center pt-10'>
                    <button className='border-2 border-gray-500 px-6 py-2 rounded-lg dark:border-primary dark:text-primary text-xl'>Get Started</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CarList