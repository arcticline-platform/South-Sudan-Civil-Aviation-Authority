import React from 'react'
import bgimage from '../assets/images/ssdcaa.png'

const Statistics = () => {
    return (
        <section className='relative z-20 flex flex-col pt-4 pb-4 md:h-[800px] h-[420px]'>
            <div>
                <img src={bgimage} alt="" className='md:opacity-20 opacity-10 md:w-[2000px] w-[420px] md:h-[650px] h-[400px] items-center justify-center text-center  ' />
            </div>
            <div className='absolute mx-4'>
                <div className='px-4 flex items-center gap-4'>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                        <span className="md:text-2xl text-xl">16</span>
                    </div>
                    <p className='md:text-[20px] text-[16px] font-bold'>Years in Business</p>
                </div>
                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-12  md:h-32 h-10' />
                <div className='px-4 flex items-center gap-4'>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                        <span className="md:text-2xl text-xl">11</span>
                    </div>
                    <p className='md:text-[20px] text-[16px] font-bold'>International Airlines</p>
                </div>

                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-12  md:h-32 h-10' />
                <div className='px-4 flex items-center  gap-4 '>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                        <span class="text-2xl">11</span>
                    </div>
                    <p className='text-[20px] font-semibold'>Local Airlines</p>
                    <div className='hidden md:flex items-center md:px-64 gap-4'>
                        <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                            <span class="text-2xl">10</span>
                        </div>
                        <p className='text-[20px] font-semibold'>National Airports</p>

                    </div>
                </div>
                <hr className='lg:hidden border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-12  md:h-32 h-10' />
                <div className='md:hidden flex items-center px-4 gap-4 mt-1 '>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                        <span class="text-2xl">10</span>
                    </div>
                    <p className='text-[20px] font-semibold'>National Airports</p>

                </div>

                <hr className='border-1 bg-gray-500 border-gray-500 mt-1 w-1 ml-[540px]  h-28' />
                <div className='px-64 flex items-center gap-4 ml-64'>
                    <div class="md:w-20 w-16 md:h-20 h-16 rounded-full flex items-center justify-center border-4 border-gray-500 bg-white text-gray-500">
                        <span class="text-2xl">10</span>
                    </div>
                    <p className='text-[20px] font-semibold'>International Airports</p>

                </div>
            </div>
        </section>
    )
}

export default Statistics