import React from 'react'
import BannerSection from '../components/ui/BannerSection'
import TrendSection from '../components/ui/TrendSection'
import NewsLetter from '../components/ui/NewsLetter'

const Home = () => {
  return (
    <div>
        {/* Banner section */}
        <BannerSection />
        {/* Trends seciton */}
        <TrendSection />
        <NewsLetter />
    </div>
  )
}

export default Home