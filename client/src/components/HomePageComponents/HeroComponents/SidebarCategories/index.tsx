import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const SidebarCategories = (props: Props) => {
    return (
        <div className='sidebar-categories'>
            <ul className='flex flex-col gap-4'>
                <li>
                    <NavLink to={'/Woman'}>Woman’s Fashion</NavLink>
                </li>
                <li>
                    <NavLink to={'/Men'}>Men’s Fashion</NavLink>
                </li>
                <li>
                    <NavLink to={'/Electronics'}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to={'/Woman'}>Home & Lifestyle</NavLink>
                </li>
                <li>
                    <NavLink to={'/Woman'}>Medicine</NavLink>
                </li>
                <li>
                    <NavLink to={'/Woman'}>Sports & Outdoor</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SidebarCategories
