import React from 'react'
import MainImg from '../../../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import Countdown from 'react-countdown';
import Button from '../../CommonComponents/Button';

type Props = {}

type TypeCountdownRender = {
    hours: number;
    minutes: number;
    days: number;
    seconds: number;
    completed: boolean;
};

const MainProduct = (props: Props) => {
    const Completionist = () => <span className='text-[26px]'>Time is up!</span>;
    const renderer = ({ hours, days, minutes, seconds, completed }: TypeCountdownRender) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div className='countdown-content flex gap-4'>
                    <div className='countdown-time'>
                        <span className='font-semibold'>{hours}</span>
                        <span className=' text-[8px] lg:text-[11px]'>Hours</span>
                    </div>
                    <div className='countdown-time'>
                        <span className='font-semibold'>{days}</span>
                        <span className=' text-[8px] lg:text-[11px]'>Days</span>
                    </div>
                    <div className='countdown-time'>
                        <span className=' font-semibold'>{minutes}</span>
                        <span className=' text-[8px] lg:text-[11px]'>Minutes</span>
                    </div>
                    <div className='countdown-time'>
                        <span className=' font-semibold'>{seconds}</span>
                        <span className=' text-[8px] lg:text-[11px]'>Seconds</span>
                    </div>
                </div>

            )
        }
    };
    return (
        <section id='main-product'>
            <div className="wrapper">
                <div className="hero-product py-[40px] px-[50px] bg-black grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
                    <div className="main-product-content flex items-center justify-center flex-col lg:block ">
                        <div className="main-product-subtitle">
                            <p className=' text-success font-semibold pl-1'>Categories</p>
                        </div>
                        <div className="main-product-title flex text-center lg:text-left justify-center lg:block">
                            <h2 className='py-[32px] text-xl md:text-3xl lg:text-5xl font-semibold tracking-wide w-[80%] '>Enhance Your Music Experience</h2>
                        </div>
                        <div className="countdown pb-10">
                            <Countdown date={Date.now() + 165912127} renderer={renderer}>
                                <Completionist />
                            </Countdown>
                        </div>
                        <Button bgSuccess>Buy Now!</Button>
                    </div>
                    <div className="main-product-right flex justify-center items-center relative top-0 bottom-0">
                        <div className="main-product-img relative z-[8] flex justify-center">
                            <img src={MainImg} alt="" />
                        </div>
                        <div className="rounded-full w-full h-[320px] absolute top-0 right-[-5] opacity-25 bg-secondary blur-[80px] filter circle">
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainProduct