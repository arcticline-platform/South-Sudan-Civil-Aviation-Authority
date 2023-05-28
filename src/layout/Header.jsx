import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/data";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import plane from '../assets/svg/plane.svg'
import document from '../assets/svg/document.svg'
import services from '../assets/svg/service.svg'
import flyingplane from '../assets/svg/fylingplane.svg'

const Header = () => {
    const [color, setColor] = useState("transparent");
    // eslint-disable-next-line
    const [textColor, setTextColor] = useState("black");
    const [open, setOpen] = useState(false);

    // scrolling effect
    useEffect(() => {
        const changecolor = () => {
            if (window.scrollY >= 10) {
                setColor("#0E172C");
                setTextColor("#2a385e");
            } else {
                setColor("transparent");
                setTextColor("#000000");
            }
        };
        window.addEventListener("scroll", changecolor);
    }, []);

    // console.log('...........****', navLinks)

    return (
        <>
            <div className="bg-[#114961] text-white flex md:px-4 px-2 p-2 uppercase font-bold md:text-lg text:xs "
                onClick={() => setOpen(!open)}>
                <p className="flex-1">Juba</p>
                <a className="md:px-4" href="tel:+21100000000">+211 0000 00000</a>
                <a className="lowercase md:px-4 px-2" href="mailto:info@ssdcaa.net">info@ssdcaa.net</a>
                <p className="hidden md:flex px-4">VJ46+W2M</p>
            </div>
            {/* navbar section */}
            <div className="flex items-center">
                {/* logo section */}
                <Link to="/" className=" md:px-4 px-2 items-center justify-center" >
                    <p className="justify-center md:text-7xl text-3xl md:-mt-2 -mt-6 text-center font-bold">
                        SSCAA
                    </p>
                    <p className="md:text-xs text-[5px] text-center md:tracking-wide tracking-widest">
                        South Sudan Civil Aviation Authority
                    </p>
                </Link>

                {/* nav items */}
                <div className=" flex-1 ">
                    <div className="hidden md:flex justify-evenly items-center gap-10 bg-[#75b9d7] px-8 pt-4 pb-4 clip-rectangle text-[#114961]  font-semibold">
                        <NavLink
                            to="/safety-and-security "
                            className=" hover:border-b-4 hover:border-white "
                            activeClassName="underlineLink"
                        >
                            Safety & Security
                        </NavLink>
                        <NavLink
                            to="/laws-and-regulations"
                            className=" hover:border-b-4 hover:border-white "
                            activeClassName="underlineLink"
                        >
                            Laws & Regulations
                        </NavLink>
                        <NavLink
                            to="/licensing-types"
                            className=" hover:border-b-4 hover:border-white "
                            activeClassName="underlineLink"
                        >
                            Licensing Types
                        </NavLink>
                        <NavLink
                            to="/FAQs"
                            className=" hover:border-b-4 hover:border-white "
                            activeClassName="underlineLink"
                        >
                            FAQs
                        </NavLink>
                        <NavLink
                            to="/contact-us"
                            className="bg-white px-2 p-1 rounded-lg  "
                            activeClassName="underlineLink"
                        >
                            Contact Us Now!
                        </NavLink>
                    </div>
                    <div className="flex md:hidden justify-end items-end gap-10 bg-[#75b9d7] px-8 pt-4 pb-4 clip-rectangle text-[#114961] font-semibold cursor-pointer" onClick={() => setOpen(!open)}>
                        <AiOutlineMenu />
                    </div>
                    <div className="flex gap-4 items-center md:justify-center md:mt-4" >
                        <Link to='/' className="flex flex-row items-center gap-2">
                            <img src={plane} alt="" className="hidden md:inline w-12"/>
                            <p className="md:text-lg text-[10px]">Flight Schedules</p>
                        </Link>
                        <Link to='/' className="flex flex-row items-center gap-2">
                            <img src={document} alt="" className="hidden md:inline w-12"/>
                            <p className="md:text-lg text-[10px]">Documents & Guidelines</p>
                        </Link>
                        <Link to='/' className="flex flex-row items-center gap-2 ">
                            <img src={document} alt="" className="hidden md:inline w-12"/>
                            <p className="md:text-lg text-[10px] ">E-Services</p>
                        </Link>
                    <img src={flyingplane} alt="" className="hidden md:inline pt-4 w-40"/>
                    </div>

                </div>

            </div>
            <div className={open ? 'bg-[#114961]' : 'hidden '} >
                <div className="flex flex-col items-start text-xl px-4 gap-2 pt-2 text-zinc-300 font-semibold">
                    <NavLink
                        to="/safety-and-security "
                        className=" hover:border-b-4 hover:border-white "
                        activeClassName="underlineLink"
                        onClick={() => setOpen(!open)}
                    >
                        Safety & Security
                    </NavLink>
                    <NavLink
                        to="/laws-and-regulations"
                        className=" hover:border-b-4 hover:border-white "
                        activeClassName="underlineLink"
                        onClick={() => setOpen(!open)}
                    >
                        Laws & Regulations
                    </NavLink>
                    <NavLink
                        to="/licensing-types"
                        className=" hover:border-b-4 hover:border-white "
                        activeClassName="underlineLink"
                        onClick={() => setOpen(!open)}
                    >
                        Licensing Types
                    </NavLink>
                    <NavLink
                        to="/FAQs"
                        className=" hover:border-b-4 hover:border-white "
                        activeClassName="underlineLink"
                        onClick={() => setOpen(!open)}
                    >
                        FAQs
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className=" bg-[#75b9d7] px-2 p-1 rounded-lg mb-4 "
                        activeClassName="underlineLink"
                        onClick={() => setOpen(!open)}
                    >
                        Contact Us Now!
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;
