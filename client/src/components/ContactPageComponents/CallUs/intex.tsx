import React from 'react'
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

type Props = {}

const CallUs = (props: Props) => {
    return (
        <div className='call-us-content'>
            <div className="phone flex items-center justify-center flex-col lg:block">
                <div className="flex items-center gap-1 pb-6">
                    <span className=' w-10 h-10 bg-primary rounded-full inline-flex items-center justify-center'>
                        <LuPhone className='text-xl text-white' />
                    </span>
                    <p className='pl-4 font-medium'>Call To Us</p>
                </div>
                <p className='pb-4'>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
            <div className="divider flex items-center justify-center text-center w-full my-8 h-[1px] lg:w-3/6 bg-slate-950"></div>
            <div className="message flex items-center justify-center flex-col lg:block">
                <div className="flex items-center gap-1 pb-6">
                    <span className=' w-10 h-10 bg-primary rounded-full inline-flex items-center justify-center'>
                        <CiMail className='text-xl text-white' />
                    </span>
                    <p className='pl-4 font-medium'>Write To US</p>
                </div>
                <p className='w-12/12 text-center lg:text-left lg:w-6/12'>Fill out our form and we will contact you within 24 hours.</p>
                <p className='py-4'>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </div>
        </div>
    )
}

export default CallUs