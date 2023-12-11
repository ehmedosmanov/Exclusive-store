import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.scss'
import Iphone from '../../../assets/images/1200px-Apple_gray_logo 1.png'
type Props = {}

const HeroSlider = (props: Props) => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className=' bg-black text-white'>
                <div className="hero-slide">
                    <div className="top-title">
                        <span>
                            <img src={Iphone} alt="" />
                        </span>
                    </div>
                    <h2>Up to 10% off Vouche</h2>
                </div>
                <div className="hero-slide-img">

                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSlider