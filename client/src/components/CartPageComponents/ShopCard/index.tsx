import React from 'react'
import CardImg from '../../../assets/images/card-product.png'
import { LiaTimesSolid } from "react-icons/lia";

type Props = {}

const ShopCard = (props: Props) => {
    return (
        <>
            <tr className='border-b'>
                <td className='px-6 py-8'>
                    <div className="card-product flex items-center">
                        <div className="w-[70px] card-product-img relative top-0 bottom-0 p-3">
                            <img src={CardImg} alt="Card Product" />
                            <span className='absolute top-0 left-0 cursor-pointer bg-red-700 inline-block text-white rounded-full p-[3px] font-semibold'>{<LiaTimesSolid />}</span>
                        </div>
                        <div className="card-product-name">
                            <p>LCD Monitor</p>
                        </div>
                    </div>
                </td>
                <td className='px-6 py-8 text-center'>
                    <p>$650</p>
                </td>
                <td className='px-6 py-8 text-center'>
                    <div className="counter-product">

                        <input type="number" max={100} min={1} step="1" onInput={(e) => e.preventDefault()} className=' border border-slate-800 w-[70px] py-1 px-2 focus:border-none focus:outline-gray-600 rounded-sm' />
                    </div>
                </td>
                <td className='px-6 py-8 text-center'>
                    <p>$650</p>
                </td>
            </tr>
        </>
    )
}

export default ShopCard