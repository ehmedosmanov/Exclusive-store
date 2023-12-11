import React from 'react'
import { NavLink } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import './index.scss'

type Props = {
    isOpen: boolean,
    handleClickOpenSidebar: () => void
}

const SidebarNavbar = ({isOpen,handleClickOpenSidebar}: Props) => {
    return (
        <aside id='sidebar-nav' className={`${isOpen ? 'active' :''} fixed top-0 right-0 min-h-screen flex justify-center flex-col text-2xl bg-white w-[300px] border-l border-slate-400 pl-4`}>
            <div className="sidebar-info">
                <span onClick={handleClickOpenSidebar} className='close-nav cursor-pointer absolute top-2 right-2 text-5xl'>
                    <CiCircleRemove />
                </span>
            </div>
            <div className="sidebar-content">
                <ul className='flex flex-col gap-[47px]'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>Contact</NavLink></li>
                    <li><NavLink to={'/'}>About</NavLink></li>
                    <li><NavLink to={'/'}>Sign Up</NavLink></li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarNavbar