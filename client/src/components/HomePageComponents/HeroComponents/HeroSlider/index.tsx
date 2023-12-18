import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdArrowForward } from "react-icons/md";
import Iphone from '../../../../assets/images/1200px-Apple_gray_logo 1.png'
import HeroSlideImg from '../../../../assets/images/hero_endframe__cvklg0xk3w6e_large 2.jpg'
import Iphone14 from '../../../../assets/images/AppleiPhone14Pro__1__01.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss'
type Props = {}

const HeroSlider = (props: Props) => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper pt-4">
            <SwiperSlide className=' bg-black p-5 text-white md:flex md:flex-row flex flex-col gap-6'>
                <div className="hero-slide text-left col-span-6">
                    <div className="slider-title pl-10">
                        <div className="top-title mb-5 flex items-center">
                            <span className='object-cover block w-[27px]' >
                                <img src={Iphone} alt="Iphone" />
                            </span>
                            <p className='pl-6 text-[12px]'>iPhone 14 Series</p>
                        </div>
                        <h1 className='xl:text-[45px] md:text-[35px] text-left font-bold lg:w-9/12 md:7/12'>Up to 10% <span className=' inline-block'> off Vouche</span></h1>
                        <div className='flex gap-2 mt-4'>
                            <button className='flex items-center gap-4 text-[10px] sm:text-[17px]'>Shop Now <span className='flex items-center justify-center text-2xl'><MdArrowForward /></span></button>
                        </div>
                    </div>
                </div>
                <div className="hero-slide-img max-w-[200px] col-span-6 md:max-w-[350px]">
                    <img src={HeroSlideImg} alt="HeroImage" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-black p-5 text-white md:flex md:flex-row flex flex-col gap-6'>
                <div className="hero-slide text-left ">
                    <div className="slider-title pl-10">
                        <div className="top-title mb-5 flex items-center">
                            <span className='object-cover block w-[27px]' >
                                <img src={Iphone} alt="Iphone" />
                            </span>
                            <p className='pl-6 text-[12px]'>iPhone 14 Series</p>
                        </div>
                        <h1 className='xl:text-[45px] md:text-[35px] text-left font-bold lg:w-9/12 md:7/12'>Up to 10% <span className=' inline-block'> off Vouche</span></h1>
                        <div className='flex gap-2 mt-4'>
                            <button className='flex items-center gap-4 text-[10px] sm:text-[17px]'>Shop Now <span className='flex items-center justify-center text-2xl'><MdArrowForward /></span></button>
                        </div>
                    </div>
                </div>
                <div className="hero-slide-img max-w-[200px] md:max-w-[350px]">
                    <img src={Iphone14} alt="Iphone14" />
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default HeroSlider