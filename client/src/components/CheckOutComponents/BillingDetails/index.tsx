import React from 'react'

type Props = {}

const BillingDetail = (props: Props) => {
    return (
        <div className='billing-details w-full'>
            <div className="title">
                <h2 className=' text-4xl font-medium pb-12'>
                    Billing Details
                </h2>
            </div>
            <div className="billing-form">
                <form action="" className='flex flex-col gap-8'>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>First Name <span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>Company Name <span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>Apartment, floor, etc. (optional)<span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>Town/City<span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>Phone Number<span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="input-box flex flex-col gap-2">
                        <label htmlFor="" className=' text-stone-300'>Email Address<span className='text-red-500 pl-1'>*</span></label>
                        <input type="text" className='w-12/12 lg:w-10/12 bg-secondary outline-none py-2 px-2 focus:bg-secondary' />
                    </div>
                    <div className="checkbox flex gap-4 items-center">
                        <input type="checkbox" />
                        <p>Save this information for faster check-out next time</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BillingDetail