import React, { ReactNode } from 'react'
import { IconType } from 'react-icons';


type Props = {
    title: string,
    subtitle: string
    serviceIcon?: ReactNode
}

const ServiceCard = ({ title, subtitle, serviceIcon }: Props) => {
    return (
        <div className='service flex flex-col items-center justify-center text-center'>
            <div className="service-icon bg-slate-400 p-2 rounded-full">
                <span className='bg-black p-5 block text-white rounded-full'>
                    {serviceIcon}
                </span>
            </div>
            <div className="service-content">
                <h4 className=' font-semibold text-xl pt-6 pb-2'>
                    {title}
                </h4>
                <p className=' text-sm font-normal'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard