import React from 'react'
import Button from '../../components/CommonComponents/Button'
import { NavLink } from 'react-router-dom'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

type Props = {}

const NotFound = (props: Props) => {
    return (
        <>
            <Header />
            <main>
                <section className='text-center py-[120px]'>
                    <h1 className=' text-[110px] pb-10'>404 Not Found</h1>
                    <p className=' pb-20'>Your visited page not found. You may go home page.</p>
                    <Button>
                        <NavLink to={'/'}>
                            Back to home page</NavLink>
                    </Button>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default NotFound