import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import SectionTitle from '../../CommonComponents/SectionTitle'
import Button from '../../CommonComponents/Button'
import ProductCard from '../../CommonComponents/ProductCard';

type Props = {}

const JustForYou = (props: Props) => {
    const breakpoints = {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    };
    return (
        <section id='just-foryou' className=' pb-20'>
            <div className="wrapper">
                <div className="title flex items-center justify-between py-4">
                    <div className="left-side-title flex items-center">
                        <span className=' bg-primary block w-5 h-10 rounded mr-4'></span>
                        <p className='text-base'>
                            Just For You
                        </p>
                    </div>
                    <div className="right-side-title">
                        <Button bgOutline>See All</Button>
                    </div>
                </div>
                <div className="for-you-products">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={breakpoints}
                        className="mySwiper py-[50px]"
                    >
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default JustForYou