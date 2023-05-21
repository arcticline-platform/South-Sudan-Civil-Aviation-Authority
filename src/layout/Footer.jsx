import React from 'react'
import { navFooter, navLinks, priorities, usefulLinks } from '../data/data';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ssdcaa.png'

const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  return (
    <>
    <footer className="sm:flex-row lg:flex bg-[#0e172c]    md:grid-flow-row md:mx-auto lg:flex-row  justify-around items-start md:p-10 lg:p-10 p-4 mx-auto md:col-auto mt-4">
      <div className="p-5 ">
        <div>
        <p className="font-bold text-2xl pb-4 text-white">
          <img src={logo} alt="" className='w-32'/>
        </p>
          {/* <img src={logo} alt="logo" className="text-white w-20 " /> */}
          <div className="flex flex-col gap-4 pb-5 text-sm">
            <p className="text-white">
            Civil Aviation Authority
            </p>
            <p className="text-white">
           (+256) --------------------
            </p>
            <p className="text-white">
           admin@sscaa.com
            </p>
            <Link to='/contact-us' className="text-white cursor-pointer underline pt-2">
            Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <div>
          <p className="font-bold text-2xl pb-4 text-white">Useful Links</p>
          {usefulLinks?.map((links, index) => (
            <div
              className="flex flex-row items-center gap-4 mb-4 text-white"
              key={index}
            >
              <Link to={links.link} className="hover:text-yellow-500">
                {links.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 ">
        <div>
          <p className="font-bold text-2xl pb-4 text-white">Priorities</p>
          {priorities?.map((links, index) => (
            <div
              className="flex flex-row items-center gap-4 mb-4 text-white"
              key={index}
            >
              <Link to={links.link} className="hover:text-yellow-500">
                {links.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div>
          <p className="text-white font-bold text-2xl pb-4 ">Follow Us</p>
          <div className="text-white">
            {navFooter?.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  to={item.link}
                  className="flex flex-row items-center gap-4 mb-4 hover:text-[#d57315]"
                  key={index}
                >
                  <Icon size={25} color={item.color} />
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-[#090b12] flex items-center justify-center pt-4 pb-4">
    <p className="font-bold md:text-lg text-md  text-white md:text-start text-center">
         South Sudan Civil Aviation Authority © {currentYear} <br /> 
         <span className='flex text-center justify-center'>All rights reserved.</span>
        </p>
    </div>
    </>
  )
}

export default Footer