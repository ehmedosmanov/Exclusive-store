import React from 'react'

type Props = {
    image: string,
    title: string
}

const CategoryCard = ({ image, title }: Props) => {
    return (
        <div className='group cursor-pointer hover:bg-primary transition duration-300 category py-8 px-14 border rounded-lg border-slate-400'>
            <div className="category-image">
                <img src={image} alt={title} />
            </div>
            <div className="category-title">
                <h4 className=' font-medium pt-4 group-hover:text-white transition duration-300 text-black'>{title}</h4>
            </div>
        </div>
    )
}

export default CategoryCard