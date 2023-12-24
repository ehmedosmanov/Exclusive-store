import React from 'react'
import ProductImage1 from '../../../assets/images/image 57.png'
import ProductImage2 from '../../../assets/images/image 58.png'
import ProductImage3 from '../../../assets/images/image 59.png'
import ProductImage4 from '../../../assets/images/image 61.png'
import MainImage from '../../../assets/images/image 63.png'

type Props = {}

const DetailImages = (props: Props) => {
    return (
        // grid grid-cols-12
        <div className='gap-6 md:grid grid-cols-12 flex flex-col-reverse'>
            <div className="produt-images flex-row flex md:flex-col gap-9 col-span-3">
                <div className="image w-full  h-full hover:border-slate-700 duration-300 border border-slate-300 bg-secondary cursor-pointer object-cover flex items-center justify-center ">
                    <img src={ProductImage1} alt="ProductImage " />
                </div>
                <div className="image w-full  h-full hover:border-slate-700 duration-300 border border-slate-300  bg-secondary cursor-pointer object-cover flex items-center justify-center">
                    <img src={ProductImage2} alt="ProductImage" />
                </div>
                <div className="image w-full  h-full hover:border-slate-700 duration-300 border border-slate-300  bg-secondary cursor-pointer object-cover flex items-center justify-center">
                    <img src={ProductImage3} alt="ProductImage" />
                </div>
                <div className="image w-full  h-full hover:border-slate-700 duration-300 border border-slate-300  bg-secondary cursor-pointer object-cover flex items-center justify-center">
                    <img src={ProductImage4} alt="ProductImage" />
                </div>
            </div>
            <div className="main-image bg-secondary items-center flex justify-center col-span-9 w-full h-full ">
                <img src={MainImage} alt="Main Image" className=' object-cover px-10' />
            </div>
        </div>
    )
}

export default DetailImages