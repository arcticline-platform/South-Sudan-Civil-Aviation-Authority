    import React from 'react'
    import Carousel from 'react-elastic-carousel';
    import 'tailwindcss/tailwind.css';
    import { sectiondata } from '../data/data';

const UpdateSection = () => {
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 4 },
    ];


    return (
        <div className="mx-4 bg-[#FEFBFB]">
            <div className='flex items-center text-[#114961] justify-center md:text-3xl text-xl font-bold  pt-4 pb-4'>
                <div className='md:w-20 w-10 border-[#114961] border-t-4 mx-4 '></div>
                <h1>Updates</h1>
                <div className='md:w-20 w-10     border-[#114961] border-t-4 mx-4'></div>
            </div>
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
    )
}

export default UpdateSection