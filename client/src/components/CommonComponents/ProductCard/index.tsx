import React from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import { CiHeart } from "react-icons/ci";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import ProductImg from '../../../assets/images/product.png'
import Start from '../../../assets/Vector.svg'
type Props = {
    wishlistCard?: boolean
}

const ProductCard = ({ wishlistCard }: Props) => {

    return (
        <div className='product-card group'>
            <div className="heading-product overflow-hidden p-12 flex items-center justify-center relative top-0 left-0 bg-secondary rounded-lg">
                <div className="card-img w-10/12">
                    <img src={ProductImg} alt="Product" />
                </div>
                <span className='discount-price absolute top-0 left-0 ml-3 mt-3 bg-primary rounded-sm px-3 py-1 text-white text-[11px]'>
                    -40%
                </span>
                <div className={`overflow-hidden transform translate-x-full group-hover:translate-x-0 group-hover:opacity-100 opacity-0  transition duration-300 flex flex-col gap-3 absolute top-0 right-0 pr-3 pt-3`}>
                    {wishlistCard ? (
                        <>
                            <span className=' cursor-pointer detail-action inline-flex justify-center items-center p-1 bg-white rounded-full'>
                                <FaRegTrashAlt className='text-xl' />
                            </span>
                        </>
                    ) : (
                        <>
                            <span className=' cursor-pointer wishlist-action p-1 inline-flex justify-center items-center bg-white  rounded-full'>
                                <CiHeart className='text-2xl' />
                            </span>
                            <span className=' cursor-pointer detail-action inline-flex justify-center items-center p-1 bg-white rounded-full'>
                                <FaEye className='text-xl' />
                            </span>
                        </>
                    )}
                </div>
                <div className='opacity-0 overflow-hidden transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute bottom-0 flex justify-center items-center bg-black py-1 w-full cursor-pointer rounded-b-lg'>
                    <button className='text-white '>Add To Card</button>
                </div>
            </div>
            <div className="product-content text-left pl-2">
                <div className='product-title pt-4 text-black font-medium'><h4>HAVIT HV-G92 Gamepad</h4></div>
                <div className="prices-product py-2 flex gap-3">
                    <span className='real-price font-medium text-primary'>$120</span>
                    <span className="discount-price font-medium line-through text-slate-400">
                        $160
                    </span>
                </div>
                <div className="flex gap-2 items-center ">
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
                    <div className="comments-product text-sm text-slate-400 pt-1">
                        <span>(88)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard