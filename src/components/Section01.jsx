import React from 'react'
import delta from '../assets/images/delta.jpg'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { sectiondata } from '../data/data';
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import Carousel from 'react-elastic-carousel';
import 'tailwindcss/tailwind.css';


const Section01 = () => {

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <>
          <div className="mx-4 bg-[#FEFBFB]">
            <Carousel breakPoints={breakPoints} itemPadding={[10, 10]} pagination={false}>
                {sectiondata?.news.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-64 h-64">
                        <div className="overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-auto" />
                        </div>
                        <div className="bg-white flex-1 w-full">
                            <h1 className="text-center"></h1>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
        </>
    )
}

export default Section01