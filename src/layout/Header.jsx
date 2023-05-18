import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/ssdcaa.png'
import { navLinks } from '../data/data'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [color, setColor] = useState('transparent');
    // eslint-disable-next-line
    const [textColor, setTextColor] = useState('black');

    // scrolling effect
    useEffect(() => {
        const changecolor = () => {
            if (window.scrollY >= 10) {
                setColor('#0E172C')
                setTextColor('#2a385e')
            }
            else {
                setColor('transparent')
                setTextColor('#000000')
            }
        }
        window.addEventListener('scroll', changecolor)
    }, [])

    // console.log('...........****', navLinks)

    return (
        <>
            <header style={{ backgroundColor: `${color}` }} className='flex items-center fixed left-0 w-full top-0 z-50 ease-in duration-300  p-4'>
                {/* logo side */}
                <div className='flex-1 md:px-24 px-4'>
                    <Link to="/">
                        <img src={logo} alt="ssdcaa_log" className='md:w-[170px] w-[80px]' />
                    </Link>
                </div>
                {/* right side --- desktop view */}
                <div className='hidden md:flex items-center text-md gap-2 text-slate-300 relative pr-14'>
                    {navLinks?.map(item => (
                        <>
                            <div key={item.id} className='hover:bg-white hover:text-slate-500 rounded-lg px-4 p-2'>
                                <Link to={item.link}>
                                    <p> {item.name}</p>
                                </Link>
                            </div>
                        </>
                    ))}
                    <div className='flex items-center gap-3'>
                        <Link to='/contact-us' className='relative z-50 border-2 border-white px-2 p-2 animate-pulse'>Contact Us</Link>
                    </div>
                </div>
                {/* mobile/ phone view mode*/}
                <div className='text-white md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </header>
        </>
    )
}

export default Header