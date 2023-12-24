import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Employer1 from '../../../assets/images/image 46.png'
import Employer2 from '../../../assets/images/image 47.png'
import Employer3 from '../../../assets/images/image 51.png'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

type Props = {}

const OurEmployees = (props: Props) => {
    const breakpoints = {
        1200: {
            slidesPerView: 3,
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
        <section id='our-employees'>
            <div className="wrapper">
                <div className="employees">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        breakpoints={breakpoints}
                        loop={true}
                        className="mySwiper mb-[60px]"
                    >
                        <SwiperSlide>
                            <div className="employer">
                                <div className="employer-image bg-secondary foverflow-hidden  object-cover">
                                    <img src={Employer1} alt="Employer" className=' object-cover overflow-hidden' />
                                </div>
                                <div className="employer-title text-left">
                                    <h4 className=' text-4xl font-medium pb-2 pt-8'>Tom Cruise</h4>
                                    <p>Founder & Chairman</p>
                                    <div className="socials flex items-center justify-start gap-4 pt-2">
                                        <span className="icon">
                                            {<FaXTwitter />}
                                        </span>
                                        <span className="icon">
                                            {<FaInstagram />}
                                        </span>
                                        <span className="icon">
                                            {<FaLinkedinIn />}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="employer ">
                                <div className="employer-image bg-secondary foverflow-hidden  object-cover ">
                                    <img src={Employer2} alt="Employer" className=' object-cover overflow-hidden' />
                                </div>
                                <div className="employer-title text-left">
                                    <h4 className=' text-4xl font-medium pb-2 pt-8'>Tom Cruise</h4>
                                    <p>Founder & Chairman</p>
                                    <div className="socials flex items-center justify-start gap-4 pt-2">
                                        <span className="icon">
                                            {<FaXTwitter />}
                                        </span>
                                        <span className="icon">
                                            {<FaInstagram />}
                                        </span>
                                        <span className="icon">
                                            {<FaLinkedinIn />}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="employer">
                                <div className="employer-image bg-secondary foverflow-hidden  object-cover">
                                    <img src={Employer3} alt="Employer" className=' object-cover overflow-hidden' />
                                </div>
                                <div className="employer-title text-left">
                                    <h4 className=' text-4xl font-medium pb-2 pt-8'>Tom Cruise</h4>
                                    <p>Founder & Chairman</p>
                                    <div className="socials flex items-center justify-start gap-4 pt-2">
                                        <span className="icon">
                                            {<FaXTwitter />}
                                        </span>
                                        <span className="icon">
                                            {<FaInstagram />}
                                        </span>
                                        <span className="icon">
                                            {<FaLinkedinIn />}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurEmployees