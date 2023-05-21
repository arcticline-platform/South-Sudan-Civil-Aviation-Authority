import React from 'react'
import TrendBox from '../../utils/TrendBox'
import { TrendsAPi } from '../../data/data'

const TrendSection = () => {
    return (
        <>
            <div className=" mb-11">
                {/* <Title title={title} /> */}
                <h2 className='flex items-center text-center justify-center pt-4 text-4xl uppercase font-bold'>Trending</h2>
                <div className="mt-7 grid md:grid-cols-4 grid-cols-1 gap-8 mx-4">

                    {TrendsAPi?.map(item => (
                        <>
                        
                    <TrendBox 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    body={item.body}
                    />
                        </>
                    ))}
                    {/* <TrendBox />
                    <TrendBox />
                    <TrendBox />
                    <TrendBox />
                    <TrendBox /> */}
                </div>
            </div>
        </>
    )
}

export default TrendSection