import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' text-white md:rounded-lg mt-4 bg-[#0e172c] flex items-center md:mx-4 md:pt-28 pt-14 md:pb-28 pb-14'>
        <div className='mx-auto flex md:flex-row flex-col justify-center items-center  gap-52'>
            <div className='flex flex-col'>
                <h1 className='font-bold md:text-3xl text-lg md:text-start text-center'>You wish to know more about us</h1>
                <p className='md:text-lg text-md text-center'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='flex md:flex-row flex-col gap-4 md:mt-auto -mt-44'>
                <input type="email" name="" id="" className='rounded-lg px-4 p-2 w-[300px] outline-none text-slate-600' placeholder='Email...'/>
                <button type="submit" className='bg-[#D67315] px-4 p-2 rounded-lg'>Subscribe </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter