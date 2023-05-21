import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/ssdcaa.png";
import { navLinks } from "../data/data";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";

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
            <div className="bg-[#114961] text-white flex md:px-4 px-2 p-2 uppercase font-bold md:text-xl text:sm" 
                        onClick={() => setOpen(!open)}>
                <p className="flex-1">Juba</p>
                <p className="md:px-14">VJ46+W2M</p>
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
                    <div className="" >
                        <h1 className="text-white">Hello</h1>
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
