import React from 'react'
import ServiceCard from './ServiceCard'
import { FaCarAlt } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";


type Props = {}

const Services = (props: Props) => {
    return (
        <section id='services' className=' py-36'>
            <div className="wrapper">
                <div className="services-content grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-8 place-items-center">
                    <ServiceCard serviceIcon={<FaCarAlt className=' text-3xl' />} title='FREE AND FAST DELIVERY' subtitle='Free delivery for all orders over $140' />
                    <ServiceCard serviceIcon={<CiHeadphones className=' text-3xl' />} title='FREE AND FAST DELIVERY' subtitle='Free delivery for all orders over $140' />
                    <ServiceCard serviceIcon={<RiSecurePaymentLine className=' text-3xl' />} title='FREE AND FAST DELIVERY' subtitle='Free delivery for all orders over $140' />
                </div>
            </div>
        </section>
    )
}

export default Services