import React, { ReactNode } from 'react'

type Props = {
    image: ReactNode,
    title: string,
}

const CategoryCard = ({ image, title }: Props) => {
    return (
        <div className='group cursor-pointer hover:bg-primary transition duration-300 category py-8 px-14 border rounded-lg border-slate-400'>
            <div className="category-image text-center flex justify-center">
                <span className='text-[44px] group-hover:text-white duration-300 transition-all'>
                    {image}
                </span>
            </div>
            <div className="category-title">
                <h4 className=' font-medium pt-4 group-hover:text-white transition duration-300 text-black'>{title}</h4>
            </div>
        </div>
    )
}

export default CategoryCard