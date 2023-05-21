import React from 'react'
import delta from '../assets/images/delta.jpg'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { sectiondata } from '../data/data';
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";


const Section01 = () => {

    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: {perPage: 3},
          991: {perPage: 2.3},
          768: {perPage: 2},
          500: {perPage: 2.3},
          425: {perPage: 1}
        }, 
      }
      const news = sectiondata.news
    return (
        <>
            <section className="mt-0 bg-[#d2d2d2] pt-4 pb-4 ">
                <Splide options={splideOptions}>
                    {news.map((val, i) => (
                        <SplideSlide key={i} className="mb-0.5">
                            <div className="relative grid items-center  pb-2 ">
                                <div className="flex items-center justify-center ">
                                    <img
                                        src={val.img}
                                        alt={`img/${val.title}`}
                                        className="w-full  h-52 object-cover "
                                    />
                                </div>
                                <div className='flex items-center justify-between w-full px-4 bg-white h-20 section-clip-path'>
                                    
                                </div>
                                
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </>
    )
}

export default Section01