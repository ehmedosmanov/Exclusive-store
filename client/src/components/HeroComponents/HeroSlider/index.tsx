import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.scss'
import Iphone from '../../../assets/images/1200px-Apple_gray_logo 1.png'
import HeroSlideImg from '../../../assets/images/hero_endframe__cvklg0xk3w6e_large 2.jpg'
import { MdArrowForward } from "react-icons/md";

type Props = {}

const HeroSlider = (props: Props) => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className=' bg-black text-white'>
                <div className="hero-slide text-left">
                    <div className="slider-title pl-10">
                        <div className="top-title mb-5 flex items-center">
                            <span className='object-cover block w-1/12' >
                                <img src={Iphone} alt="" />
                            </span>
                            <p className='pl-6'>iPhone 14 Series</p>
                        </div>
                        <h1 className='text-[50px] text-left font-bold w-7/12'>Up to 10% <span className=' inline-block'> off Vouche</span></h1>
                        <div className='flex gap-2 mt-4'>
                            <button className='flex items-center gap-4'>Shop Now <span className='flex items-center justify-center text-2xl'><MdArrowForward /></span></button>
                        </div>
                    </div>
                </div>
                <div className="hero-slide-img">
                    <img src={HeroSlideImg} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-black text-white'>
                <div className="hero-slide text-left">
                    <div className="slider-title pl-10">
                        <div className="top-title mb-5 flex items-center">
                            <span className='object-cover block w-1/12' >
                                <img src={Iphone} alt="" />
                            </span>
                            <p className='pl-6'>iPhone 14 Series</p>
                        </div>
                        <h1 className='text-[50px] text-left font-bold w-7/12'>Up to 10% <span className=' inline-block'> off Vouche</span></h1>
                        <div className='flex gap-2 mt-4'>
                            <button className='flex items-center gap-4'>Shop Now <span className='flex items-center justify-center text-2xl'><MdArrowForward /></span></button>
                        </div>
                    </div>
                </div>
                <div className="hero-slide-img">
                    <img src={HeroSlideImg} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-black text-white'>
                <div className="hero-slide text-left">
                    <div className="slider-title pl-10">
                        <div className="top-title mb-5 flex items-center">
                            <span className='object-cover block w-1/12' >
                                <img src={Iphone} alt="" />
                            </span>
                            <p className='pl-6'>iPhone 14 Series</p>
                        </div>
                        <h1 className='text-[50px] text-left font-bold w-7/12'>Up to 10% <span className=' inline-block'> off Vouche</span></h1>
                        <div className='flex gap-2 mt-4'>
                            <button className='flex items-center gap-4'>Shop Now <span className='flex items-center justify-center text-2xl'><MdArrowForward /></span></button>
                        </div>
                    </div>
                </div>
                <div className="hero-slide-img">
                    <img src={HeroSlideImg} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSlider