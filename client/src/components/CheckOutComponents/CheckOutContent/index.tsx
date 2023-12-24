import React from 'react'
import ProductImage from '../../../assets/images/product.png'
import Button from '../../CommonComponents/Button'
import Visa from '../../../assets/image 30.png'
type Props = {}

const CheckOutContent = (props: Props) => {
    return (
        <div className='checkout-detail pt-24'>
            <div className="checkout-products flex flex-col gap-8 ">
                <div className="checkout-product flex items-center justify-between">
                    <div className="heading flex items-center">
                        <div className="image w-10">
                            <img src={ProductImage} alt="" />
                        </div>
                        <div className="title pl-2">
                            LCD Monitor
                        </div>
                    </div>
                    <span className=''>
                        $650
                    </span>
                </div>
                <div className="checkout-product flex items-center justify-between">
                    <div className="heading flex items-center">
                        <div className="image w-10">
                            <img src={ProductImage} alt="" />
                        </div>
                        <div className="title pl-2">
                            LCD Monitor
                        </div>
                    </div>
                    <span className=''>
                        $650
                    </span>
                </div>
            </div>
            <div className="total-price  py-9">
                <div className='subtotal flex justify-between border-b py-4 font-semibold'>
                    <p>Subtotal</p>
                    <span>$1750</span>
                </div>
                <div className='subtotal flex justify-between border-b py-4 font-semibold'>
                    <p>Shipping:</p>
                    <span>Free</span>
                </div>
                <div className='subtotal flex justify-between border-b py-4 font-semibold'>
                    <p>Total:</p>
                    <span>$1750</span>
                </div>
            </div>
            <div className="cashing">
                <form className="cash-method flex flex-col gap-8">
                    <div className="radio flex items-center justify-between">
                        <div className="bank flex items-center">
                            <input type="radio" name="bank" id="" className='p-5 w-6 h-6 cursor-pointer' />
                            <p className=' text-lg pl-3'>Bank</p>
                        </div>
                        <div className="banks flex gap-4 ">
                            <div className="bank-img">
                                <img src={Visa} alt="Visa" />
                            </div>
                            <div className="bank-img">
                                <img src={Visa} alt="Visa" />
                            </div>
                            <div className="bank-img">
                                <img src={Visa} alt="Visa" />
                            </div>
                            <div className="bank-img">
                                <img src={Visa} alt="Visa" />
                            </div>
                        </div>
                    </div>
                    <div className="radio flex items-center">
                        <input type="radio" name="bank" id="" className='p-5 w-6 h-6 cursor-pointer' />
                        <p className=' text-lg pl-3'>Cash on delivery</p>
                    </div>
                </form>
            </div>
            <div className="checkout-btns pt-9">
                <div className="coupon-code mb-6 flex align-top justify-start items-start gap-2">
                    <form className=''>
                        <input type="text" placeholder='Coupon Code' className='text-[12px] lg:text-base lg:py-4 lg:px-8 py-2 px-6 rounded-md border-2 border-slate-500 outline-none w-10/12 lg:w-full' />
                    </form>
                    <Button bgPrimary>Apply Coupon</Button>
                </div>
                <Button bgPrimary>Place Order</Button>
            </div>
        </div>
    )
}

export default CheckOutContent