import React from 'react'
import Button from '../../CommonComponents/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import ProductCard from '../../CommonComponents/ProductCard'

type Props = {}

const WishlistProducts = (props: Props) => {
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
        <section id='wishlist-products' className='py-5'>
            <div className="wrapper">
                <div className="wishlist-title flex justify-between items-center">
                    <p>Wishlist <span>(4)</span></p>
                    <Button bgOutline>Move All To Bag</Button>
                </div>
                <div className="wishlist-products">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={breakpoints}
                        className="mySwiper py-[50px]"
                    >
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                        <SwiperSlide><ProductCard wishlistCard /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default WishlistProducts