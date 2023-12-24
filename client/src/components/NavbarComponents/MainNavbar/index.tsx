import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import './index.scss'

type Props = {
    isOpen: boolean,
    handleClickOpenSidebar: () => void
}

const MainNavbar = ({ isOpen, handleClickOpenSidebar }: Props) => {

    const [isActive, setIsActive] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (isActive && dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive]);

    const handleOpenDropdown = () => {
        setIsActive(!isActive)
        console.log('isActive after toggle:', isActive);
    }
    const handleDropdownItemClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <nav id='nav' className='border-b border-slate-300'>
            <div className="wrapper">
                <div className="navbar mt-[40px] mb-4 flex justify-between items-center">
                    <div className="logo">
                        <NavLink to={'/'}>
                            <h3 className='text-black text-2xl font-bold'>Exclusive</h3>
                        </NavLink>
                    </div>
                    <ul className='hidden lg:flex items-center gap-9'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/'}>Contact</NavLink></li>
                        <li><NavLink to={'/'}>About</NavLink></li>
                        <li><NavLink to={'/SignUp'}>Sign Up</NavLink></li>
                    </ul>
                    <div className="navbar-actions flex items-center gap-3">
                        <div className="global-search flex gap-8 items-center relative top-0 bottom-0 py-2 pr-8 px-5  lg:bg-slate-100">
                            <input type="text" placeholder='What are you looking for?' className='hidden lg:block opacity-50 mr-2  shadow-none outline-none border-none' />
                            <span className='search-icon absolute right-1 cursor-pointer'>
                                <IoIosSearch className='text-3xl pr-1' />
                            </span>
                            {/* <div className="mobile-search absolute top-10">
                            <input type="text" placeholder='What are you looking for?' className=' absolute left-[-160px] border border-black px-4   py-2  block lg:hidden opacity-50 mr-2  shadow-none outline-none' />
                            </div> */}
                        </div>
                        <div className="pl-2">
                            <span className=' cursor-pointer'>
                                <FaRegHeart className='text-xl' />
                            </span>
                        </div>
                        <div className="">
                            <span className=' cursor-pointer'>
                                <FaShoppingBasket className='text-2xl' />
                            </span>
                        </div>
                        <div className="relative top-0 bottom-0">
                            <span className='group cursor-pointer' ref={buttonRef} onClick={handleOpenDropdown}>
                                <CiUser className='group-hover:bg-primary group-hover:text-white group-hover:border-slate-100 duration-300 transition-all  text-[38px] p-1 rounded-full' />
                            </span>
                            <ul ref={dropdownRef} onClick={handleDropdownItemClick} className={`w-[240px] mt-4 user-dropdown absolute z-10 right-0 pt-5 pb-3 flex flex-col gap-4 pl-5 pr-1 ${isActive ? 'active' : ''} `}>
                                <li className=' cursor-pointer flex w-full items-center'>
                                    <span className='pr-2'><IoPersonOutline className='text-3xl' /></span>
                                    Manage My Account</li>
                                <li className=' cursor-pointer flex w-full items-center'><span className='pr-2'>
                                    <IoBagHandleOutline className='text-3xl' /></span>My Order</li>
                                <li className=' cursor-pointer flex w-full items-center ml-[2px]'><span className='pr-2'>
                                    <IoIosLogOut className='text-3xl' /></span>Logout</li>
                            </ul>
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