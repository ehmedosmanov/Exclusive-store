import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../../../assets/images/Logo.png'
import Search from '../../../assets/images/search.png'
import WishlistImg from '../../../assets/images/Wishlist.png'
import BasketImg from '../../../assets/images/Cart1.png'
import { FaBars } from "react-icons/fa";

type Props = {
isOpen:boolean,
handleClickOpenSidebar: () => void
}

const MainNavbar = ({isOpen, handleClickOpenSidebar}: Props) => {
    return (
        <nav id='nav' className='border-b border-slate-300'>
            <div className="wrapper">
                <div className="navbar mt-[40px] mb-4 flex justify-between items-center">
                    <div className="logo">
                        <NavLink to={'/'}>
                            <img src={Logo} alt="" />
                        </NavLink>
                    </div>
                    <ul className='hidden lg:flex items-center gap-9'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/'}>Contact</NavLink></li>
                        <li><NavLink to={'/'}>About</NavLink></li>
                        <li><NavLink to={'/'}>Sign Up</NavLink></li>
                    </ul>
                    <div className="navbar-actions flex items-center gap-3">
                        <div className="global-search flex gap-8 items-center relative top-0 bottom-0 py-2 pr-8 px-5  lg:bg-slate-100">
                            <input type="text" placeholder='What are you looking for?' className='hidden lg:block opacity-50 mr-2  shadow-none outline-none border-none' />
                            <span className='search-icon absolute right-1 cursor-pointer'>
                                <img src={Search} alt="" />
                            </span>
                            {/* <div className="mobile-search absolute top-10">
                            <input type="text" placeholder='What are you looking for?' className=' absolute left-[-160px] border border-black px-4   py-2  block lg:hidden opacity-50 mr-2  shadow-none outline-none' />
                            </div> */}
                        </div>
                        <div className="wishlist-action">
                            <span className=' cursor-pointer'>
                                <img src={WishlistImg} alt="" />
                            </span>
                        </div>
                        <div className="basket-action">
                            <span className=' cursor-pointer'>
                                <img src={BasketImg} alt="" />
                            </span>
                        </div>
                        <div className="lg:hidden block sidebar-action">
                            <span onClick={handleClickOpenSidebar} className='cursor-pointer text-xl p-2'>
                                <FaBars />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar