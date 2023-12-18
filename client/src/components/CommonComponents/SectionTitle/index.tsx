import React from 'react'

type Props = {
    title: string,
    subtitle: string
}

const SectionTitle = ({ title, subtitle }: Props) => {
    return (
        <div className='section-title text-left pb-[40px]'>
            <div className="title text-primary flex items-center">
                <span className=' bg-primary block w-5 h-10 rounded mr-4'></span>
                <p className='font-semibold text-base'>{title}</p>
            </div>
            <div className="subtitle mt-4">
                <h2 className='text-[28px] lg:text-[36px] font-semibold'>{subtitle}</h2>
            </div>
        </div>
    )
}

export default SectionTitle