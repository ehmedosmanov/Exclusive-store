import React from 'react'
import { useState } from 'react'
import MainNavbar from '../../components/NavbarComponents/MainNavbar'
import SidebarNavbar from '../../components/NavbarComponents/SidebarNavbar'
import TopNavbar from '../../components/NavbarComponents/TopNavbar'
import './index.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClickOpenSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header id='header'>
        <TopNavbar  />
        <MainNavbar isOpen={isOpen} handleClickOpenSidebar={handleClickOpenSidebar} />
        <SidebarNavbar isOpen={isOpen} handleClickOpenSidebar={handleClickOpenSidebar} />
      </header>
    </>
  )
}

export default Header