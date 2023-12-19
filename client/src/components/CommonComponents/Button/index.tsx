import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    bgPrimary?: boolean,
    bgSuccess?: boolean,
    fullBtn?:boolean
}

const Button = ({ children, bgPrimary, bgSuccess, fullBtn }: Props) => {
    const bgPrimaryClass = bgPrimary ? 'bg-primary hover:bg-red-400 focus:ring-primary/50' : ''
    const bgSuccesClass = bgSuccess ? 'bg-success hover:bg-green-500 focus:ring-success/50' : ''
    const fullBtnClass = fullBtn ? 'w-full' : ''
    return (
        <button className={`outline-none border-none ${bgPrimaryClass || bgSuccesClass} transition focus:ring-4 focus:outline-none  ${fullBtnClass} duration-200 rounded-md text-white lg:py-4 lg:px-12 py-2 px-8 lg:text-base md:text-[14px] text-[12px]`}>
            {children}
        </button>
    )
}

export default Button