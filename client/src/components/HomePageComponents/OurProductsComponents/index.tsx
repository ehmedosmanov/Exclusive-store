import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import SectionTitle from '../../CommonComponents/SectionTitle'
import ProductCard from '../../CommonComponents/ProductCard';
import Button from '../../CommonComponents/Button';

type Props = {}

const OurProducts = (props: Props) => {
    const breakpoints = {
        1200: {
            slidesPerView: 5,
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
        <section id='our-products' className='py-[75px]'>
            <div className="wrapper">
                <SectionTitle title='Our Products' subtitle='Explore Our Products' />
                <div className="our-sales-content border-b-2 border-slate-100 pb-[80px]">
                    <div className="first-slider">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={breakpoints}
                            loop={true}
                            className="mySwiper mb-[60px]"
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
                    <div className="second-slider">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={breakpoints}
                            loop={true}
                            className="mySwiper mb-[60px]"
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
                    <div className="our-products-btn flex justify-center">
                        <Button bgPrimary>View All Products</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProducts