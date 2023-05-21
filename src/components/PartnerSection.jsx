import React from 'react'
import Carousel from 'react-elastic-carousel';
import 'tailwindcss/tailwind.css';
import { sectiondata } from '../data/data';

const PartnerSection = () => {
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className="mx-4 bg-[#f3eeee]">
            <div className='flex items-center text-[#114961] justify-center md:text-3xl text-xl font-bold  pt-4 pb-4'>
                <h1>Partners</h1>
            </div>
            <Carousel
                breakPoints={breakPoints}
                itemPadding={[10, 10]}
                showArrows={false}
                enableAutoPlay
                autoPlaySpeed={3000}
                enableSwipeable
                enableTilt
                isRTL={false}
                // renderPagination={() => { }}
            >
                {sectiondata?.news.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-64 h-auto">
                        <div className="overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-auto" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default PartnerSection