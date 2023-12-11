import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'

type Props = {}

const TopNavbar = (props: Props) => {
    return (
        <div className='bg-black h-[50px] p-[12px] text-white lg:block hidden'>
            <div className="px-[100px]">
                <div className="flex justify-between">
                <div className="top-navbar-title flex gap-2 justify-center my-0 mx-auto">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <NavLink to={'/Shop'} className=" ml-2">ShopNow</NavLink>
                </div>
                <div className="lang-dropdown">
                    <NavLink to={'/en'} className='lang-btn'>
                        English
                    </NavLink>
                    <ul className="siderbar-language language-dropdown hidden">
                        <li>
                            <NavLink to={'/ru'} className="dropdown-link">RUSSIA</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fr'} className="dropdown-link">FRENCH</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar