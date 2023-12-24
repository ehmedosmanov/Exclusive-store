import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main