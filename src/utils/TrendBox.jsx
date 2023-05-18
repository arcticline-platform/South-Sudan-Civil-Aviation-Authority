import React from 'react'
import airplane from '../assets/images/aur.jpg'
import { Link } from 'react-router-dom'

const TrendBox = ({
    id,
    name,
    image,
    body
}) => {
    return (
        <>
            <div className="relative grid items-center gap-4 pb-2 rounded shadow shadow-slate-100 ring-1 ring-slate-200">
                <div className="flex items-center justify-center overflow-hidden cursor-pointer">
                    <img
                        src={image}
                        alt={image}
                        className="w-full  h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg hover:scale-110 transition-all duration-300 "
                    />
                </div>
                <div className=" items-center justify-items-start px-4">
                    <h1 className="text-lg uppercase font-bold">
                      {name}
                    </h1>
                    <p className="text-sm text-justify">
                        {/* {truncate(body, {length: 175})}000 */}
                        {body}
                       
                    </p>
                </div>
                <div className="flex items-center justify-center px-4 w-full cursor-pointer">
                    <Link to={`trends/${id}`} target="_blank" role={'button'} className="w-full bg-gradient-to-b from-[#0E172C]  to-[#0E172C] shadow-md shadow-white text-center text-slate-100 py-1.5 px-1.5  button-theme">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default TrendBox