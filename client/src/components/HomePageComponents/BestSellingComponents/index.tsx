import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import SectionTitle from '../../CommonComponents/SectionTitle'
import Button from '../../CommonComponents/Button'
import ProductCard from '../../CommonComponents/ProductCard';

type Props = {}

const BestSelling = (props: Props) => {
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
        <section id='best-selling'>
            <div className="wrapper">
                <div className="best-selling-heading flex justify-between items-center pb-[50px]">
                    <SectionTitle title='This Month' subtitle='Best Selling Products' />
                    <Button bgPrimary>View All</Button>
                </div>
                <div className="best-selling-content">
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
            </div>
        </section>
    )
}

export default BestSelling