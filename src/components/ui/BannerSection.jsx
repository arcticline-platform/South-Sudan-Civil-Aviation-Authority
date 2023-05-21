import React from 'react'
import logo from '../../assets/images/ssdcaa.png'
import BannerImage from '../../assets/svg/banner.svg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerSlider } from '../../data/data';
import { AiOutlineSearch } from 'react-icons/ai';

const BannerSection = () => {
  return (
    <>
      {/* main section */}
      <section className='flex md:flex-col flex-row relative z-20  '>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        // className="md:clip-path mobile-clip-path w-full md:h-[750px] h-[600px] bg-center bg-cover duration-75 -mt-8"
        >
          {bannerSlider?.map((slider, index) => (
            <>
              {/* left section */}
              <div className='absolute bg-[#73CDE9] w-1/2   opacity-90 banner-clip'>
                <div className="flex md:flex-col flex-row items-start px-8 text-white justify-center content-center mt-32 mb-44 md:text-6xl text-sm font-bold ">
                  <h1>South Sudan’s
                  </h1>

                  <h1>Regulatory Body </h1>
                  <h1>for Aviation</h1>
                  <div className='flex mt-4 items-center'>
                    <input type="search" placeholder="Search flights..." className='bg-white  w-[300px] h-16 outline-none text-slate-500 rounded-l-lg pt-2 pb-2 px-4 text-xl' />
                    {/* <button className='bg-[#114961] text-3xl w-[100px]   h-16 uppercase px-4 p-2 rounded-r-lg'> */}
                      <AiOutlineSearch size={20} className='text-center bg-[#114961] text-3xl w-[60px]   h-16 uppercase px-4 p-2 rounded-r-lg'/>
                    {/* </button> */}
                  </div>
                </div>

              </div>
              {/* right section --images only */}
              <div className='flex items-end text-end'>
                <img
                  src={slider.image}
                  alt=""
                  className='w-52'
                />

              </div>
            </>
          ))}
        </Carousel>


      </section >

    </>
  )
}

export default BannerSection