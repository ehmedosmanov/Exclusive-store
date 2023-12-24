import React from 'react'
import Button from '../../CommonComponents/Button'
import { NavLink } from 'react-router-dom'

type Props = {}

const CardTotal = (props: Props) => {
    return (
        <div className='card-total pt-20 flex justify-center items-center md:items-start flex-col md:flex-row md:justify-between '>
            <div className="coupon-code flex align-top justify-start items-start gap-2">
                <form className=''>
                    <input type="text" placeholder='Coupon Code' className='text-[12px] lg:text-base lg:py-4 lg:px-8 py-2 px-6 rounded-md border-2 border-slate-500 outline-none w-10/12 lg:w-full' />
                </form>
                <Button bgPrimary>Apply Coupon</Button>
            </div>
            <div className="total-price px-6 py-8 rounded-md border w-full mt-8 md:mt-0 md:w-4/12">
                <div className="total-price-content">
                    <h4 className='font-semibold pb-4'>Cart Total</h4>
                    <div className='subtotal flex justify-between border-b py-6 font-semibold'>
                        <p>Subtotal</p>
                        <span>$1750</span>
                    </div>
                    <div className='subtotal flex justify-between border-b py-6 font-semibold'>
                        <p>Shipping:</p>
                        <span>Free</span>
                    </div>
                    <div className='subtotal flex justify-between border-b py-6 font-semibold'>
                        <p>Total:</p>
                        <span>$1750</span>
                    </div>
                    <div className="checkout-btb text-center mt-8">
                        <NavLink to={'/CheckOut'}>
                            <Button bgPrimary>Procees to checkout</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTotal