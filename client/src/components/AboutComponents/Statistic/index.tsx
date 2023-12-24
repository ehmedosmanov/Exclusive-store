import React, { ReactNode } from 'react'

type Props = {
  price: string,
  subtitle: string
  icon?: ReactNode
}
const Statistic = ({ icon, price, subtitle }: Props) => {
  return (
    <div className="statistic col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-md group hover:bg-primary transition-all duration-300 cursor-pointer py-8 px-12 flex items-center justify-center flex-col text-center border border-slate-400">
      <div className="service-icon bg-slate-400 group-hover:bg-slate-300 transition-all duration-300 p-2 rounded-full">
        <span className='transition-all duration-300 group-hover:text-black group-hover:bg-white bg-black p-5 text-3xl block text-white rounded-full'>
          {icon}
        </span>
      </div>
      <div className="title transition-all duration-300 group-hover:text-white">
        <h4 className=' text-4xl pb-3 pt-6'>{price}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Statistic