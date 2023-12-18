import React from 'react'
import CategoryCard from './CategoryCardComponent'
import Phone from '../../../assets/images/Category-CellPhone.png'
import SectionTitle from '../../CommonComponents/SectionTitle'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
type Props = {}

const Categories = (props: Props) => {
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
        <section id='categories' className='py-[90px]'>
            <div className="wrapper">
                <SectionTitle title='Categories' subtitle='Browse By Category' />
                <div className="categories-content pt-[60px] border-b-2 border-slate-100 pb-[80px]">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={40}
                        breakpoints={breakpoints}
                        loop={true}
                        className="mySwiper mb-[60px]"
                    >
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                        <SwiperSlide><CategoryCard title='Phones' image={Phone} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Categories