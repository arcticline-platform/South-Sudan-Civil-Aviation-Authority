import React from 'react'
import logo from '../../assets/images/ssdcaa.png'

const BannerSection = () => {
  return (
    <>
    <div className="relative md:max-w-full max-w-[1000px] md:h-[540px] h-[300px] w-full mx-0 py-2 group bg-[#0c1221]">
      <div className="bg-theme clip-path lg:h-[75vh] md:[65vh] sm:h-[55vh] h-[85vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">

        <div>
          <img
            src={logo}
            alt=""
            className="w-auto h-[30vh] md:h-[50vh]  transitions-theme md:mt-28 mt-14 opacity-30 cursor-pointer object-fill"
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default BannerSection