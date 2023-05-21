import React from 'react'
import BannerSection from '../components/ui/BannerSection'
import TrendSection from '../components/ui/TrendSection'
import NewsLetter from '../components/ui/NewsLetter'
import Section01 from '../components/Section01'
import Statistics from '../components/Statistics'

const Home = () => {
  return (
    <div className='md:mt-4 mt-auto'>
        {/* Banner section */}
        <BannerSection />
        {/* Section01 */}
        <Section01 />
        {/* section02 */}
        <Statistics />
        {/* Trends seciton */}
        {/* <TrendSection /> */}
        {/* <NewsLetter /> */}
    </div>
  )
}

export default Home