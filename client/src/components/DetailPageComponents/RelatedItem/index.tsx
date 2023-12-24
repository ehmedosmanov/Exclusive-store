import React from 'react'
import SectionTitle from '../../CommonComponents/SectionTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ProductCard from '../../CommonComponents/ProductCard';
type Props = {}

const RelatedItem = (props: Props) => {
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
        <section id='related-item' className='py-[100px]'>
            <div className="wrapper">
                <SectionTitle title='Related Item' />
                <div className="related-products">
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

export default RelatedItem