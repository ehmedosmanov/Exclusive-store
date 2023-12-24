import React from 'react'
import { IoIosStar } from 'react-icons/io'
import { FaCarAlt, FaRegHeart } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";

import './index.scss'
import Button from '../../CommonComponents/Button'
type Props = {}

const DetailContent = (props: Props) => {
    return (
        <div className='product-content flex flex-col justify-end'>
            <div className="heading">
                <h3 className=' text-2xl font-semibold'>Havic HV G-92 Gamepad</h3>
                <div className="info flex items-center py-5">
                    <div className="rating-product flex gap-1 cursor-pointer">
                        <span className='rating-star flex items-center'>
                            <IoIosStar className=' text-yellow-400' />
                        </span>
                        <span className='rating-star flex items-center'>
                            <IoIosStar className=' text-yellow-400' />
                        </span>
                        <span className='rating-star flex items-center'>
                            <IoIosStar className=' text-yellow-400' />
                        </span>
                        <span className='rating-star flex items-center'>
                            <IoIosStar className=' text-yellow-400' />
                        </span>
                        <span className='rating-star flex items-center'>
                            <IoIosStar className=' text-yellow-400' />
                        </span>
                    </div>
                    <span className=' text-sm font-normal pl-2'>(150 Reviews)</span>
                    <span className='px-4'>|</span>
                    <span className='text-green-500'>In Stock</span>
                </div>
            </div>
            <div className="price">
                <span className='text-2xl font-normal'>$192.00</span>
                <p className='pt-6 text-sm font-normal md:w-8/12 w-full'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            </div>
            <div className="divider my-6 h-[1px] bg-slate-500 w-full md:w-7/12"></div>
            <div className="colour-filter flex item-center gap-6 pb-8">
                <p className='text-xl'>Colours:</p>
                <div className="colour-style flex gap-2 items-center">
                    <button className='bg-blue-400 hover:bg-blue-700 duration-300 w-5 h-5 rounded-full'>
                    </button>
                    <button className='bg-blue-400 hover:bg-blue-700 duration-300 w-5 h-5 rounded-full'>
                    </button>
                    <button className='bg-blue-400 hover:bg-blue-700 duration-300 w-5 h-5 rounded-full'>
                    </button>
                    <button className='bg-blue-400 active hover:bg-blue-700 duration-300 w-5 h-5 rounded-full'>
                    </button>
                </div>
            </div>
            <div className="buying flex items-start md:items-center flex-col md:flex-row gap-6">
                <div className="counter flex items-center ">
                    <button className='px-4 border-slate-400 border h-11 hover:bg-primary hover:text-white duration-300 rounded-l-lg'>-</button>
                    <div className=' border-slate-400 border text-center h-11 justify-center items-center flex px-7'><span className='text-xl'>0</span></div>
                    <button className='px-4 border-slate-400 border h-11 hover:bg-primary hover:text-white duration-300 rounded-r-lg'>+</button>
                </div>
                <Button bgPrimary>Buy Now</Button>
                <span className='p-3 text-3xl rounded-lg border border-slate-600 cursor-pointer hover:bg-primary duration-300 transition-all hover:text-white hover:border-white'>
                    <FaRegHeart />
                </span>
            </div>
            <div className="product-services pt-10 w-full  md:w-8/12 flex-col">
                <div className="service flex items-center gap-3 border-slate-400 border p-3">
                    <span className='text-3xl'>
                        <FaCarAlt />
                    </span>
                    <div className="service-content">
                        <h3 className=' font-medium text-lg pb-2'>Free Delivery</h3>
                        <p className='font-medium text-sm'>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className="service flex items-center gap-3 border-slate-400 border p-3">
                    <span className='text-3xl'>
                        <RiRestartLine />
                    </span>
                    <div className="service-content">
                        <h3 className=' font-medium text-lg pb-2'>Free Delivery</h3>
                        <p className='font-medium text-sm'>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailContent