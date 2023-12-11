import React from 'react'
import SidebarCategories from './SidebarCategories'
import HeroSlider from './HeroSlider'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section id='hero' className='py-[40px]'>
            <div className="wrapper">
                <div className="hero-content grid grid-cols-12 gap-4">
                    <div className="categories col-span-12 md:col-span-6 lg:col-span-3">
                        <SidebarCategories />
                    </div>
                    <div className="hero-slider col-span-12 md:col-span-6 lg:col-span-9">
                        <HeroSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero