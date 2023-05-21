import React from 'react'
import bgimage from '../assets/images/ssdcaa.png'

const Statistics = () => {
    return (
        <section className='relative z-20 flex flex-col pt-4 pb-4 md:h-[800px] h-[600px]'>
            <div>
                <img src={bgimage} alt="" className='opacity-40 w-full h-auto items-center justify-center text-center  ' />
            </div>
            <div className='absolute mx-4'>
                <div className='px-4 flex items-center gap-4'>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-2 border-gray-500 bg-white text-gray-500">
                        <span className="md:text-2xl text-xl">16</span>
                    </div>
                    <p className='md:text-[20px] text-[16px] font-bold'>Years in Business</p>
                </div>
                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-12  md:h-32 h-24' />
                <div className='px-4 flex items-center gap-4'>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-2 border-gray-500 bg-white text-gray-500">
                        <span className="md:text-2xl text-xl">11</span>
                    </div>
                    <p className='md:text-[20px] text-[16px] font-bold'>International Airlines</p>
                </div>

                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-12  md:h-32 h-24' />
                <div className='px-4 flex items-center gap-4 '>
                    <div class="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-500 bg-white text-gray-500">
                        <span class="text-2xl">11</span>
                    </div>
                    <p className='text-[20px] font-semibold'>Local Airlines</p>
                    <div className='md:px-64 flex flex-col items-center gap-4'>
                        <div class="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-500 bg-white text-gray-500">
                            <span class="text-2xl">10</span>
                        </div>
                        <p className='text-[20px] font-semibold'>National Airports</p>

                    </div>
                    
               

                </div>
                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-[540px]  h-28'/>
                <div className='px-64 flex items-center gap-4 ml-64'>
                        <div class="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-500 bg-white text-gray-500">
                            <span class="text-2xl">10</span>
                        </div>
                        <p className='text-[20px] font-semibold'>National Airports</p>

                    </div>
            </div>
        </section>
    )
}

export default Statistics